> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider/handlenewudpflow(_:initialremoteendpoint:)](https://developer.apple.com/documentation/networkextension/neappproxyprovider/handlenewudpflow(_:initialremoteendpoint:))

# handleNewUDPFlow(\_:initialRemoteEndpoint:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Handle a new UDP flow of network data.

## Declaration

```swift
func handleNewUDPFlow(_ flow: NEAppProxyUDPFlow, initialRemoteEndpoint remoteEndpoint: NWEndpoint) -> Bool
```

## Parameters

- `flow`: The new UDP flow.
- `remoteEndpoint`: The initial remote endpoint provided by the proxied app when the flow was opened.

<a id="Discussion"></a>

## Discussion

The framework calls this function to deliver a new UDP data flow to the proxy provider implementation. Subclasses can override this method to perform whatever steps are necessary to ready the proxy to receive data from the flow.

If you decide to handle the flow, the subclass implementation of this method should return [true](https://developer.apple.com/documentation/swift/true). In this case, your implementation is responsible for retaining the [NEAppProxyUDPFlow](../neappproxyudpflow.md) object.

Your implementation indicates that it’s ready to handle flow data by calling [open(withLocalEndpoint:completionHandler:)](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) on the flow.

If you decide to not handle the flow and instead terminate it, your implementation of this method should return [false](https://developer.apple.com/documentation/swift/false). This terminates the flow.

The default implementation of this method calls [handleNewFlow(\_:)](handlenewflow%28__%29.md) and returns its result.

## See Also

### Handling proxied flows

- [handleNewFlow(\_:)](handlenewflow%28__%29.md): Handle a new flow of network data.

# handleNewUDPFlow:initialRemoteEndpoint: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 18.0) · iPadOS 13.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Handle a new UDP flow of network data.

## Declaration

```objectivec
- (BOOL) handleNewUDPFlow:(NEAppProxyUDPFlow *) flow initialRemoteEndpoint:(NWEndpoint *) remoteEndpoint;
```

## Parameters

- `flow`: The new UDP flow.
- `remoteEndpoint`: The initial remote endpoint provided by the proxied app when the flow was opened.

<a id="Discussion"></a>

## Discussion

The framework calls this function to deliver a new UDP data flow to the proxy provider implementation. Subclasses can override this method to perform whatever steps are necessary to ready the proxy to receive data from the flow.

If you decide to handle the flow, the subclass implementation of this method should return [true](https://developer.apple.com/documentation/swift/true). In this case, your implementation is responsible for retaining the [NEAppProxyUDPFlow](../neappproxyudpflow.md) object.

Your implementation indicates that it’s ready to handle flow data by calling [openWithLocalEndpoint:completionHandler:](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md) on the flow.

If you decide to not handle the flow and instead terminate it, your implementation of this method should return [false](https://developer.apple.com/documentation/swift/false). This terminates the flow.

The default implementation of this method calls [handleNewFlow:](handlenewflow%28__%29.md) and returns its result.

## See Also

### Handling proxied flows

- [handleNewFlow:](handlenewflow%28__%29.md): Handle a new flow of network data.
