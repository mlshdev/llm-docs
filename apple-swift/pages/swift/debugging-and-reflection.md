> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/debugging-and-reflection](https://developer.apple.com/documentation/swift/debugging-and-reflection)

# Debugging and Reflection

**Framework:** Swift  
**Kind:** API Collection

Fortify your code with runtime checks, and examine your values’ runtime representation.

## Topics

### Printing and Dumping

- [print(\_:separator:terminator:)](print%28__separator_terminator_%29.md): Writes the textual representations of the given items into the standard output.
- [print(\_:separator:terminator:to:)](print%28__separator_terminator_to_%29.md): Writes the textual representations of the given items into the given output stream.
- [debugPrint(\_:separator:terminator:)](debugprint%28__separator_terminator_%29.md): Writes the textual representations of the given items most suitable for debugging into the standard output.
- [debugPrint(\_:separator:terminator:to:)](debugprint%28__separator_terminator_to_%29.md): Writes the textual representations of the given items most suitable for debugging into the given output stream.
- [dump(\_:name:indent:maxDepth:maxItems:)](dump%28__name_indent_maxdepth_maxitems_%29.md): Dumps the given object’s contents using its mirror to standard output.
- [dump(\_:to:name:indent:maxDepth:maxItems:)](dump%28__to_name_indent_maxdepth_maxitems_%29.md): Dumps the given object’s contents using its mirror to the specified output stream.

### Testing

- [assert(\_:\_:file:line:)](assert%28____file_line_%29.md): Performs a traditional C-style assert with an optional message.
- [assertionFailure(\_:file:line:)](assertionfailure%28__file_line_%29.md): Indicates that an internal consistency check failed.
- [precondition(\_:\_:file:line:)](precondition%28____file_line_%29.md): Checks a necessary condition for making forward progress.
- [preconditionFailure(\_:file:line:)](preconditionfailure%28__file_line_%29.md): Indicates that a precondition was violated.

### Exiting a Program

- [fatalError(\_:file:line:)](fatalerror%28__file_line_%29.md): Unconditionally prints a given message and stops execution.
- [Never](never.md): A type that has no values and can’t be constructed.

### Querying Runtime Values

- [Mirror](mirror.md): A representation of the substructure and display style of an instance of any type.
- [ObjectIdentifier](objectidentifier.md): A unique identifier for a class instance, actor instance, or metatype.
- [type(of:)](type%28of_%29.md): Returns the dynamic type of a value.

### Customizing Your Type’s Reflection

Provide a custom reflection for your types using these protocols.

- [CustomReflectable](customreflectable.md): A type that explicitly supplies its own mirror.
- [CustomLeafReflectable](customleafreflectable.md): A type that explicitly supplies its own mirror, but whose descendant classes are not represented in the mirror unless they also override `customMirror`.
- [CustomPlaygroundDisplayConvertible](customplaygrounddisplayconvertible.md): A type that supplies a custom description for playground logging.
- [PlaygroundQuickLook](playgroundquicklook.md): Deprecated. The sum of types that can be used as a Quick Look representation.
- [DebugDescription()](debugdescription%28%29.md): Converts description definitions to a debugger Type Summary.

## See Also

### Programming Tasks

- [Input and Output](input-and-output.md): Print values to the console, read from and write to text streams, and use command line arguments.
- [Macros](macros.md): Generate boilerplate code and perform other compile-time operations.
- [Concurrency](concurrency.md): Perform asynchronous and parallel operations.
- [Key-Path Expressions](key-path-expressions.md): Use key-path expressions to access properties dynamically.
- [Manual Memory Management](manual-memory-management.md): Allocate and manage memory manually.
- [Type Casting and Existential Types](type-casting-and-existential-types.md): Perform casts between types or represent values of any type.
- [C Interoperability](c-interoperability.md): Use imported C types or call C variadic functions.
- [Operator Declarations](operator-declarations.md): Work with prefix, postfix, and infix operators.
