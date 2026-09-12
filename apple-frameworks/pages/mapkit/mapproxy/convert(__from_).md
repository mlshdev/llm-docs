> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapproxy/convert(_:from:)](https://developer.apple.com/documentation/mapkit/mapproxy/convert(_:from:))

# convert(\_:from:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Converts a point in the specified coordinate space to a map coordinate.

## Declaration

```swift
func convert(_ point: CGPoint, from space: some CoordinateSpaceProtocol) -> CLLocationCoordinate2D?
```

## Parameters

- `point`: The point to convert.
- `space`: The reference coordinate space for `point`.

<a id="return-value"></a>

## Return Value

Returns a [CLLocationCoordinate2D](../../corelocation/cllocationcoordinate2d.md); or `nil,` if the specified `point` isn’t represented by a point in the [MapReader](../mapreader.md) associated with a [Map](../map.md).

## See Also

### Converting between coordinate spaces

- [convert(\_:to:)](convert%28__to_%29.md): Converts a map coordinate to a point in the specified coordinate space.
