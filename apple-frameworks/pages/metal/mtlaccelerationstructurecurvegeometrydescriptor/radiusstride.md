> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/radiusstride

# radiusStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The stride, in bytes, between the radius elements in the radius buffer.

## Declaration

```swift
var radiusStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The stride needs to be a multiple of the radius format size you configure with the [radiusFormat](radiusformat.md) property. The default value is `0`, which indicates that the radius elements in the buffer have zero bytes of padding between them.

# radiusStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The stride, in bytes, between the radius elements in the radius buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger radiusStride;
```

<a id="discussion"></a>

## Discussion

The stride needs to be a multiple of the radius format size you configure with the [radiusFormat](radiusformat.md) property. The default value is `0`, which indicates that the radius elements in the buffer have zero bytes of padding between them.
