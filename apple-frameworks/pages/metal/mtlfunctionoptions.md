> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions](https://developer.apple.com/documentation/metal/mtlfunctionoptions)

# MTLFunctionOptions (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options that define how Metal compiles a GPU function.

## Declaration

```swift
struct MTLFunctionOptions
```

## Topics

### Function compilation options

- [failOnBinaryArchiveMiss](mtlfunctionoptions/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [compileToBinary](mtlfunctionoptions/compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [pipelineIndependent](mtlfunctionoptions/pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [storeFunctionInMetalPipelinesScript](mtlfunctionoptions/storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [storeFunctionInMetalScript](mtlfunctionoptions/storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.

### Swift support

- [init(rawValue:)](mtlfunctionoptions/init%28rawvalue_%29.md): Creates a new function options structure from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [MTLFunctionType](mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.

# MTLFunctionOptions (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Options that define how Metal compiles a GPU function.

## Declaration

```objectivec
enum MTLFunctionOptions : NSUInteger;
```

## Topics

### Function compilation options

- [MTLFunctionOptionNone](mtlfunctionoptions/mtlfunctionoptionnone.md): A sentinel value that represents an empty set of options, which is the default behavior for creating functions.
- [MTLFunctionOptionFailOnBinaryArchiveMiss](mtlfunctionoptions/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLFunctionOptionCompileToBinary](mtlfunctionoptions/compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionPipelineIndependent](mtlfunctionoptions/pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](mtlfunctionoptions/storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [MTLFunctionOptionStoreFunctionInMetalScript](mtlfunctionoptions/storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.

## See Also

### Identifying shader functions

- [device](mtlfunction/device.md): The device object that created the shader function.
- [label](mtlfunction/label.md): A string that identifies the shader function.
- [functionType](mtlfunction/functiontype.md): The shader function’s type.
- [name](mtlfunction/name.md): The function’s name.
- [MTLFunctionType](mtlfunctiontype.md): The type of a top-level Metal Shading Language (MSL) function.
- [options](mtlfunction/options.md): The options that Metal used to compile this function.
