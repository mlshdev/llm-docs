> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction/impact-swift.enum](https://developer.apple.com/documentation/wirelessinsights/serviceprediction/impact-swift.enum)

# ServicePrediction.Impact

**Framework:** WirelessInsights  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An enumeration of levels of impact for a predicted event.

## Declaration

```swift
enum Impact
```

## Topics

### Working with impact values

- [ServicePrediction.Impact.high](impact-swift.enum/high.md): An impact level for severe interruption, including substantially lowered throughput and the potential to lose data capability.
- [ServicePrediction.Impact.medium](impact-swift.enum/medium.md): An impact level for moderately lower throughput and service interruption.
- [ServicePrediction.Impact.low](impact-swift.enum/low.md): An impact level for slightly lower throughput and possibly some service interruption.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing prediction impact

- [impact](impact-swift.property.md): The expected impact of the predicted event.
