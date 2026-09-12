> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricityguidance/value](https://developer.apple.com/documentation/energykit/electricityguidance/value)

# ElectricityGuidance.Value

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A normalized weighting value associated with a period of time, describing when to shift or reduce electricity use.

## Declaration

```swift
struct Value
```

## Mentioned In

- [Providing charging history for electric vehicles](../providing-informative-charging-history-for-electric-vehicles.md)

## Topics

### Creating a date interval

- [init(interval:rating:)](value/init%28interval_rating_%29.md): Creates an interval with the specified date and rating.
- [interval](value/interval.md): The interval to which the electrical guidance applies.
- [rating](value/rating.md): The relative impact of using electricity during this period of time.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the electrical load weight

- [values](values.md): A series of weighted values for intervals of time, describing when to shift or reduce electricity use.
- [ElectricityGuidance.Options](options-swift.enum.md): An enumeration that describes additional factors that influence the weight of a value.
- [options](options-swift.property.md): The additional factors that influence the weight of a value.
