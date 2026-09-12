> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyprovider/handlenewflow(_:)](https://developer.apple.com/documentation/networkextension/nednsproxyprovider/handlenewflow(_:))

# handleNewFlow(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Handles a new flow of DNS traffic.

## Declaration

```swift
func handleNewFlow(_ flow: NEAppProxyFlow) -> Bool
```

## Parameters

- `flow`: The flow representing the DNS traffic that the proxy should handle.

<a id="return-value"></a>

## Return Value

A Boolean value set to [true](https://developer.apple.com/documentation/swift/true) if the proxy implementation decides to handle the flow, or [false](https://developer.apple.com/documentation/swift/false) if it instead decides to terminate the flow.

<a id="Discussion"></a>

## Discussion

The system calls this method to deliver a new network data flow to the proxy provider implementation. Subclasses must override this method to perform whatever steps are necessary to ready the proxy to receive data from the flow.

The proxy provider indicates that the proxy is ready to handle flow data by calling the flow’s [open(withLocalEndpoint:completionHandler:)](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) method.

If the proxy implementation decides to handle the flow, it’s responsible for retaining a reference to the flow instance.

## See Also

### Handling proxied DNS flow

- [handleNewUDPFlow(\_:initialRemoteEndpoint:)](handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handles a new flow of UDP traffic.

# handleNewFlow: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Handles a new flow of DNS traffic.

## Declaration

```objectivec
- (BOOL) handleNewFlow:(NEAppProxyFlow *) flow;
```

## Parameters

- `flow`: The flow representing the DNS traffic that the proxy should handle.

<a id="return-value"></a>

## Return Value

A Boolean value set to [true](https://developer.apple.com/documentation/swift/true) if the proxy implementation decides to handle the flow, or [false](https://developer.apple.com/documentation/swift/false) if it instead decides to terminate the flow.

<a id="Discussion"></a>

## Discussion

The system calls this method to deliver a new network data flow to the proxy provider implementation. Subclasses must override this method to perform whatever steps are necessary to ready the proxy to receive data from the flow.

The proxy provider indicates that the proxy is ready to handle flow data by calling the flow’s [openWithLocalEndpoint:completionHandler:](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) method.

If the proxy implementation decides to handle the flow, it’s responsible for retaining a reference to the flow instance.

## See Also

### Handling proxied DNS flow

- [handleNewUDPFlow:initialRemoteEndpoint:](handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handles a new flow of UDP traffic.
