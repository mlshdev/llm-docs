> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter/excludingall](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/excludingall)

# excludingAll (Swift)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that excludes all point of interest categories.

## Declaration

```swift
class var excludingAll: MKPointOfInterestFilter { get }
```

<a id="Discussion"></a>

## Discussion

You can use [excludingAll](excludingall.md)  to remove all points of interest from your map view without listing all the categories individually.

## See Also

### Creating filters

- [includingAll](includingall.md): A filter that includes all point of interest categories.
- [init(excluding:)](init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [init(including:)](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.

# filterExcludingAllCategories (Objective-C)

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that excludes all point of interest categories.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MKPointOfInterestFilter * filterExcludingAllCategories;
```

<a id="Discussion"></a>

## Discussion

You can use [filterExcludingAllCategories](excludingall.md)  to remove all points of interest from your map view without listing all the categories individually.

## See Also

### Creating filters

- [filterIncludingAllCategories](includingall.md): A filter that includes all point of interest categories.
- [initExcludingCategories:](init%28excluding_%29.md): Initialize the point of interest filter with a list of categories to exclude.
- [initIncludingCategories:](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.
