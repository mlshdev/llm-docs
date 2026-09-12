> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomehubstate](https://developer.apple.com/documentation/homekit/hmhomehubstate)

# HMHomeHubState (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The possible states of the home hub.

## Declaration

```swift
enum HMHomeHubState
```

## Topics

### Specifying the State

- [HMHomeHubState.connected](hmhomehubstate/connected.md): The home hub is connected.
- [HMHomeHubState.disconnected](hmhomehubstate/disconnected.md): The home hub is disconnected.
- [HMHomeHubState.notAvailable](hmhomehubstate/notavailable.md): No home hub is present.

### Initializers

- [init(rawValue:)](hmhomehubstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Querying the state of a home hub

- [homeHubState](hmhome/homehubstate.md): The state of the home hub.

# HMHomeHubState (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The possible states of the home hub.

## Declaration

```objectivec
enum HMHomeHubState : NSUInteger;
```

## Topics

### Specifying the State

- [HMHomeHubStateConnected](hmhomehubstate/connected.md): The home hub is connected.
- [HMHomeHubStateDisconnected](hmhomehubstate/disconnected.md): The home hub is disconnected.
- [HMHomeHubStateNotAvailable](hmhomehubstate/notavailable.md): No home hub is present.

## See Also

### Querying the state of a home hub

- [homeHubState](hmhome/homehubstate.md): The state of the home hub.
