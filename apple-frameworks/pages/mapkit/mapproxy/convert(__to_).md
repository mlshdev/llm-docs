> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapproxy/convert(_:to:)](https://developer.apple.com/documentation/mapkit/mapproxy/convert(_:to:))

# convert(\_:to:)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Converts a map coordinate to a point in the specified coordinate space.

## Declaration

```swift
func convert(_ coordinate: CLLocationCoordinate2D, to space: some CoordinateSpaceProtocol) -> CGPoint?
```

## Parameters

- `coordinate`: The map coordinate to find the corresponding point for.
- `space`: The reference coordinate space for the returned point.

<a id="return-value"></a>

## Return Value

Returns a [CGPoint](../../corefoundation/cgpoint.md); otherwise `nil`, if `coordinate` isn’t represented by a point in the [MapReader](../mapreader.md) associated with a [Map](../map.md).

## See Also

### Converting between coordinate spaces

- [convert(\_:from:)](convert%28__from_%29.md): Converts a point in the specified coordinate space to a map coordinate.
