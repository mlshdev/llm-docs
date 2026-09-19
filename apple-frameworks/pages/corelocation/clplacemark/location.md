> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clplacemark/location

# location (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The location object containing latitude and longitude information.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```swift
@NSCopying var location: CLLocation? { get }
```

<a id="Discussion"></a>

## Discussion

Use this object to initialize the placemark object.

## See Also

### Getting the placemark’s location

- [region](region.md): Deprecated. The geographic region associated with the placemark.

# location (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.2) · iPadOS 5.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The location object containing latitude and longitude information.

> Use either GeoToolbox.PlaceDescriptor or MapKit

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

Use this object to initialize the placemark object.

## See Also

### Getting the placemark’s location

- [region](region.md): Deprecated. The geographic region associated with the placemark.
