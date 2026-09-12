> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/controlpointbufferoffset)

# controlPointBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the control point data in the buffer.

## Declaration

```swift
var controlPointBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the format element size you configure with the [controlPointFormat](controlpointformat.md) property. You also need to align the offset to the platform’s buffer alignment requirement.

# controlPointBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the control point data in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger controlPointBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the format element size you configure with the [controlPointFormat](controlpointformat.md) property. You also need to align the offset to the platform’s buffer alignment requirement.
