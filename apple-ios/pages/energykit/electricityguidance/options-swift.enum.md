> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/options-swift.enum](https://developer.apple.com/documentation/energykit/electricityguidance/options-swift.enum)

# ElectricityGuidance.Options

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An enumeration that describes additional factors that influence the weight of a value.

## Declaration

```swift
enum Options
```

<a id="overview"></a>

## Overview

A person’s utility rate plan is an example of an additional factor that influences the weight of a value.

## Topics

### Getting the options

- [ElectricityGuidance.Options.locationHasRatePlan](options-swift.enum/locationhasrateplan.md): Indicates whether the energy venue where the guidance was generated has rate plan information available.
- [ElectricityGuidance.Options.guidanceIncorporatesRatePlan](options-swift.enum/guidanceincorporatesrateplan.md): Indicates whether the electricity guidance incorporated rate plan information.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the electrical load weight

- [ElectricityGuidance.Value](value.md): A normalized weighting value associated with a period of time, describing when to shift or reduce electricity use.
- [values](values.md): A series of weighted values for intervals of time, describing when to shift or reduce electricity use.
- [options](options-swift.property.md): The additional factors that influence the weight of a value.
