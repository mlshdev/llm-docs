> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/radiusbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/radiusbufferoffset)

# radiusBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the radius data in the buffer.

## Declaration

```swift
var radiusBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the radius format you configure with the [radiusFormat](radiusformat.md) property. You also need to align the offset to both the radius format’s size and the platform’s buffer alignment requirement.

# radiusBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the radius data in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger radiusBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the radius format you configure with the [radiusFormat](radiusformat.md) property. You also need to align the offset to both the radius format’s size and the platform’s buffer alignment requirement.
