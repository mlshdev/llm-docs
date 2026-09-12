> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance](https://developer.apple.com/documentation/energykit/electricityguidance)

# ElectricityGuidance

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A data model that provides guidance on when electricity is cleaner and less expensive.

## Declaration

```swift
struct ElectricityGuidance
```

<a id="overview"></a>

## Overview

`ElectricityGuidance` provides information on grid quality and electricity cost, if cost information is available. You can use `ElectricityGuidance` to adjust the electricity consumption of your managed devices to times when electricity is cleaner, and optionally reduce the overall electricity consumption or cost of your managed devices.

## Topics

### Getting the electricity guidance data

- [ElectricityGuidance.Service](electricityguidance/service.md): An interface for obtaining electricity guidance data.
- [sharedService](electricityguidance/sharedservice.md): A single, shared guidance service object.

### Getting the electrical load weight

- [ElectricityGuidance.Value](electricityguidance/value.md): A normalized weighting value associated with a period of time, describing when to shift or reduce electricity use.
- [values](electricityguidance/values.md): A series of weighted values for intervals of time, describing when to shift or reduce electricity use.
- [ElectricityGuidance.Options](electricityguidance/options-swift.enum.md): An enumeration that describes additional factors that influence the weight of a value.
- [options](electricityguidance/options-swift.property.md): The additional factors that influence the weight of a value.

### Identifying the guidance parameters

- [interval](electricityguidance/interval.md): The time range to which the guidance applies.
- [energyVenueID](electricityguidance/energyvenueid.md): An identifier for the physical location to which the guidance applies.
- [guidanceToken](electricityguidance/guidancetoken.md): A unique token for the guidance that you use to create an electrical load event.

### Getting the guidance suggestion

- [ElectricityGuidance.Query](electricityguidance/query.md): A structure that encapsulates a electricity guidance query request.
- [suggestedAction](electricityguidance/suggestedaction-swift.property.md): A property that describes how the electrical load uses the guidance.
- [ElectricityGuidance.SuggestedAction](electricityguidance/suggestedaction-swift.enum.md): A description of how the electrical load uses the guidance.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
