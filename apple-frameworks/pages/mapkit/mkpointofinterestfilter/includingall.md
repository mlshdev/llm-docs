> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter/includingall](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/includingall)

# includingAll (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that includes all point of interest categories.

## Declaration

```swift
class var includingAll: MKPointOfInterestFilter { get }
```

<a id="Discussion"></a>

## Discussion

You can use [includingAll](includingall.md)  to include all points of interest in your map view without listing all the categories individually.

## See Also

### Creating filters

- [excludingAll](excludingall.md): A filter that excludes all point of interest categories.
- [init(excluding:)](init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [init(including:)](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.

# filterIncludingAllCategories (Objective-C)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that includes all point of interest categories.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MKPointOfInterestFilter * filterIncludingAllCategories;
```

<a id="Discussion"></a>

## Discussion

You can use [filterIncludingAllCategories](includingall.md)  to include all points of interest in your map view without listing all the categories individually.

## See Also

### Creating filters

- [filterExcludingAllCategories](excludingall.md): A filter that excludes all point of interest categories.
- [initExcludingCategories:](init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [initIncludingCategories:](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.
