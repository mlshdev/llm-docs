> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider/handlenewflow(_:)](https://developer.apple.com/documentation/networkextension/neappproxyprovider/handlenewflow(_:))

# handleNewFlow(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Handle a new flow of network data.

## Declaration

```swift
func handleNewFlow(_ flow: NEAppProxyFlow) -> Bool
```

## Parameters

- `flow`: The new [NEAppProxyFlow](../neappproxyflow.md) object. If the App Proxy Provider decides to proxy the flow, it should create a reference to the flow in its data structures.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to indicate that the App Proxy Provider will handle the flow. Return [false](https://developer.apple.com/documentation/swift/false) to indicate that the flow should be closed.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

<a id="Discussion"></a>

## Discussion

This method is called by the system whenever an app which matches the current App Proxy configuration’s app rules opens a new network connection.

`NEAppProxyProvider` subclasses must override this method.

New flows are initially in an unopened state. The App Proxy Provider should take whatever steps are necessary to ready itself to handle the flow data and then open the flow.

## See Also

### Handling proxied flows

- [handleNewUDPFlow(\_:initialRemoteEndpoint:)](handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handle a new UDP flow of network data.

# handleNewFlow: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Handle a new flow of network data.

## Declaration

```objectivec
- (BOOL) handleNewFlow:(NEAppProxyFlow *) flow;
```

## Parameters

- `flow`: The new [NEAppProxyFlow](../neappproxyflow.md) object. If the App Proxy Provider decides to proxy the flow, it should create a reference to the flow in its data structures.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to indicate that the App Proxy Provider will handle the flow. Return [false](https://developer.apple.com/documentation/swift/false) to indicate that the flow should be closed.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

<a id="Discussion"></a>

## Discussion

This method is called by the system whenever an app which matches the current App Proxy configuration’s app rules opens a new network connection.

`NEAppProxyProvider` subclasses must override this method.

New flows are initially in an unopened state. The App Proxy Provider should take whatever steps are necessary to ready itself to handle the flow data and then open the flow.

## See Also

### Handling proxied flows

- [handleNewUDPFlow:initialRemoteEndpoint:](handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handle a new UDP flow of network data.
