> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation/allinstancesmask](https://developer.apple.com/documentation/vision/instancemaskobservation/allinstancesmask)

# allInstancesMask

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The resulting mask that represents all instances.

## Declaration

```swift
let allInstancesMask: PixelBufferObservation
```

<a id="Discussion"></a>

## Discussion

A pixel can only correspond to one instance. A `0` represents the background, and all other values represent the indices of the instances.

## See Also

### Getting instances

- [instanceAtPoint(\_:)](instanceatpoint%28__%29.md): Returns an instance at the point you specify.
- [allInstances](allinstances.md): The collection that contains all instances, excluding the background.
- [PixelBufferObservation](../pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
