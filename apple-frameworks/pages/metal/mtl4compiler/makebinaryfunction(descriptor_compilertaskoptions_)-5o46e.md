> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makebinaryfunction(descriptor:compilertaskoptions:)-5o46e](https://developer.apple.com/documentation/metal/mtl4compiler/makebinaryfunction(descriptor:compilertaskoptions:)-5o46e)

# makeBinaryFunction(descriptor:compilerTaskOptions:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new binary visible or intersection function synchronously.

## Declaration

```swift
func makeBinaryFunction(descriptor: MTL4BinaryFunctionDescriptor, compilerTaskOptions: MTL4CompilerTaskOptions? = nil) throws -> any MTL4BinaryFunction
```

## Parameters

- `descriptor`: A binary function descriptor to use for creating the binary function.
- `compilerTaskOptions`: A descriptor of the compilation itself, providing parameters that influence execution of the compilation process.

<a id="return-value"></a>

## Return Value

A binary function upon success, otherwise this function throws.
