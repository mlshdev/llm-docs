> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/pointofinterestcategories/including(_:)-22f7x](https://developer.apple.com/documentation/mapkit/pointofinterestcategories/including(_:)-22f7x)

# including(\_:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Show only points of interest belonging to certain categories from the provided array.

## Declaration

```swift
static func including(_ categories: [MKPointOfInterestCategory]) -> PointOfInterestCategories
```

## Parameters

- `categories`: An array of point of interest categories to include.

<a id="return-value"></a>

## Return Value

Returns the points of interest to include.

## See Also

### Modifying the categories to include or exclude

- [excluding(\_:)](excluding%28__%29-16bp0.md): Show all points of interest except those belonging to certain categories using the array you provide.
- [excluding(\_:)](excluding%28__%29-4jo9h.md): Show all points of interest except those belonging to certain categories using the list you provide.
- [including(\_:)](including%28__%29-6flda.md): Show only points of interest belonging to certain categories from the provided list.
