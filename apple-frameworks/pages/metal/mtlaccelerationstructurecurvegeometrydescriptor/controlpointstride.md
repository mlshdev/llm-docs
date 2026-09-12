> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointstride](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointstride)

# controlPointStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The stride, in bytes, between control points in the buffer.

## Declaration

```swift
var controlPointStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride needs to be a multiple of the format element size you configure with the [controlPointFormat](controlpointformat.md) property, and at least the format’s size. The default value is `0`, which indicates that the control point elements in the buffer have zero bytes of padding between them.

# controlPointStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The stride, in bytes, between control points in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger controlPointStride;
```

<a id="discussion"></a>

## Discussion

The stride needs to be a multiple of the format element size you configure with the [controlPointFormat](controlpointformat.md) property, and at least the format’s size. The default value is `0`, which indicates that the control point elements in the buffer have zero bytes of padding between them.
