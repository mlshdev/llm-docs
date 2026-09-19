> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clplacemark/inlandwater

# inlandWater (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The name of the inland water body associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
var inlandWater: String? { get }
```

<a id="Discussion"></a>

## Discussion

For coordinates that lie over an inland body of water, this property contains the name of that water body—the name of a lake, stream, river, or other waterway.

## See Also

### Getting landscape information

- [ocean](ocean.md): Deprecated. The name of the ocean associated with the placemark.

# inlandWater (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The name of the inland water body associated with the placemark.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * inlandWater;
```

<a id="Discussion"></a>

## Discussion

For coordinates that lie over an inland body of water, this property contains the name of that water body—the name of a lake, stream, river, or other waterway.

## See Also

### Getting landscape information

- [ocean](ocean.md): Deprecated. The name of the ocean associated with the placemark.
