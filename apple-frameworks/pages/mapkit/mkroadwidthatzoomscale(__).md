> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkroadwidthatzoomscale(_:)](https://developer.apple.com/documentation/mapkit/mkroadwidthatzoomscale(_:))

# MKRoadWidthAtZoomScale(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the width (in screen points) of roads on a map at the specified zoom level.

## Declaration

```swift
func MKRoadWidthAtZoomScale(_ zoomScale: MKZoomScale) -> CGFloat
```

## Parameters

- `zoomScale`: The scale factor currently applied to the map view.

<a id="return-value"></a>

## Return Value

The width of roads, measured in screen points. You can use the returned value to set the width of lines in drawing code that traces the path of a road.

## See Also

### Types

- [MKZoomScale](mkzoomscale.md): A scale factor to use in conjunction with a map.

# MKRoadWidthAtZoomScale (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the width (in screen points) of roads on a map at the specified zoom level.

## Declaration

```objectivec
extern CGFloat MKRoadWidthAtZoomScale(MKZoomScale zoomScale);
```

## Parameters

- `zoomScale`: The scale factor currently applied to the map view.

<a id="return-value"></a>

## Return Value

The width of roads, measured in screen points. You can use the returned value to set the width of lines in drawing code that traces the path of a road.

## See Also

### Types

- [MKZoomScale](mkzoomscale.md): A scale factor to use in conjunction with a map.
