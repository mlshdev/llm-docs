> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmeshrenderpipelinedescriptor/requiredthreadsperobjectthreadgroup](https://developer.apple.com/documentation/metal/mtlmeshrenderpipelinedescriptor/requiredthreadsperobjectthreadgroup)

# requiredThreadsPerObjectThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var requiredThreadsPerObjectThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

Sets the required object threads-per-threadgroup during mesh draws. The `threadsPerObjectThreadgroup` argument of any draw must match to this value if it is set. Setting this to a size of 0 in every dimension disables this property

# requiredThreadsPerObjectThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerObjectThreadgroup;
```

<a id="discussion"></a>

## Discussion

Sets the required object threads-per-threadgroup during mesh draws. The `threadsPerObjectThreadgroup` argument of any draw must match to this value if it is set. Setting this to a size of 0 in every dimension disables this property
