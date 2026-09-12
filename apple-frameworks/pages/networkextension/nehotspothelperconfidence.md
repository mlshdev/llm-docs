> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperconfidence](https://developer.apple.com/documentation/networkextension/nehotspothelperconfidence)

# NEHotspotHelperConfidence (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type that indicates the hotspot helper’s confidence in its ability to handle the network.

## Declaration

```swift
enum NEHotspotHelperConfidence
```

## Topics

### Confidence Levels

- [NEHotspotHelperConfidence.high](nehotspothelperconfidence/high.md): The helper has high confidence in being able to handle the network.
- [NEHotspotHelperConfidence.low](nehotspothelperconfidence/low.md): The helper has some confidence in being able to handle the network.
- [NEHotspotHelperConfidence.none](nehotspothelperconfidence/none.md): The helper is unable to handle the network.

### Initializers

- [init(rawValue:)](nehotspothelperconfidence/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network annotation

- [setConfidence(\_:)](nehotspotnetwork/setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [setPassword(\_:)](nehotspotnetwork/setpassword%28__%29.md): Provide the password for a protected network.

# NEHotspotHelperConfidence (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A type that indicates the hotspot helper’s confidence in its ability to handle the network.

## Declaration

```objectivec
enum NEHotspotHelperConfidence : NSInteger;
```

## Topics

### Confidence Levels

- [kNEHotspotHelperConfidenceHigh](nehotspothelperconfidence/high.md): The helper has high confidence in being able to handle the network.
- [kNEHotspotHelperConfidenceLow](nehotspothelperconfidence/low.md): The helper has some confidence in being able to handle the network.
- [kNEHotspotHelperConfidenceNone](nehotspothelperconfidence/none.md): The helper is unable to handle the network.

## See Also

### Network annotation

- [setConfidence:](nehotspotnetwork/setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [setPassword:](nehotspotnetwork/setpassword%28__%29.md): Provide the password for a protected network.
