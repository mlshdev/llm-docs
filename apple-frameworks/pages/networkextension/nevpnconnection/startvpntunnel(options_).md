> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/startvpntunnel(options:)](https://developer.apple.com/documentation/networkextension/nevpnconnection/startvpntunnel(options:))

# startVPNTunnel(options:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of connecting the VPN.

## Declaration

```swift
func startVPNTunnel(options: [String : NSObject]? = nil) throws
```

## Parameters

- `options`: An `NSDictionary` that will be passed to the tunnel provider during the process of starting the tunnel. See Constants, below.

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of connecting the VPN. In order to be notified when the VPN is fully connected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NEVPNConnection](../nevpnconnection.md) object, and examine the status property when the notification is received.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Controlling the VPN connection

- [startVPNTunnel()](startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](../nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](../nevpnconnectionstartoptionpassword.md)
- [stopVPNTunnel()](stopvpntunnel%28%29.md): Start the process of disconnecting the VPN.

# startVPNTunnelWithOptions:andReturnError: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of connecting the VPN.

## Declaration

```objectivec
- (BOOL) startVPNTunnelWithOptions:(NSDictionary<NSString *,NSObject *> *) options andReturnError:(NSError **) error;
```

## Parameters

- `options`: An `NSDictionary` that will be passed to the tunnel provider during the process of starting the tunnel. See Constants, below.
- `error`: A pointer to a pointer to an [NSError](../../foundation/nserror.md) object. If specified and the VPN connection process cannot be started due to an error, this parameter will be set to point to an `NSError` object containing details about the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the process of connecting the VPN started successfully, [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of connecting the VPN. In order to be notified when the VPN is fully connected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NEVPNConnection](../nevpnconnection.md) object, and examine the status property when the notification is received.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Controlling the VPN connection

- [startVPNTunnelAndReturnError:](startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](../nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](../nevpnconnectionstartoptionpassword.md)
- [stopVPNTunnel](stopvpntunnel%28%29.md): Start the process of disconnecting the VPN.
