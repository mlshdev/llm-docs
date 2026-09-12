> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_peer_requirement_match_received_message](https://developer.apple.com/documentation/xpc/xpc_peer_requirement_match_received_message)

# xpc_peer_requirement_match_received_message

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern bool xpc_peer_requirement_match_received_message(xpc_peer_requirement_t peer_requirement, xpc_object_t message, xpc_rich_error_t*error_out);
```

## Parameters

- `peer_requirement`: The requirement the peer must have
- `message`: The received dictionary to be checked
- `error_out`: An out-parameter that, if set and in the event of an error, will point to an {@link xpc_rich_error_t} describing the details of any errors that occurred.

<a id="return-value"></a>

## Return Value

On match this returns true. On mismatch or failure this will return false and if set, error_out will be set to an error describing the failure.

<a id="discussion"></a>

## Discussion

Check the specified requirement against a received message from the peer.
