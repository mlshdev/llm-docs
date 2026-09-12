> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/connection](https://developer.apple.com/documentation/networkextension/nevpnmanager/connection)

# connection (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNConnection](../nevpnconnection.md) object that is used to control the VPN tunnel specified by the VPN configuration.

## Declaration

```swift
var connection: NEVPNConnection { get }
```

<a id="Discussion"></a>

## Discussion

The connection object is used to manually start and stop the VPN tunnel, and introspect the current status of the VPN tunnel. If the VPN configuration does not exist in the Network Extension preferences then the connection’s status is set to `NEVPNStatusInvalid`.

# connection (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEVPNConnection](../nevpnconnection.md) object that is used to control the VPN tunnel specified by the VPN configuration.

## Declaration

```objectivec
@property (readonly) NEVPNConnection * connection;
```

<a id="Discussion"></a>

## Discussion

The connection object is used to manually start and stop the VPN tunnel, and introspect the current status of the VPN tunnel. If the VPN configuration does not exist in the Network Extension preferences then the connection’s status is set to `NEVPNStatusInvalid`.
