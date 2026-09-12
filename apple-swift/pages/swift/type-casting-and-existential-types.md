> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/type-casting-and-existential-types](https://developer.apple.com/documentation/swift/type-casting-and-existential-types)

# Type Casting and Existential Types

**Framework:** Swift  
**Kind:** API Collection

Perform casts between types or represent values of any type.

## Topics

### Integer Value Casting

- [numericCast(\_:)](numericcast%28__%29.md): Returns the given integer as the equivalent value in a different integer type.

### Closure Casting

- [withoutActuallyEscaping(\_:do:)](withoutactuallyescaping%28__do_%29.md): Allows a nonescaping closure to temporarily be used as if it were allowed to escape.

### Instance Casting

- [unsafeDowncast(\_:to:)](unsafedowncast%28__to_%29.md): Returns the given instance cast unconditionally to the specified type.
- [unsafeBitCast(\_:to:)](unsafebitcast%28__to_%29.md): Returns the bits of the given instance, interpreted as having the specified type.

### Existential Types

Use a variable or constant with an existential type to hold an instance of any type.

- [AnyObject](anyobject.md): The protocol to which all classes implicitly conform.
- [AnyClass](anyclass.md): The protocol to which all class types implicitly conform.

### Comparing Identity

- [===(\_:\_:)](===%28____%29.md)
- [!==(\_:\_:)](!==%28____%29.md): Returns a Boolean value indicating whether two references point to different object instances.

### Void Type

- [Void](void.md): The return type of functions that don’t explicitly specify a return type, that is, an empty tuple `()`.

## See Also

### Programming Tasks

- [Input and Output](input-and-output.md): Print values to the console, read from and write to text streams, and use command line arguments.
- [Debugging and Reflection](debugging-and-reflection.md): Fortify your code with runtime checks, and examine your values’ runtime representation.
- [Macros](macros.md): Generate boilerplate code and perform other compile-time operations.
- [Concurrency](concurrency.md): Perform asynchronous and parallel operations.
- [Key-Path Expressions](key-path-expressions.md): Use key-path expressions to access properties dynamically.
- [Manual Memory Management](manual-memory-management.md): Allocate and manage memory manually.
- [C Interoperability](c-interoperability.md): Use imported C types or call C variadic functions.
- [Operator Declarations](operator-declarations.md): Work with prefix, postfix, and infix operators.
