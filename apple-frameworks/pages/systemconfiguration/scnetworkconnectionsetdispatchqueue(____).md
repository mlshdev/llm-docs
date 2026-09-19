> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionsetdispatchqueue(_:_:)

# SCNetworkConnectionSetDispatchQueue(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Specifies a dispatch queue to use for the connection’s callback function and enables notifications.

## Declaration

```swift
func SCNetworkConnectionSetDispatchQueue(_ connection: SCNetworkConnection, _ queue: dispatch_queue_t?) -> Bool
```

## Parameters

- `connection`: The network connection to notify.
- `queue`: The queue on which to run the connection’s callback function. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE` (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

# SCNetworkConnectionSetDispatchQueue (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.6+

Specifies a dispatch queue to use for the connection’s callback function and enables notifications.

## Declaration

```objectivec
Boolean SCNetworkConnectionSetDispatchQueue(SCNetworkConnectionRef connection, dispatch_queue_t queue);
```

## Parameters

- `connection`: The network connection to notify.
- `queue`: The queue on which to run the connection’s callback function. Pass `NULL` to disable notifications and release the queue.

<a id="return-value"></a>

## Return Value

`TRUE` if successful; otherwise, `FALSE` (use the [SCError](scerror%28%29.md) function to retrieve the specific error).
