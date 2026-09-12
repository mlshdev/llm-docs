> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanagerconnectionlatency](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanagerconnectionlatency)

# CBPeripheralManagerConnectionLatency (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing the connection latency of the peripheral manager.

## Declaration

```swift
enum CBPeripheralManagerConnectionLatency
```

## Topics

### Latency Values

- [CBPeripheralManagerConnectionLatency.low](cbperipheralmanagerconnectionlatency/low.md): A latency setting indicating that prioritizes rapid communication over battery life.
- [CBPeripheralManagerConnectionLatency.medium](cbperipheralmanagerconnectionlatency/medium.md): A latency setting that balances communication frequency and battery life.
- [CBPeripheralManagerConnectionLatency.high](cbperipheralmanagerconnectionlatency/high.md): A latency setting that prioritizes extending battery life over rapid communication.

### Initializers

- [init(rawValue:)](cbperipheralmanagerconnectionlatency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting Connection Latency

- [setDesiredConnectionLatency(\_:for:)](cbperipheralmanager/setdesiredconnectionlatency%28__for_%29.md): Sets the desired connection latency for an existing connection to a central device.

# CBPeripheralManagerConnectionLatency (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing the connection latency of the peripheral manager.

## Declaration

```objectivec
enum CBPeripheralManagerConnectionLatency : NSInteger;
```

## Topics

### Latency Values

- [CBPeripheralManagerConnectionLatencyLow](cbperipheralmanagerconnectionlatency/low.md): A latency setting indicating that prioritizes rapid communication over battery life.
- [CBPeripheralManagerConnectionLatencyMedium](cbperipheralmanagerconnectionlatency/medium.md): A latency setting that balances communication frequency and battery life.
- [CBPeripheralManagerConnectionLatencyHigh](cbperipheralmanagerconnectionlatency/high.md): A latency setting that prioritizes extending battery life over rapid communication.

## See Also

### Setting Connection Latency

- [setDesiredConnectionLatency:forCentral:](cbperipheralmanager/setdesiredconnectionlatency%28__for_%29.md): Sets the desired connection latency for an existing connection to a central device.
