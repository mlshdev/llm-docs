> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructureboundingboxgeometrydescriptor/boundingboxstride](https://developer.apple.com/documentation/metal/mtl4accelerationstructureboundingboxgeometrydescriptor/boundingboxstride)

# boundingBoxStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the stride, in bytes, between bounding boxes in the bounding box buffer `boundingBoxBuffer` references.

## Declaration

```swift
var boundingBoxStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this stride is at least 24 bytes and a multiple of 4 bytes.

This property defaults to `24` bytes.

# boundingBoxStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the stride, in bytes, between bounding boxes in the bounding box buffer `boundingBoxBuffer` references.

## Declaration

```objectivec
@property (nonatomic) NSUInteger boundingBoxStride;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this stride is at least 24 bytes and a multiple of 4 bytes.

This property defaults to `24` bytes.
