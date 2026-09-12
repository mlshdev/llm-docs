> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/service](https://developer.apple.com/documentation/energykit/electricityguidance/service)

# ElectricityGuidance.Service

**Framework:** EnergyKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An interface for obtaining electricity guidance data.

## Declaration

```swift
final class Service
```

## Topics

### Obtaining guidance data

- [guidance(using:at:)](service/guidance%28using_at_%29.md): Returns an async sequence of electricity guidance forecasts for the requested venue with cost information incorporated, if available.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the electricity guidance data

- [sharedService](sharedservice.md): A single, shared guidance service object.
