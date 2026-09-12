> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation/instanceatpoint(_:)](https://developer.apple.com/documentation/vision/instancemaskobservation/instanceatpoint(_:))

# instanceAtPoint(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns an instance at the point you specify.

## Declaration

```swift
func instanceAtPoint(_ point: NormalizedPoint) -> IndexSet
```

## See Also

### Getting instances

- [allInstances](allinstances.md): The collection that contains all instances, excluding the background.
- [allInstancesMask](allinstancesmask.md): The resulting mask that represents all instances.
- [PixelBufferObservation](../pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.
