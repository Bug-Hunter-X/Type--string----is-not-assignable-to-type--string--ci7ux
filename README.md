# Type 'string[]' is not assignable to type 'string'

This bug demonstrates a common error in TypeScript when dealing with type checking.  The `greeter` function expects a string argument, but we're passing an array of strings. TypeScript correctly flags this as a type error. The solution involves either modifying the function signature or changing how the user variable is handled.