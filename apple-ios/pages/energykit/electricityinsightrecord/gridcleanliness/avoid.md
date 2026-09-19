> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityinsightrecord/gridcleanliness/avoid

# avoid

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst

A category for electricity usage during periods that the framework suggests a person avoid.

## Declaration

```swift
var avoid: Measure?
```

<a id="discussion"></a>

## Discussion

The framework might put electricity usage in this category when:

- Grid operators ask electricity consumers to temporarily reduce their power usage during periods of high demand or grid stress, also known as a *demand response* event.
- Fossil fuel plants predominantly power the grid, composing the least desirable times for energy consumption from an environmental perspective.

> **Important**

> The framework reserves this property for future use.

## See Also

### Getting grid cleanliness information

- [cleaner](cleaner.md): A category for electricity usage during the cleanest grid periods.
- [lessClean](lessclean.md): A category for electricity usage during less-clean grid periods.
- [unknown](unknown.md): A category of electricity usage when grid cleanliness information is unavailable.
