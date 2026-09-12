> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnectionerrordomain](https://developer.apple.com/documentation/networkextension/nevpnconnectionerrordomain)

# NEVPNConnectionErrorDomain (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

The domain for errors resulting from VPN connection calls.

## Declaration

```swift
let NEVPNConnectionErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEVPNConnection](nevpnconnection.md). The [NEDNSSettingsManagerError](nednssettingsmanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [fetchLastDisconnectError(completionHandler:)](nevpnconnection/fetchlastdisconnecterror%28completionhandler_%29.md): Retrives the most recent error that caused the VPN to disconnect.
- [NEVPNConnectionError](nevpnconnectionerror.md): Error codes specific to VPN connections.

# NEVPNConnectionErrorDomain (Objective-C)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

The domain for errors resulting from VPN connection calls.

## Declaration

```objectivec
extern NSString * const NEVPNConnectionErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEVPNConnection](nevpnconnection.md). The [NEDNSSettingsManagerError](nednssettingsmanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [fetchLastDisconnectErrorWithCompletionHandler:](nevpnconnection/fetchlastdisconnecterror%28completionhandler_%29.md): Retrives the most recent error that caused the VPN to disconnect.
- [NEVPNConnectionError](nevpnconnectionerror.md): Error codes specific to VPN connections.
