> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions/mtlfunctionoptionnone](https://developer.apple.com/documentation/metal/mtlfunctionoptions/mtlfunctionoptionnone)

# MTLFunctionOptionNone

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A sentinel value that represents an empty set of options, which is the default behavior for creating functions.

## Declaration

```objectivec
MTLFunctionOptionNone
```

## See Also

### Function compilation options

- [MTLFunctionOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLFunctionOptionCompileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionPipelineIndependent](pipelineindependent.md): An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.
- [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [MTLFunctionOptionStoreFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.
