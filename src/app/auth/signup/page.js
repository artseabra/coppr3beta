// src/app/auth/signup/page.js
'use client'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}