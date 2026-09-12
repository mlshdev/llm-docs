> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxytcpflow/readdata(completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxytcpflow/readdata(completionhandler:))

# readData(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Read data from the flow.

## Declaration

```swift
func readData(completionHandler: @escaping (Data?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: A block that will be executed by the system on an internal system thread when some data is read from the flow. The block is passed either the data that was read or a non-nil error if an error occurred. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible errors. If the data parameter has a length of 0 then no data can be subsequently read from the flow.

  > **Note**

  >  The completion handler is only called for the single read operation that was initiated by calling this method. If the caller wants to read more data then it should call this method again to schedule another read operation and another execution of the completion handler block.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

## See Also

### Handling flow data

- [write(\_:withCompletionHandler:)](write%28__withcompletionhandler_%29.md): Write data to the flow.

# readDataWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Read data from the flow.

## Declaration

```objectivec
- (void) readDataWithCompletionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that will be executed by the system on an internal system thread when some data is read from the flow. The block is passed either the data that was read or a non-nil error if an error occurred. See `NEAppProxyFlowError` in [NEAppProxyFlow](../neappproxyflow.md) for a list of possible errors. If the data parameter has a length of 0 then no data can be subsequently read from the flow.

  > **Note**

  >  The completion handler is only called for the single read operation that was initiated by calling this method. If the caller wants to read more data then it should call this method again to schedule another read operation and another execution of the completion handler block.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

## See Also

### Handling flow data

- [writeData:withCompletionHandler:](write%28__withcompletionhandler_%29.md): Write data to the flow.
