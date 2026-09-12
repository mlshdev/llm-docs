> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressfilter/init(excluding:)](https://developer.apple.com/documentation/mapkit/mkaddressfilter/init(excluding:))

# init(excluding:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an address filter with options for excluding results in a search.

## Declaration

```swift
init(excluding options: MKAddressFilter.Options)
```

## Parameters

- `options`: A set of filter options that excludes results.

## See Also

### Creating a filter

- [init(including:)](init%28including_%29.md): Creates an address filter with options for including results in a search.

# initExcludingOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an address filter with options for excluding results in a search.

## Declaration

```objectivec
- (instancetype) initExcludingOptions:(MKAddressFilterOption) options;
```

## Parameters

- `options`: A set of filter options that excludes results.

## See Also

### Creating a filter

- [initIncludingOptions:](init%28including_%29.md): Creates an address filter with options for including results in a search.
