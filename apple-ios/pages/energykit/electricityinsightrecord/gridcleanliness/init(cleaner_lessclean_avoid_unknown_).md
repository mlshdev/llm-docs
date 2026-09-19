> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness/init(cleaner:lessclean:avoid:unknown:)

# init(cleaner:lessClean:avoid:unknown:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

Initializes the collection of grid cleanliness data.

## Declaration

```swift
init(cleaner: Measure?, lessClean: Measure?, avoid: Measure?, unknown: Measure?)
```

## Parameters

- `cleaner`: A category for electricity usage during the cleanest grid periods.
- `lessClean`: A category for electricity usage during less-clean grid periods.
- `avoid`: A category for electricity usage during periods that the framework suggests a person avoid.
- `unknown`: A category for electricity usage when grid cleanliness information is unavailable.
