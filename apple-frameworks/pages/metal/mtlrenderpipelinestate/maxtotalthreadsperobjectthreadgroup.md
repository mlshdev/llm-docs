> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/maxtotalthreadsperobjectthreadgroup

# maxTotalThreadsPerObjectThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single object shader threadgroup.

## Declaration

```swift
var maxTotalThreadsPerObjectThreadgroup: Int { get }
```

## See Also

### Checking object shader memory requirements

- [objectThreadExecutionWidth](objectthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for an object shader.

# maxTotalThreadsPerObjectThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The largest number of threads the pipeline state can have in a single object shader threadgroup.

## Declaration

```objectivec
@property (readonly) NSUInteger maxTotalThreadsPerObjectThreadgroup;
```

## See Also

### Checking object shader memory requirements

- [objectThreadExecutionWidth](objectthreadexecutionwidth.md): The number of threads the render pass applies to a SIMD group for an object shader.
