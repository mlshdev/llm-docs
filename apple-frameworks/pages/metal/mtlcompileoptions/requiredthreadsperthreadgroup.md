> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcompileoptions/requiredthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtlcompileoptions/requiredthreadsperthreadgroup)

# requiredThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var requiredThreadsPerThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

Sets the required threads-per-threadgroup during dispatches. The `threadsPerThreadgroup` argument of any dispatch must match this value if it is set. Setting this to a size of 0 in every dimension disables this property

# requiredThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerThreadgroup;
```

<a id="discussion"></a>

## Discussion

Sets the required threads-per-threadgroup during dispatches. The `threadsPerThreadgroup` argument of any dispatch must match this value if it is set. Setting this to a size of 0 in every dimension disables this property
