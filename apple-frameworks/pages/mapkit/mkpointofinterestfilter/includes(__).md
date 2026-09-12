> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkpointofinterestfilter/includes(_:)](https://developer.apple.com/documentation/mapkit/mkpointofinterestfilter/includes(_:))

# includes(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether the filter includes the point of interest category.

## Declaration

```swift
func includes(_ category: MKPointOfInterestCategory) -> Bool
```

## Parameters

- `category`: A point of interest category that the method checks for inclusion in the filter.

<a id="return-value"></a>

## Return Value

`true` if the filter includes the point of interest category; otherwise, `false`.

## See Also

### Querying filter behavior

- [excludes(\_:)](excludes%28__%29.md): Returns a Boolean value indicating whether the filter excludes the point of interest category.

# includesCategory: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether the filter includes the point of interest category.

## Declaration

```objectivec
- (BOOL) includesCategory:(MKPointOfInterestCategory) category;
```

## Parameters

- `category`: A point of interest category that the method checks for inclusion in the filter.

<a id="return-value"></a>

## Return Value

`true` if the filter includes the point of interest category; otherwise, `false`.

## See Also

### Querying filter behavior

- [excludesCategory:](excludes%28__%29.md): Returns a Boolean value indicating whether the filter excludes the point of interest category.
