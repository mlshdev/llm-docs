> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/requiredthreadspermeshthreadgroup](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/requiredthreadspermeshthreadgroup)

# requiredThreadsPerMeshThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var requiredThreadsPerMeshThreadgroup: MTLSize { get }
```

<a id="discussion"></a>

## Discussion

The required size of every mesh shader threadgroup.

This value is set in MTLMeshRenderPipelineDescriptor.

# requiredThreadsPerMeshThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (readonly) MTLSize requiredThreadsPerMeshThreadgroup;
```

<a id="discussion"></a>

## Discussion

The required size of every mesh shader threadgroup.

This value is set in MTLMeshRenderPipelineDescriptor.
