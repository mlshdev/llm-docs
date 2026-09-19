> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mappin/init(coordinate:tint:)

# init(coordinate:tint:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · visionOS · watchOS 7.0+ (deprecated in 9.0)

Creates a map pin at the map location that you specify.

> Use Marker

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, tint: Color? = nil)
```

## Parameters

- `coordinate`: The location of the specified pin.
- `tint`: The color of the pin.
