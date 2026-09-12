> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_peer_requirement_create_entitlement_exists](https://developer.apple.com/documentation/xpc/xpc_peer_requirement_create_entitlement_exists)

# xpc_peer_requirement_create_entitlement_exists

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern xpc_peer_requirement_txpc_peer_requirement_create_entitlement_exists(const char *entitlement, xpc_rich_error_t*error_out);
```

## Parameters

- `entitlement`: The entitlement the peer must have. It is safe to deallocate the entitlement string after calling this function.
- `error_out`: An out-parameter that, if set and in the event of an error, will point to an {@link xpc_rich_error_t} describing the details of any errors that occurred.

<a id="return-value"></a>

## Return Value

On success this returns a new peer requirement object. On failure this will return NULL and if set, error_out will be set to an error describing the failure.

<a id="discussion"></a>

## Discussion

Create a requirement that the peer has the specified entitlement

This function will return NULL promptly if the entitlement requirement is invalid.
