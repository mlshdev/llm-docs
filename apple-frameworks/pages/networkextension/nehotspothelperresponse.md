> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperresponse](https://developer.apple.com/documentation/networkextension/nehotspothelperresponse)

# NEHotspotHelperResponse (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The hotspot helper’s response to a command.

## Declaration

```swift
class NEHotspotHelperResponse
```

## Topics

### Response properties

- [setNetwork(\_:)](nehotspothelperresponse/setnetwork%28__%29.md): Set the network that conveys the confidence level.
- [setNetworkList(\_:)](nehotspothelperresponse/setnetworklist%28__%29.md): Set the list of handled networks.

### Response delivery

- [deliver()](nehotspothelperresponse/deliver%28%29.md): Deprecated. Deliver the response to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.

# NEHotspotHelperResponse (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The hotspot helper’s response to a command.

## Declaration

```objectivec
@interface NEHotspotHelperResponse : NSObject
```

## Topics

### Response properties

- [setNetwork:](nehotspothelperresponse/setnetwork%28__%29.md): Set the network that conveys the confidence level.
- [setNetworkList:](nehotspothelperresponse/setnetworklist%28__%29.md): Set the list of handled networks.

### Response delivery

- [deliver](nehotspothelperresponse/deliver%28%29.md): Deprecated. Deliver the response to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.
