import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '@/components/ui/button'
import { useState, type FormEvent } from 'react'
import { Spinner } from '../ui/spinner'

export default function ContentCreate() {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ title: '', description: '' })
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
  }

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.currentTarget
    setForm({ ...form, [name]: value })
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">Article writer</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type your description here."
            id="description"
            name="description"
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading && <Spinner />}
          Generate
        </Button>
      </form>
    </div>
  )
}
