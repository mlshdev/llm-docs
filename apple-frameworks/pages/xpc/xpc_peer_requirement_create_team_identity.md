> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_peer_requirement_create_team_identity](https://developer.apple.com/documentation/xpc/xpc_peer_requirement_create_team_identity)

# xpc_peer_requirement_create_team_identity

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern xpc_peer_requirement_txpc_peer_requirement_create_team_identity(const char *signing_identifier, xpc_rich_error_t*error_out);
```

## Parameters

- `signing_identifier`: The optional signing identifier the peer must have. It is safe to deallocate the signing identifier string after calling this function.
- `error_out`: An out-parameter that, if set and in the event of an error, will point to an {@link xpc_rich_error_t} describing the details of any errors that occurred.

<a id="return-value"></a>

## Return Value

On success this returns a new peer requirement object. On failure this will return NULL and if set, error_out will be set to an error describing the failure.

<a id="discussion"></a>

## Discussion

Create a requirement that the peer has the specified identity and is signed with the same team identifier as the current process

This function will return NULL promptly if the identity requirement is invalid.

The peer process must be signed as either a Testflight app or an App store app, or be signed by an apple issued development certificate, an enterprise distributed certificate (embedded only), or a Developer ID certificate (macOS only)
