> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/macros](https://developer.apple.com/documentation/swift/macros)

# Macros

**Framework:** Swift  
**Kind:** API Collection

Generate boilerplate code and perform other compile-time operations.

## Topics

### Essentials

- [Applying Macros](applying-macros.md): Use macros to generate repetitive code at compile time.

### Getting Source Location Information

- [file()](file%28%29.md): Produces the path to the file in which it appears.
- [fileID()](fileid%28%29.md): Produces a unique identifier for the source file in which the macro appears.
- [filePath()](filepath%28%29.md): Produces the complete path to the file in which the macro appears.
- [function()](function%28%29.md): Produces the name of the declaration in which it appears.
- [line()](line%28%29.md): Produces the line number on which it appears.
- [column()](column%28%29.md): Produces the column number in which the macro begins.

### Generating Compile-Time Diagnostics

- [warning(\_:)](warning%28__%29.md): Produces the given warning message during compilation.
- [error(\_:)](error%28__%29.md): Emits the given message as a fatal error and terminates the compilation process.

### Writing Custom Macros

- [externalMacro(module:type:)](externalmacro%28module_type_%29.md): Specifies the module and type name for a macro’s implementation.

### Accessing the Dynamic Shared Object Handle

- [dsohandle()](dsohandle%28%29.md): Produces the dynamic shared object (DSO) handle in use where the macro appears.

## See Also

### Programming Tasks

- [Input and Output](input-and-output.md): Print values to the console, read from and write to text streams, and use command line arguments.
- [Debugging and Reflection](debugging-and-reflection.md): Fortify your code with runtime checks, and examine your values’ runtime representation.
- [Concurrency](concurrency.md): Perform asynchronous and parallel operations.
- [Key-Path Expressions](key-path-expressions.md): Use key-path expressions to access properties dynamically.
- [Manual Memory Management](manual-memory-management.md): Allocate and manage memory manually.
- [Type Casting and Existential Types](type-casting-and-existential-types.md): Perform casts between types or represent values of any type.
- [C Interoperability](c-interoperability.md): Use imported C types or call C variadic functions.
- [Operator Declarations](operator-declarations.md): Work with prefix, postfix, and infix operators.
