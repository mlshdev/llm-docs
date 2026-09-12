> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcameraposition/rect(_:)](https://developer.apple.com/documentation/mapkit/mapcameraposition/rect(_:))

# rect(\_:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new camera position with the map boundaries you provide.

## Declaration

```swift
static func rect(_ rect: MKMapRect) -> MapCameraPosition
```

## Parameters

- `rect`: An [MKMapRect](../mkmaprect.md) that describes the camera boundaries.

## See Also

### Creating a camera position

- [camera(\_:)](camera%28__%29.md): Creates a new camera position from an existing map camera you provide.
- [item(\_:allowsAutomaticPitch:)](item%28__allowsautomaticpitch_%29.md): Creates a new camera position centered on a map item and automatic pitch selection you provide.
- [region(\_:)](region%28__%29.md): Creates a new camera position the coordinate region you provide.
- [userLocation(followsHeading:fallback:)](userlocation%28followsheading_fallback_%29.md): Creates a camera position with the specific fallback position and optionally follows the user’s heading.
