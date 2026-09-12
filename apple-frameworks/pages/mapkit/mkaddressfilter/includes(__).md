> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressfilter/includes(_:)](https://developer.apple.com/documentation/mapkit/mkaddressfilter/includes(_:))

# includes(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Indicates whether options are included for filtering.

## Declaration

```swift
func includes(_ options: MKAddressFilter.Options) -> Bool
```

## Parameters

- `options`: The filters to check for inclusion.

<a id="return-value"></a>

## Return Value

Returns `true` if the passed options are included in the filtering options; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

A filter includes or excludes a set of filter options. Use this method to query the filter instance for one or more options.

```swift
let filter = MKAddressFilter(including: [.locality,  .subLocality])
let result = filter.includes(.locality)
```

The method returns `true` because `filter` includes [Locality](https://developer.apple.com/documentation/mapkitjs/addresscategory/locality).

## See Also

### Filtering results

- [MKAddressFilter.Options](options.md): A structure that contains options for filtering results in a search.
- [excludingAll](excludingall.md): A list of categories to exclude from a search.
- [includingAll](includingall.md): A list of categories to include in a search.
- [excludes(\_:)](excludes%28__%29.md): Indicates whether options are excluded from filtering.

# includesOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Indicates whether options are included for filtering.

## Declaration

```objectivec
- (BOOL) includesOptions:(MKAddressFilterOption) options;
```

## Parameters

- `options`: The filters to check for inclusion.

<a id="return-value"></a>

## Return Value

Returns `true` if the passed options are included in the filtering options; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

A filter includes or excludes a set of filter options. Use this method to query the filter instance for one or more options.

```swift
let filter = MKAddressFilter(including: [.locality,  .subLocality])
let result = filter.includes(.locality)
```

The method returns `true` because `filter` includes [Locality](https://developer.apple.com/documentation/mapkitjs/addresscategory/locality).

## See Also

### Filtering results

- [MKAddressFilterOption](options.md): A structure that contains options for filtering results in a search.
- [filterExcludingAll](excludingall.md): A list of categories to exclude from a search.
- [filterIncludingAll](includingall.md): A list of categories to include in a search.
- [excludesOptions:](excludes%28__%29.md): Indicates whether options are excluded from filtering.
