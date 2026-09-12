> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions/failonbinaryarchivemiss](https://developer.apple.com/documentation/metal/mtlfunctionoptions/failonbinaryarchivemiss)

# failOnBinaryArchiveMiss (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.

## Declaration

```swift
static var failOnBinaryArchiveMiss: MTLFunctionOptions { get }
```

<a id="discussion"></a>

## Discussion

By default, Metal compiles a function if it isn’t in a binary archive. When you set this option, Metal returns an error instead of compiling a missing function.

Setting this option is a way to verify that binary archives contain all the functions your app needs, or to measure a binary archive’s hit rates.

## See Also

### Function compilation options

- [compileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [pipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [storeFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [storeFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.

# MTLFunctionOptionFailOnBinaryArchiveMiss (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.

## Declaration

```objectivec
MTLFunctionOptionFailOnBinaryArchiveMiss
```

<a id="discussion"></a>

## Discussion

By default, Metal compiles a function if it isn’t in a binary archive. When you set this option, Metal returns an error instead of compiling a missing function.

Setting this option is a way to verify that binary archives contain all the functions your app needs, or to measure a binary archive’s hit rates.

## See Also

### Function compilation options

- [MTLFunctionOptionNone](mtlfunctionoptionnone.md): A sentinel value that represents an empty set of options, which is the default behavior for creating functions.
- [MTLFunctionOptionCompileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionPipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [MTLFunctionOptionStoreFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.
