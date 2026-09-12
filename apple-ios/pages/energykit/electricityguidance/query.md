> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/query](https://developer.apple.com/documentation/energykit/electricityguidance/query)

# ElectricityGuidance.Query

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A structure that encapsulates a electricity guidance query request.

## Declaration

```swift
struct Query
```

<a id="overview"></a>

## Overview

Create a [ElectricityGuidance.Query](query.md) for a [ElectricityGuidance.Service](service.md) request.

## Topics

### Creating a query

- [init(suggestedAction:)](query/init%28suggestedaction_%29.md): Creates a query to obtain electricity guidance based on forecasted energy usage.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the guidance suggestion

- [suggestedAction](suggestedaction-swift.property.md): A property that describes how the electrical load uses the guidance.
- [ElectricityGuidance.SuggestedAction](suggestedaction-swift.enum.md): A description of how the electrical load uses the guidance.
