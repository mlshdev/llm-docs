> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructure-swift.enum/program/binding](https://developer.apple.com/documentation/coreml/mlmodelstructure-swift.enum/program/binding)

# MLModelStructure.Program.Binding

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

An enum representing a binding.

## Declaration

```swift
enum Binding
```

<a id="overview"></a>

## Overview

A Binding  is either a previously defined name of a variable or a constant value in the Program.

## Topics

### Bindings

- [MLModelStructure.Program.Binding.name(\_:)](binding/name%28__%29.md): The name of the previously defined variable in the Program.
- [MLModelStructure.Program.Binding.value(\_:)](binding/value%28__%29.md): A constant value in the Program.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the program types

- [MLModelStructure.Program.Argument](argument.md): A struct representing an argument in the Program.
- [MLModelStructure.Program.Block](block.md): A struct representing a block in the Program.
- [MLModelStructure.Program.Function](function.md): A struct representing a function in the Program.
- [MLModelStructure.Program.NamedValueType](namedvaluetype.md): A struct representing a named type in a Program.
- [MLModelStructure.Program.Operation](operation.md): A struct representing an Operation in the Program.
- [MLModelStructure.Program.Value](value.md): A struct representing the value of a variable in the Program.
- [MLModelStructure.Program.ValueType](valuetype.md): A struct representing the type of a variable in the Program.
