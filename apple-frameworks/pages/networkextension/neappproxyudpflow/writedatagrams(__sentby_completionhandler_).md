> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyudpflow/writedatagrams(_:sentby:completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxyudpflow/writedatagrams(_:sentby:completionhandler:))

# writeDatagrams(\_:sentBy:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Write datagrams to the flow.

## Declaration

```swift
func writeDatagrams(_ datagrams: [Data], sentBy remoteEndpoints: [NWEndpoint], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeDatagrams(_ datagrams: [Data], sentBy remoteEndpoints: [NWEndpoint]) async throws
```

## Parameters

- `datagrams`: An array of [NSData](../../foundation/nsdata.md) objects containing datagram payloads to be written.
- `remoteEndpoints`: An array of [NWEndpoint](../nwendpoint.md) objects containing the source endpoints of the datagram payloads in `datagrams`.
- `completionHandler`: A block that will be executed by the system on an internal system thread when the data is written into the receive buffer of the socket associated with the flow. If an error occurs while writing the data then a non-nil [NSError](../../foundation/nserror.md) object is passed to the block. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible errors.

## See Also

### Handling flow data

- [readDatagrams(completionHandler:)](readdatagrams%28completionhandler_%29-9z8gw.md): Deprecated. Read datagrams from the flow.

# writeDatagrams:sentByEndpoints:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Write datagrams to the flow.

## Declaration

```objectivec
- (void) writeDatagrams:(NSArray<NSData *> *) datagrams sentByEndpoints:(NSArray<NWEndpoint *> *) remoteEndpoints completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `datagrams`: An array of [NSData](../../foundation/nsdata.md) objects containing datagram payloads to be written.
- `remoteEndpoints`: An array of [NWEndpoint](../nwendpoint.md) objects containing the source endpoints of the datagram payloads in `datagrams`.
- `completionHandler`: A block that will be executed by the system on an internal system thread when the data is written into the receive buffer of the socket associated with the flow. If an error occurs while writing the data then a non-nil [NSError](../../foundation/nserror.md) object is passed to the block. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible errors.

## See Also

### Handling flow data

- [readDatagramsWithCompletionHandler:](readdatagrams%28completionhandler_%29-9z8gw.md): Deprecated. Read datagrams from the flow.
