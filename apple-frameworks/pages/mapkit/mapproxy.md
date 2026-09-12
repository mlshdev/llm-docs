> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapproxy](https://developer.apple.com/documentation/mapkit/mapproxy)

# MapProxy

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A proxy for accessing sizing information about a given map view.

## Declaration

```swift
struct MapProxy
```

## Topics

### Creating a camera proxy

- [camera(framing:)](mapproxy/camera%28framing_%29-1asl2.md): Creates a camera in the context of the map that frames the given coordinate region.
- [camera(framing:)](mapproxy/camera%28framing_%29-uxov.md): Creates a camera in the context of the map that frames the given map rectangle.
- [camera(framing:allowPitch:)](mapproxy/camera%28framing_allowpitch_%29.md): Creates a camera in the context of the map that frames the given map item.

### Converting between coordinate spaces

- [convert(\_:to:)](mapproxy/convert%28__to_%29.md): Converts a map coordinate to a point in the specified coordinate space.
- [convert(\_:from:)](mapproxy/convert%28__from_%29.md): Converts a point in the specified coordinate space to a map coordinate.

## See Also

### Structures

- [DefaultUserAnnotationContent](defaultuserannotationcontent.md): A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](emptymapcontent.md): A map content element that doesn’t contain any content.
- [MapReader](mapreader.md): A container view that defines its contents as a function of information about the first contained map.
- [TupleMapContent](tuplemapcontent.md): A view created from a Swift tuple of map content values.
- [MapSelectableContentView](mapselectablecontentview.md)
