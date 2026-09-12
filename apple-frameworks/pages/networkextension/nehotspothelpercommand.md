> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelpercommand](https://developer.apple.com/documentation/networkextension/nehotspothelpercommand)

# NEHotspotHelperCommand (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A command for the hotspot helper to handle.

## Declaration

```swift
class NEHotspotHelperCommand
```

<a id="overview"></a>

## Overview

NEHotspostHelperCommand objects are passed to the the Hotspot Helper app’s command handler block. The Hotspot Helper app processes the command, instantiates an [NEHotspotHelperResponse](nehotspothelperresponse.md) object, sets the annotated `network` or `networkList` (`Evaluate` or `FilterScanList` commands only), and then delivers the response to the system.

## Topics

### Command information

- [commandType](nehotspothelpercommand/commandtype.md): The type of the command
- [NEHotspotHelperCommandType](nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [network](nehotspothelpercommand/network.md): The network associated with the command.
- [networkList](nehotspothelpercommand/networklist.md): The list of networks associated with the command.

### Networking on the hotspot network

- [bind(to:)](../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createTCPConnection(\_:)](nehotspothelpercommand/createtcpconnection%28__%29.md): Deprecated. Create a new TCP connection over the network associated with the command.
- [createUDPSession(\_:)](nehotspothelpercommand/createudpsession%28__%29.md): Deprecated. Creates a new UDP session over the network associated with the command.

### Response creation

- [createResponse(\_:)](nehotspothelpercommand/createresponse%28__%29.md): Create a response to the command.
- [NEHotspotHelperResult](nehotspothelperresult.md): The result of handling a hotspot command.

### Instance Properties

- [interface](nehotspothelpercommand/interface-46dq.md)

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

- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.

# NEHotspotHelperCommand (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A command for the hotspot helper to handle.

## Declaration

```objectivec
@interface NEHotspotHelperCommand : NSObject
```

<a id="overview"></a>

## Overview

NEHotspostHelperCommand objects are passed to the the Hotspot Helper app’s command handler block. The Hotspot Helper app processes the command, instantiates an [NEHotspotHelperResponse](nehotspothelperresponse.md) object, sets the annotated `network` or `networkList` (`Evaluate` or `FilterScanList` commands only), and then delivers the response to the system.

## Topics

### Command information

- [commandType](nehotspothelpercommand/commandtype.md): The type of the command
- [NEHotspotHelperCommandType](nehotspothelpercommandtype.md): An enumeration of hotspot command types.
- [network](nehotspothelpercommand/network.md): The network associated with the command.
- [networkList](nehotspothelpercommand/networklist.md): The list of networks associated with the command.

### Networking on the hotspot network

- [bindToHotspotHelperCommand:](../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createTCPConnection:](nehotspothelpercommand/createtcpconnection%28__%29.md): Deprecated. Create a new TCP connection over the network associated with the command.
- [createUDPSession:](nehotspothelpercommand/createudpsession%28__%29.md): Deprecated. Creates a new UDP session over the network associated with the command.

### Response creation

- [createResponse:](nehotspothelpercommand/createresponse%28__%29.md): Create a response to the command.
- [NEHotspotHelperResult](nehotspothelperresult.md): The result of handling a hotspot command.

### Instance Properties

- [interface](nehotspothelpercommand/interface-7rt15.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Commands

- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.
- [NEHotspotNetwork](nehotspotnetwork.md): Information about a Wi-Fi network associated with a command or a response.
