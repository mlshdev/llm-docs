> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmeshrenderpipelinedescriptor/requiredthreadspermeshthreadgroup](https://developer.apple.com/documentation/metal/mtlmeshrenderpipelinedescriptor/requiredthreadspermeshthreadgroup)

# requiredThreadsPerMeshThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var requiredThreadsPerMeshThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

Sets the required mesh threads-per-threadgroup during mesh draws. The `threadsPerMeshThreadgroup` argument of any draw must match to this value if it is set. Setting this to a size of 0 in every dimension disables this property

# requiredThreadsPerMeshThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerMeshThreadgroup;
```

<a id="discussion"></a>

## Discussion

Sets the required mesh threads-per-threadgroup during mesh draws. The `threadsPerMeshThreadgroup` argument of any draw must match to this value if it is set. Setting this to a size of 0 in every dimension disables this property
