> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcameraposition/item(_:allowsautomaticpitch:)](https://developer.apple.com/documentation/mapkit/mapcameraposition/item(_:allowsautomaticpitch:))

# item(\_:allowsAutomaticPitch:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a new camera position centered on a map item and automatic pitch selection you provide.

## Declaration

```swift
static func item(_ item: MKMapItem, allowsAutomaticPitch: Bool = true) -> MapCameraPosition
```

## Parameters

- `item`: The [MKMapItem](../mkmapitem.md) to center the map on.
- `allowsAutomaticPitch`: A Boolean value that indicates whether the camera selects a pitch automatically.

<a id="return-value"></a>

## Return Value

Returns a new [MapCameraPosition](../mapcameraposition.md).

## See Also

### Creating a camera position

- [camera(\_:)](camera%28__%29.md): Creates a new camera position from an existing map camera you provide.
- [rect(\_:)](rect%28__%29.md): Creates a new camera position with the map boundaries you provide.
- [region(\_:)](region%28__%29.md): Creates a new camera position the coordinate region you provide.
- [userLocation(followsHeading:fallback:)](userlocation%28followsheading_fallback_%29.md): Creates a camera position with the specific fallback position and optionally follows the user’s heading.
