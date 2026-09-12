> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/suggestedaction-swift.enum](https://developer.apple.com/documentation/energykit/electricityguidance/suggestedaction-swift.enum)

# ElectricityGuidance.SuggestedAction

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A description of how the electrical load uses the guidance.

## Declaration

```swift
enum SuggestedAction
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

<a id="overview"></a>

## Overview

An example of suggested actions for the load could be shift-able load or reduce-able load.

## Topics

### Suggesting electrical load usage

- [ElectricityGuidance.SuggestedAction.reduce](suggestedaction-swift.enum/reduce.md): An indication of when to reduce electricity usage for devices that can reduce electricity consumption.
- [ElectricityGuidance.SuggestedAction.shift](suggestedaction-swift.enum/shift.md): An indication of when to shift energy usage for devices that can’t reduce electricity consumption.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the guidance suggestion

- [ElectricityGuidance.Query](query.md): A structure that encapsulates a electricity guidance query request.
- [suggestedAction](suggestedaction-swift.property.md): A property that describes how the electrical load uses the guidance.
