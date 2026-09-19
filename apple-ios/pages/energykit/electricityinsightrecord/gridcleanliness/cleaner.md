> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness/cleaner

# cleaner

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

A category for electricity usage during the cleanest grid periods.

## Declaration

```swift
var cleaner: Measure?
```

<a id="discussion"></a>

## Discussion

This category represents electricity usage when the electrical grid uses its cleanest available energy sources, which might include renewable energy such as solar, wind, or hydroelectric, or cleaner fossil fuel sources such as natural gas instead of coal.

## See Also

### Getting grid cleanliness information

- [lessClean](lessclean.md): A category for electricity usage during less-clean grid periods.
- [avoid](avoid.md): A category for electricity usage during periods that the framework suggests a person avoid.
- [unknown](unknown.md): A category of electricity usage when grid cleanliness information is unavailable.
