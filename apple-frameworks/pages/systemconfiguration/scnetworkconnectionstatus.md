> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionstatus](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionstatus)

# SCNetworkConnectionStatus (Swift)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The current status of the network connection.

## Declaration

```swift
enum SCNetworkConnectionStatus
```

<a id="overview"></a>

## Overview

This status is intended to be generic and high level. An extended status, specific to the type of network connection, is also available for applications that need additonal information.

## Topics

### Constants

- [SCNetworkConnectionStatus.invalid](scnetworkconnectionstatus/invalid.md): The network connection refers to an invalid service.
- [SCNetworkConnectionStatus.disconnected](scnetworkconnectionstatus/disconnected.md): The network connection is disconnected.
- [SCNetworkConnectionStatus.connecting](scnetworkconnectionstatus/connecting.md): The network connection is connecting.
- [SCNetworkConnectionStatus.connected](scnetworkconnectionstatus/connected.md): The network connection is connected.
- [SCNetworkConnectionStatus.disconnecting](scnetworkconnectionstatus/disconnecting.md): The network connection is disconnecting.

### Initializers

- [init(rawValue:)](scnetworkconnectionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md): The PPP-specific status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.

# SCNetworkConnectionStatus (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The current status of the network connection.

## Declaration

```objectivec
enum SCNetworkConnectionStatus : int32_t;
```

<a id="overview"></a>

## Overview

This status is intended to be generic and high level. An extended status, specific to the type of network connection, is also available for applications that need additonal information.

## Topics

### Constants

- [kSCNetworkConnectionInvalid](scnetworkconnectionstatus/invalid.md): The network connection refers to an invalid service.
- [kSCNetworkConnectionDisconnected](scnetworkconnectionstatus/disconnected.md): The network connection is disconnected.
- [kSCNetworkConnectionConnecting](scnetworkconnectionstatus/connecting.md): The network connection is connecting.
- [kSCNetworkConnectionConnected](scnetworkconnectionstatus/connected.md): The network connection is connected.
- [kSCNetworkConnectionDisconnecting](scnetworkconnectionstatus/disconnecting.md): The network connection is disconnecting.

## See Also

### Constants

- [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md): The PPP-specific status of the network connection.
- [Statistics Dictionary Keys](statistics-dictionary-keys.md): Keys associated with values in the statistics dictionary.
- [Selection Options Dictionary Keys](selection-options-dictionary-keys.md): Keys used with the [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md) selection options dictionary.
