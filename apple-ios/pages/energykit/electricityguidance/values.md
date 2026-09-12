> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/values](https://developer.apple.com/documentation/energykit/electricityguidance/values)

# values

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A series of weighted values for intervals of time, describing when to shift or reduce electricity use.

## Declaration

```swift
let values: [ElectricityGuidance.Value]
```

## See Also

### Getting the electrical load weight

- [ElectricityGuidance.Value](value.md): A normalized weighting value associated with a period of time, describing when to shift or reduce electricity use.
- [ElectricityGuidance.Options](options-swift.enum.md): An enumeration that describes additional factors that influence the weight of a value.
- [options](options-swift.property.md): The additional factors that influence the weight of a value.
