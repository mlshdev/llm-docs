> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wirelessinsights/serviceprediction/quantizedinterval](https://developer.apple.com/documentation/wirelessinsights/serviceprediction/quantizedinterval)

# ServicePrediction.QuantizedInterval

**Framework:** WirelessInsights  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A type that provides discrete time intervals to express the expected duration of a predicted event.

## Declaration

```swift
struct QuantizedInterval
```

## Topics

### Working with interval values

- [long](quantizedinterval/long.md): An interval for an issue expected to last more than five minutes.
- [medium](quantizedinterval/medium.md): An interval for an issue expected to last approximately five minutes.
- [short](quantizedinterval/short.md): An interval for an issue expected to last approximately one minute or fewer.
- [minimal](quantizedinterval/minimal.md): An interval for an issue expected to last approximately 10 seconds or fewer.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing prediction timing

- [predictedStartTime](predictedstarttime.md): The start time of the predicted event.
- [predictedInterval](predictedinterval.md): The expected duration of the predicted event.
