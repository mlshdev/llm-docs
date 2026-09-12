> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapfeature/pointofinterestcategory](https://developer.apple.com/documentation/mapkit/mapfeature/pointofinterestcategory)

# pointOfInterestCategory

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The point of interest category of the map feature.

## Declaration

```swift
var pointOfInterestCategory: MKPointOfInterestCategory? { get }
```

<a id="Discussion"></a>

## Discussion

If the feature doesn’t have a point of interest category, this value is `nil`.

## See Also

### Accessing the feature’s properties

- [kind](kind.md): The kind of feature represented by the map feature.
- [MapFeature.FeatureKind](featurekind.md): The kind of feature represented by a map feature.
- [coordinate](coordinate.md): The coordinate of the map feature.
- [title](title.md): The title of the map feature.
- [backgroundColor](backgroundcolor.md): The background color associated with the map feature.
- [image](image.md): An image associated with the map feature.
