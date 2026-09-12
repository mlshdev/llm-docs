> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/radiusstride](https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/radiusstride)

# radiusStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the stride, in bytes, between radii in the radius buffer.

## Declaration

```swift
var radiusStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this property is set to a multiple of the size corresponding to the [radiusFormat](radiusformat.md).

This property defaults to `0` bytes, indicating that the radii are tightly packed.

# radiusStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the stride, in bytes, between radii in the radius buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger radiusStride;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring this property is set to a multiple of the size corresponding to the [radiusFormat](radiusformat.md).

This property defaults to `0` bytes, indicating that the radii are tightly packed.
