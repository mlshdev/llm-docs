> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/transmittime](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/transmittime)

# transmitTime (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A transmission timestamp, in seconds, for the received message.

## Declaration

```swift
var transmitTime: Double { get }
```

<a id="discussion"></a>

## Discussion

The elapsed transmission time correponds to the time it takes for the message that contains the measurement to leave the anchor and arrive at the receiver.

## See Also

### Assessing time difference

- [receiveTime](receivetime.md): A timestamp, in seconds, for the time that the device receives the measurement.

# transmitTime (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A transmission timestamp, in seconds, for the received message.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double transmitTime;
```

<a id="discussion"></a>

## Discussion

The elapsed transmission time correponds to the time it takes for the message that contains the measurement to leave the anchor and arrive at the receiver.

## See Also

### Assessing time difference

- [receiveTime](receivetime.md): A timestamp, in seconds, for the time that the device receives the measurement.
