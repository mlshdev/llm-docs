> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter/excludes(_:)](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/excludes(_:))

# excludes(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether the filter excludes the point of interest category.

## Declaration

```swift
func excludes(_ category: MKPointOfInterestCategory) -> Bool
```

## Parameters

- `category`: A point of interest category that the method checks for exclusion in the filter.

<a id="return-value"></a>

## Return Value

`true` if the filter excludes the point of interest category; otherwise, `false`.

## See Also

### Querying filter behavior

- [includes(\_:)](includes%28__%29.md): Returns a Boolean value indicating whether the filter includes the point of interest category.

# excludesCategory: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether the filter excludes the point of interest category.

## Declaration

```objectivec
- (BOOL) excludesCategory:(MKPointOfInterestCategory) category;
```

## Parameters

- `category`: A point of interest category that the method checks for exclusion in the filter.

<a id="return-value"></a>

## Return Value

`true` if the filter excludes the point of interest category; otherwise, `false`.

## See Also

### Querying filter behavior

- [includesCategory:](includes%28__%29.md): Returns a Boolean value indicating whether the filter includes the point of interest category.
