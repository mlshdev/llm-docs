> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapproxy/camera(framing:)-1asl2](https://developer.apple.com/documentation/mapkit/mapproxy/camera(framing:)-1asl2)

# camera(framing:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a camera in the context of the map that frames the given coordinate region.

## Declaration

```swift
func camera(framing region: MKCoordinateRegion) -> MapCamera
```

## Parameters

- `region`: The coordinate region to frame.

<a id="return-value"></a>

## Return Value

Returns a [MapCamera](../mapcamera.md) with the framing region you specified.

## See Also

### Creating a camera proxy

- [camera(framing:)](camera%28framing_%29-uxov.md): Creates a camera in the context of the map that frames the given map rectangle.
- [camera(framing:allowPitch:)](camera%28framing_allowpitch_%29.md): Creates a camera in the context of the map that frames the given map item.
