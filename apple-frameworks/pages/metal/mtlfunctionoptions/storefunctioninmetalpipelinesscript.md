> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions/storefunctioninmetalpipelinesscript](https://developer.apple.com/documentation/metal/mtlfunctionoptions/storefunctioninmetalpipelinesscript)

# storeFunctionInMetalPipelinesScript (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An option that instructs the compiler to store function information for inspecting binary archives.

## Declaration

```swift
static var storeFunctionInMetalPipelinesScript: MTLFunctionOptions { get }
```

<a id="discussion"></a>

## Discussion

Set this option when you want to inspect or consume binary archives with the `metal-source` tool. You don’t need this option when you recompile functions or store them in binary archives.

## See Also

### Function compilation options

- [failOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [compileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [pipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [storeFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.

# MTLFunctionOptionStoreFunctionInMetalPipelinesScript (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An option that instructs the compiler to store function information for inspecting binary archives.

## Declaration

```objectivec
MTLFunctionOptionStoreFunctionInMetalPipelinesScript
```

<a id="discussion"></a>

## Discussion

Set this option when you want to inspect or consume binary archives with the `metal-source` tool. You don’t need this option when you recompile functions or store them in binary archives.

## See Also

### Function compilation options

- [MTLFunctionOptionNone](mtlfunctionoptionnone.md): A sentinel value that represents an empty set of options, which is the default behavior for creating functions.
- [MTLFunctionOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLFunctionOptionCompileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionPipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [MTLFunctionOptionStoreFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.
