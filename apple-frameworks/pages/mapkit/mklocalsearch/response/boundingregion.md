> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/response/boundingregion](https://developer.apple.com/documentation/mapkit/mklocalsearch/response/boundingregion)

# boundingRegion (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map region that encloses the returned search results.

## Declaration

```swift
var boundingRegion: MKCoordinateRegion { get }
```

<a id="Discussion"></a>

## Discussion

The returned region is the smallest bounding box that encloses all of the map items. If there’s only one search result, the size of the region may be `(0, 0)`.

## See Also

### Getting the search results

- [mapItems](mapitems.md): An array of map items representing the search results.

# boundingRegion (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map region that encloses the returned search results.

## Declaration

```objectivec
@property (nonatomic, readonly) MKCoordinateRegion boundingRegion;
```

<a id="Discussion"></a>

## Discussion

The returned region is the smallest bounding box that encloses all of the map items. If there’s only one search result, the size of the region may be `(0, 0)`.

## See Also

### Getting the search results

- [mapItems](mapitems.md): An array of map items representing the search results.
