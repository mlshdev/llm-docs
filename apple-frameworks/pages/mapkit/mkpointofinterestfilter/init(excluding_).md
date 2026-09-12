> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter/init(excluding:)](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/init(excluding:))

# init(excluding:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initialize the point of interest filter with a list of categories to exclude.

## Declaration

```swift
init(excluding categories: [MKPointOfInterestCategory])
```

## Parameters

- `categories`: An array of categories to exclude.

## See Also

### Creating filters

- [excludingAll](excludingall.md): A filter that excludes all point of interest categories.
- [includingAll](includingall.md): A filter that includes all point of interest categories.
- [init(including:)](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.

# initExcludingCategories: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initialize the point of interest filter with a list of categories to exclude.

## Declaration

```objectivec
- (instancetype) initExcludingCategories:(NSArray<NSString *> *) categories;
```

## Parameters

- `categories`: An array of categories to exclude.

## See Also

### Creating filters

- [filterExcludingAllCategories](excludingall.md): A filter that excludes all point of interest categories.
- [filterIncludingAllCategories](includingall.md): A filter that includes all point of interest categories.
- [initIncludingCategories:](init%28including_%29.md): Initialize the point of interest filter with a list of categories to include.
