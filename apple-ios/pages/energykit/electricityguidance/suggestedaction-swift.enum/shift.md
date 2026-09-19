> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricityguidance/suggestedaction-swift.enum/shift

# ElectricityGuidance.SuggestedAction.shift

**Framework:** EnergyKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An indication of when to shift energy usage for devices that can’t reduce electricity consumption.

## Declaration

```swift
case shift
```

<a id="discussion"></a>

## Discussion

For example, an electric vehicle has to reach a certain charge, so it shifts to a better suited energy consumption time.

## See Also

### Suggesting electrical load usage

- [ElectricityGuidance.SuggestedAction.reduce](reduce.md): An indication of when to reduce electricity usage for devices that can reduce electricity consumption.
