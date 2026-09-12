> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyudpflow/readdatagrams(completionhandler:)-9z8gw](https://developer.apple.com/documentation/networkextension/neappproxyudpflow/readdatagrams(completionhandler:)-9z8gw)

# readDatagrams(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Read datagrams from the flow.

## Declaration

```swift
func readDatagrams(completionHandler: @escaping ([Data]?, [NWEndpoint]?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: A block that will be executed by the system on an internal system thread when datagrams have been read from the flow. The block takes the datagrams that were read, the destination endpoints of the datagrams, and an [NSError](../../foundation/nserror.md). If an error occurred while reading then `error` will be non-nil. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible error codes. If the `datagrams` and `remoteEndpoints` arrays are non-nil but are empty, then no more datagrams can be subsequently read from the flow.

  > **Note**

  >  The completion handler is only called for the single read operation that was initiated by calling this method. If the caller wants to read more datagrams then it should call this method again to schedule another read operation and another execution of the completion handler block.

## See Also

### Handling flow data

- [writeDatagrams(\_:sentBy:completionHandler:)](writedatagrams%28__sentby_completionhandler_%29.md): Deprecated. Write datagrams to the flow.

# readDatagramsWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Read datagrams from the flow.

## Declaration

```objectivec
- (void) readDatagramsWithCompletionHandler:(void (^)(NSArray<NSData *> *datagrams, NSArray<NWEndpoint *> *remoteEndpoints, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that will be executed by the system on an internal system thread when datagrams have been read from the flow. The block takes the datagrams that were read, the destination endpoints of the datagrams, and an [NSError](../../foundation/nserror.md). If an error occurred while reading then `error` will be non-nil. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible error codes. If the `datagrams` and `remoteEndpoints` arrays are non-nil but are empty, then no more datagrams can be subsequently read from the flow.

  > **Note**

  >  The completion handler is only called for the single read operation that was initiated by calling this method. If the caller wants to read more datagrams then it should call this method again to schedule another read operation and another execution of the completion handler block.

## See Also

### Handling flow data

- [writeDatagrams:sentByEndpoints:completionHandler:](writedatagrams%28__sentby_completionhandler_%29.md): Deprecated. Write datagrams to the flow.
