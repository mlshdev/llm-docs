> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyflow/closereadwitherror(_:)](https://developer.apple.com/documentation/networkextension/neappproxyflow/closereadwitherror(_:))

# closeReadWithError(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Close the flow for further read operations.

## Declaration

```swift
func closeReadWithError(_ error: (any Error)?)
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object indicating to the system the error that led to the closure. If the flow is not being closed due to an error, this parameter should be set to nil. See `NEAppProxyFlowError` below for a list of acceptable error codes.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

## See Also

### Managing the flow life cycle

- [open(withLocalEndpoint:completionHandler:)](open%28withlocalendpoint_completionhandler_%29.md): Deprecated. Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.
- [closeWriteWithError(\_:)](closewritewitherror%28__%29.md): Close the flow for further write operations.

# closeReadWithError: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Close the flow for further read operations.

## Declaration

```objectivec
- (void) closeReadWithError:(NSError *) error;
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object indicating to the system the error that led to the closure. If the flow is not being closed due to an error, this parameter should be set to nil. See `NEAppProxyFlowError` below for a list of acceptable error codes.

## Mentioned In

- [Handling Flow Copying](../handling-flow-copying.md)

## See Also

### Managing the flow life cycle

- [openWithLocalEndpoint:completionHandler:](open%28withlocalendpoint_completionhandler_%29.md): Deprecated. Opens the flow, indicating to the system that the caller is ready to start receiving and sending data.
- [closeWriteWithError:](closewritewitherror%28__%29.md): Close the flow for further write operations.
