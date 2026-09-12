> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecompiler(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makecompiler(descriptor:))

# makeCompiler(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new compiler from a compiler descriptor.

## Declaration

```swift
func makeCompiler(descriptor: MTL4CompilerDescriptor) throws -> any MTL4Compiler
```

## Parameters

- `descriptor`: A [MTL4CompilerDescriptor](../mtl4compilerdescriptor.md) instance that configures the [MTL4Compiler](../mtl4compiler.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4Compiler](../mtl4compiler.md) instance, or `nil` if the function failed.

# newCompilerWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new compiler from a compiler descriptor.

## Declaration

```objectivec
- (id<MTL4Compiler>) newCompilerWithDescriptor:(MTL4CompilerDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A [MTL4CompilerDescriptor](../mtl4compilerdescriptor.md) instance that configures the [MTL4Compiler](../mtl4compiler.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4Compiler](../mtl4compiler.md) instance, or `nil` if the function failed.
