> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionoptions/pipelineindependent](https://developer.apple.com/documentation/metal/mtlfunctionoptions/pipelineindependent)

# pipelineIndependent (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.

## Declaration

```swift
static var pipelineIndependent: MTLFunctionOptions { get }
```

<a id="discussion"></a>

## Discussion

By default, when you link an [MTLFunction](../mtlfunction.md) into a pipeline state, Metal generates a function handle that points to that function’s location in the pipeline’s executable code. Because different pipeline states place functions at different memory addresses, Metal generates different function handles for the same function in each pipeline state. You insert function handles into an [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) or [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instance, which means you need separate function tables for each pipeline state by default.

When you compile a function with this option, Metal generates the same function handle for the function across all pipeline states that link it. This consistency lets you create a single function table and use it with multiple pipeline states, which reduces memory overhead and simplifies function table management.

> **Note**

> This option only works with functions that you compile with the [compileToBinary](compiletobinary.md) option.

## See Also

### Function compilation options

- [failOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [compileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [storeFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [storeFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.

# MTLFunctionOptionPipelineIndependent (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that generates the same function handle across all pipeline states that link a function, which lets you share function tables across pipeline states.

## Declaration

```objectivec
MTLFunctionOptionPipelineIndependent
```

<a id="discussion"></a>

## Discussion

By default, when you link an [MTLFunction](../mtlfunction.md) into a pipeline state, Metal generates a function handle that points to that function’s location in the pipeline’s executable code. Because different pipeline states place functions at different memory addresses, Metal generates different function handles for the same function in each pipeline state. You insert function handles into an [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) or [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instance, which means you need separate function tables for each pipeline state by default.

When you compile a function with this option, Metal generates the same function handle for the function across all pipeline states that link it. This consistency lets you create a single function table and use it with multiple pipeline states, which reduces memory overhead and simplifies function table management.

> **Note**

> This option only works with functions that you compile with the [MTLFunctionOptionCompileToBinary](compiletobinary.md) option.

## See Also

### Function compilation options

- [MTLFunctionOptionNone](mtlfunctionoptionnone.md): A sentinel value that represents an empty set of options, which is the default behavior for creating functions.
- [MTLFunctionOptionFailOnBinaryArchiveMiss](failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLFunctionOptionCompileToBinary](compiletobinary.md): An option that instructs the compiler to generate a binary format for dynamic linking.
- [MTLFunctionOptionStoreFunctionInMetalPipelinesScript](storefunctioninmetalpipelinesscript.md): An option that instructs the compiler to store function information for inspecting binary archives.
- [MTLFunctionOptionStoreFunctionInMetalScript](storefunctioninmetalscript.md): Deprecated. An option that instructs the compiler to store function information for inspecting binary archives.
