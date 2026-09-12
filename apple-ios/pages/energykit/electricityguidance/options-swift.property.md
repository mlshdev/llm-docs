> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/options-swift.property](https://developer.apple.com/documentation/energykit/electricityguidance/options-swift.property)

# options

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

The additional factors that influence the weight of a value.

## Declaration

```swift
let options: Set<ElectricityGuidance.Options>
```

<a id="discussion"></a>

## Discussion

A person’s utility rate plan is an example of an additional factor that influences the weight of the value.

## See Also

### Getting the electrical load weight

- [ElectricityGuidance.Value](value.md): A normalized weighting value associated with a period of time, describing when to shift or reduce electricity use.
- [values](values.md): A series of weighted values for intervals of time, describing when to shift or reduce electricity use.
- [ElectricityGuidance.Options](options-swift.enum.md): An enumeration that describes additional factors that influence the weight of a value.
