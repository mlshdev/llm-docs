> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/fetchlastdisconnecterror(completionhandler:)](https://developer.apple.com/documentation/networkextension/nevpnconnection/fetchlastdisconnecterror(completionhandler:))

# fetchLastDisconnectError(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Retrives the most recent error that caused the VPN to disconnect.

## Declaration

```swift
func fetchLastDisconnectError(completionHandler handler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func fetchLastDisconnectError() async throws
```

## Parameters

- `handler`: An error handler that receives the last disconnect error as a parameter.

<a id="Discussion"></a>

## Discussion

If VPN system (including the IPsec client) generated the error, then the error uses the [NEVPNConnectionErrorDomain](../nevpnconnectionerrordomain.md) error domain. If the error came from a tunnel provider app extension instead, then the error is the [NSError](../../foundation/nserror.md) that the provider passed when disconnecting the tunnel.

## See Also

### Handling errors

- [NEVPNConnectionErrorDomain](../nevpnconnectionerrordomain.md): The domain for errors resulting from VPN connection calls.
- [NEVPNConnectionError](../nevpnconnectionerror.md): Error codes specific to VPN connections.

# fetchLastDisconnectErrorWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Retrives the most recent error that caused the VPN to disconnect.

## Declaration

```objectivec
- (void) fetchLastDisconnectErrorWithCompletionHandler:(void (^)(NSError *)) handler;
```

## Parameters

- `handler`: An error handler that receives the last disconnect error as a parameter.

<a id="Discussion"></a>

## Discussion

If VPN system (including the IPsec client) generated the error, then the error uses the [NEVPNConnectionErrorDomain](../nevpnconnectionerrordomain.md) error domain. If the error came from a tunnel provider app extension instead, then the error is the [NSError](../../foundation/nserror.md) that the provider passed when disconnecting the tunnel.

## See Also

### Handling errors

- [NEVPNConnectionErrorDomain](../nevpnconnectionerrordomain.md): The domain for errors resulting from VPN connection calls.
- [NEVPNConnectionError](../nevpnconnectionerror.md): Error codes specific to VPN connections.
