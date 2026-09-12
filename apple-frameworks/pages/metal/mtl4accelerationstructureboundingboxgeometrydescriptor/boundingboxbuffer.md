> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructureboundingboxgeometrydescriptor/boundingboxbuffer)

# boundingBoxBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

References a buffer containing bounding box data in `MTLAxisAlignedBoundingBoxes` format.

## Declaration

```swift
var boundingBoxBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the buffer address of the range is not zero.

# boundingBoxBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

References a buffer containing bounding box data in `MTLAxisAlignedBoundingBoxes` format.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange boundingBoxBuffer;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the buffer address of the range is not zero.
