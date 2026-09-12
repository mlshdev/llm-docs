> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/trynextresolvedendpoint()](https://developer.apple.com/documentation/networkextension/nwudpsession/trynextresolvedendpoint())

# tryNextResolvedEndpoint() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.

> Use the [nw_connection_cancel_current_endpoint(\_:)](../../network/nw_connection_cancel_current_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func tryNextResolvedEndpoint()
```

<a id="Discussion"></a>

## Discussion

This should be used when the caller has attempted to communicate with the current `resolvedEndpoint`, and the caller has determined that it is unusable. If there are no other resolved endpoints, the session will move to the failed state.

## See Also

### Selecting remote endpoints

- [resolvedEndpoint](resolvedendpoint.md): Deprecated. The currently targeted remote endpoint.

# tryNextResolvedEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.

> Use the [nw_connection_cancel_current_endpoint](../../network/nw_connection_cancel_current_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (void) tryNextResolvedEndpoint;
```

<a id="Discussion"></a>

## Discussion

This should be used when the caller has attempted to communicate with the current `resolvedEndpoint`, and the caller has determined that it is unusable. If there are no other resolved endpoints, the session will move to the failed state.

## See Also

### Selecting remote endpoints

- [resolvedEndpoint](resolvedendpoint.md): Deprecated. The currently targeted remote endpoint.
