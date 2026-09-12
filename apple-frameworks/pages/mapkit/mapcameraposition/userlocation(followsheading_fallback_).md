> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcameraposition/userlocation(followsheading:fallback:)](https://developer.apple.com/documentation/mapkit/mapcameraposition/userlocation(followsheading:fallback:))

# userLocation(followsHeading:fallback:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a camera position with the specific fallback position and optionally follows the user’s heading.

## Declaration

```swift
static func userLocation(followsHeading: Bool = false, fallback: MapCameraPosition) -> MapCameraPosition
```

## Parameters

- `followsHeading`: A Boolean value that indicates whether the camera follows the person’s heading.
- `fallback`: A fallback position to use if the map hasn’t resolved the person’s location.

<a id="return-value"></a>

## Return Value

A new [MapCameraPosition](../mapcameraposition.md).

## See Also

### Creating a camera position

- [camera(\_:)](camera%28__%29.md): Creates a new camera position from an existing map camera you provide.
- [item(\_:allowsAutomaticPitch:)](item%28__allowsautomaticpitch_%29.md): Creates a new camera position centered on a map item and automatic pitch selection you provide.
- [rect(\_:)](rect%28__%29.md): Creates a new camera position with the map boundaries you provide.
- [region(\_:)](region%28__%29.md): Creates a new camera position the coordinate region you provide.
