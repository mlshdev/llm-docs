> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness/lessclean

# lessClean

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

A category for electricity usage during less-clean grid periods.

## Declaration

```swift
var lessClean: Measure?
```

<a id="discussion"></a>

## Discussion

This category represents electricity usage during periods when the electrical grid uses more fossil fuel energy sources, making it less environmentally friendly than the cleanest periods.

## See Also

### Getting grid cleanliness information

- [cleaner](cleaner.md): A category for electricity usage during the cleanest grid periods.
- [avoid](avoid.md): A category for electricity usage during periods that the framework suggests a person avoid.
- [unknown](unknown.md): A category of electricity usage when grid cleanliness information is unavailable.
