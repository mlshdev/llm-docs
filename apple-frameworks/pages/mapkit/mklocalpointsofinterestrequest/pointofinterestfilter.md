> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalpointsofinterestrequest/pointofinterestfilter](https://developer.apple.com/documentation/mapkit/mklocalpointsofinterestrequest/pointofinterestfilter)

# pointOfInterestFilter (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A filter that lists points of interest categories to include or exclude.

## Declaration

```swift
@NSCopying var pointOfInterestFilter: MKPointOfInterestFilter? { get set }
```

## See Also

### Configuring the request parameters

- [region](region.md): The region of the bounding box of the request provided or the derived bounding box of the circle created by the radius.
- [coordinate](coordinate.md): The center of the point of request as latitude and longitude.
- [radius](radius.md): The distance provided in meters or the longest distance derived from the center point to the region’s bounding box.

# pointOfInterestFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A filter that lists points of interest categories to include or exclude.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKPointOfInterestFilter * pointOfInterestFilter;
```

## See Also

### Configuring the request parameters

- [region](region.md): The region of the bounding box of the request provided or the derived bounding box of the circle created by the radius.
- [coordinate](coordinate.md): The center of the point of request as latitude and longitude.
- [radius](radius.md): The distance provided in meters or the longest distance derived from the center point to the region’s bounding box.
