> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(equalto:)](https://developer.apple.com/documentation/healthkit/hkcategoryvaluepredicateproviding/predicateforsamples(equalto:))

# predicateForSamples(equalTo:)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Returns a predicate that checks whether a category sample is equal to the provided set of values.

## Declaration

```swift
static func predicateForSamples(equalTo values: Set<Self>) -> NSPredicate
```

## Parameters

- `values`: The target set of values.

## See Also

### Creating predicates

- [predicateForSamples(\_:value:)](predicateforsamples%28__value_%29.md): Conforms when `RawValue` is `Int`. Returns a predicate that checks a category sample’s value.
