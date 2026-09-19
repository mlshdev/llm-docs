> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkaddressfilter/init(including:)

# init(including:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an address filter with options for including results in a search.

## Declaration

```swift
init(including options: MKAddressFilter.Options)
```

## Parameters

- `options`: A set of filter options that includes results.

## See Also

### Creating a filter

- [init(excluding:)](init%28excluding_%29.md): Creates an address filter with options for excluding results in a search.

# initIncludingOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an address filter with options for including results in a search.

## Declaration

```objectivec
- (instancetype) initIncludingOptions:(MKAddressFilterOption) options;
```

## Parameters

- `options`: A set of filter options that includes results.

## See Also

### Creating a filter

- [initExcludingOptions:](init%28excluding_%29.md): Creates an address filter with options for excluding results in a search.
