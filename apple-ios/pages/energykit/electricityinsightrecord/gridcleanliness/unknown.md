> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness/unknown

# unknown

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

A category of electricity usage when grid cleanliness information is unavailable.

## Declaration

```swift
var unknown: Measure?
```

## See Also

### Getting grid cleanliness information

- [cleaner](cleaner.md): A category for electricity usage during the cleanest grid periods.
- [lessClean](lessclean.md): A category for electricity usage during less-clean grid periods.
- [avoid](avoid.md): A category for electricity usage during periods that the framework suggests a person avoid.
