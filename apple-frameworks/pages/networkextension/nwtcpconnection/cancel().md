> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/cancel()](https://developer.apple.com/documentation/networkextension/nwtcpconnection/cancel())

# cancel() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Cancel the connection.

> Use the [nw_connection_cancel(\_:)](../../network/nw_connection_cancel%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This will clean up the resources associated with this object and transition this object to the `NWTCPConnectionStateCancelled` state.

# cancel (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Cancel the connection.

> Use the [nw_connection_cancel](../../network/nw_connection_cancel%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

This will clean up the resources associated with this object and transition this object to the `NWTCPConnectionStateCancelled` state.
