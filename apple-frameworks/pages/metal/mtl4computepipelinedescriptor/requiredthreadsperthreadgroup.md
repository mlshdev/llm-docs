> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computepipelinedescriptor/requiredthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtl4computepipelinedescriptor/requiredthreadsperthreadgroup)

# requiredThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The required number of threads per threadgroup for compute dispatches.

## Declaration

```swift
var requiredThreadsPerThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

When you set this value, you are responsible for ensuring that the `threadsPerThreadgroup` argument of any compute dispatch matches it.

Setting this property is optional, except in cases where the pipeline uses *CooperativeTensors*.

This property’s default value is `0`, which disables its effect.

# requiredThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The required number of threads per threadgroup for compute dispatches.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerThreadgroup;
```

<a id="discussion"></a>

## Discussion

When you set this value, you are responsible for ensuring that the `threadsPerThreadgroup` argument of any compute dispatch matches it.

Setting this property is optional, except in cases where the pipeline uses *CooperativeTensors*.

This property’s default value is `0`, which disables its effect.
