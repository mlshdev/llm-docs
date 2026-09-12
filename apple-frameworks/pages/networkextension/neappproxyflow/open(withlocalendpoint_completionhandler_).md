> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/open(withlocalendpoint:completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxyflow/open(withlocalendpoint:completionhandler:))

# open(withLocalEndpoint:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.

## Declaration

```swift
func open(withLocalEndpoint localEndpoint: NWHostEndpoint?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func open(withLocalEndpoint localEndpoint: NWHostEndpoint?) async throws
```

## Parameters

- `localEndpoint`: An [NWHostEndpoint](../nwhostendpoint.md) object that contains the address and port to set as the local address and local port of the flow.

  The system supplies this information to the app that triggered the creation of this flow in different ways, depending on the networking API the app used. For example, if the app used the Network framework, it gets this information from the [localEndpoint](../../network/nwpath/localendpoint.md) property of the current path. If it used BSD Sockets, it gets this information by calling `getsockname`.

  Pass `nil` to have the system derive a value based on the address of the current primary physical interface.
- `completionHandler`: Called when the open operation is complete. This block has no return value and takes the following parameter:

  - **error**: A `nil` value indicates the flow opened successfully. A non-`nil` value indicates the flow could not be opened. See [NEAppProxyFlowError](../neappproxyflowerror-swift.struct.md) for a list of expected error codes.

<a id="Discussion"></a>

## Discussion

An [NEAppProxyFlow](../neappproxyflow.md) object starts out in the unopened state. When the system passes a flow to your app proxy provider by calling [handleNewFlow(\_:)](../neappproxyprovider/handlenewflow%28__%29.md), to need to set up the state necessary to handle the flow’s data, and then call this method.

## See Also

### Managing the flow life cycle

- [closeReadWithError(\_:)](closereadwitherror%28__%29.md): Close the flow for further read operations.
- [closeWriteWithError(\_:)](closewritewitherror%28__%29.md): Close the flow for further write operations.

# openWithLocalEndpoint:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.

## Declaration

```objectivec
- (void) openWithLocalEndpoint:(NWHostEndpoint *) localEndpoint completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `localEndpoint`: An [NWHostEndpoint](../nwhostendpoint.md) object that contains the address and port to set as the local address and local port of the flow.

  The system supplies this information to the app that triggered the creation of this flow in different ways, depending on the networking API the app used. For example, if the app used the Network framework, it gets this information from the [localEndpoint](../../network/nwpath/localendpoint.md) property of the current path. If it used BSD Sockets, it gets this information by calling `getsockname`.

  Pass `nil` to have the system derive a value based on the address of the current primary physical interface.
- `completionHandler`: Called when the open operation is complete. This block has no return value and takes the following parameter:

  - **error**: A `nil` value indicates the flow opened successfully. A non-`nil` value indicates the flow could not be opened. See [NEAppProxyFlowError](../neappproxyflowerror-swift.struct.md) for a list of expected error codes.

<a id="Discussion"></a>

## Discussion

An [NEAppProxyFlow](../neappproxyflow.md) object starts out in the unopened state. When the system passes a flow to your app proxy provider by calling [handleNewFlow:](../neappproxyprovider/handlenewflow%28__%29.md), to need to set up the state necessary to handle the flow’s data, and then call this method.

## See Also

### Managing the flow life cycle

- [closeReadWithError:](closereadwitherror%28__%29.md): Close the flow for further read operations.
- [closeWriteWithError:](closewritewitherror%28__%29.md): Close the flow for further write operations.
