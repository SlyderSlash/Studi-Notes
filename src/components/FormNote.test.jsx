import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import FormNote from './FormNote'

describe('FormNote Component', () => {
    it('should say bonjour', () => {
        render(<FormNote fname="Jean"/>)
        expect(screen.findAllByText('Bonjour'))
    })
    it('should say bonjour to Jean', () => {
        render(<FormNote fname="Jean"/>)
        expect(screen.getByText('Bonjour Jean'))
    })
    it('should not say bonjour to Edward', () => {
        render(<FormNote fname="Jean"/>)
        expect(screen.findByText('Edward')).not.to
    })
})

