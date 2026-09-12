> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions/storefunctioninmetalscript](https://developer.apple.com/documentation/metal/mtlfunctionoptions/storefunctioninmetalscript)

# storeFunctionInMetalScript (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 17.0+ (deprecated in 18.0) · iPadOS 17.0+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0) · macOS 14.0+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An option that instructs the compiler to store function information for inspecting binary archives.

> Use [storeFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md) instead.

## Declaration

```swift
static var storeFunctionInMetalScript: MTLFunctionOptions { get }
```

## See Also

### Function compilation options

- [failOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [compileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [pipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [storeFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.

# MTLFunctionOptionStoreFunctionInMetalScript (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ (deprecated in 18.0) · iPadOS 17.0+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0) · macOS 14.0+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An option that instructs the compiler to store function information for inspecting binary archives.

> Use [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md) instead.

## Declaration

```objectivec
MTLFunctionOptionStoreFunctionInMetalScript
```

## See Also

### Function compilation options

- [MTLFunctionOptionNone](mtlfunctionoptionnone.md): A sentinel value that represents an empty set of options, which is the default behavior for creating functions.
- [MTLFunctionOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLFunctionOptionCompileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionPipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
