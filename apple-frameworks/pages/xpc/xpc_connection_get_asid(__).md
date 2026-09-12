> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_get_asid(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_get_asid(_:))

# xpc_connection_get_asid(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns the audit session identifier of the remote peer.

## Declaration

```swift
func xpc_connection_get_asid(_ connection: xpc_connection_t) -> au_asid_t
```

## Parameters

- `connection`: The connection object which is to be examined.

<a id="return-value"></a>

## Return Value

The audit session ID of the remote peer at the time the connection was made.

## See Also

### Remote peer information

- [xpc_connection_get_name(\_:)](xpc_connection_get_name%28__%29.md): Returns the name of the remote service that creates the connection.
- [xpc_connection_get_euid(\_:)](xpc_connection_get_euid%28__%29.md): Returns the EUID of the remote peer.
- [xpc_connection_get_egid(\_:)](xpc_connection_get_egid%28__%29.md): Returns the EGID of the remote peer.
- [xpc_connection_get_pid(\_:)](xpc_connection_get_pid%28__%29.md): Returns the PID of the remote peer.
- [xpc_connection_set_peer_entitlement_exists_requirement(\_:\_:)](xpc_connection_set_peer_entitlement_exists_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement.
- [xpc_connection_set_peer_entitlement_matches_value_requirement(\_:\_:\_:)](xpc_connection_set_peer_entitlement_matches_value_requirement%28______%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement with a specific value.
- [xpc_connection_set_peer_lightweight_code_requirement(\_:\_:)](xpc_connection_set_peer_lightweight_code_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that matches the lightweight code requirement.
- [xpc_connection_set_peer_platform_identity_requirement(\_:\_:)](xpc_connection_set_peer_platform_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that identifies it as an Apple-signed binary with the given signing identifier.
- [xpc_connection_set_peer_team_identity_requirement(\_:\_:)](xpc_connection_set_peer_team_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature and is signed by the same team identifier as the calling process.
- [xpc_connection_set_peer_code_signing_requirement(\_:\_:)](xpc_connection_set_peer_code_signing_requirement%28____%29.md)

# xpc_connection_get_asid (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns the audit session identifier of the remote peer.

## Declaration

```objectivec
extern au_asid_t xpc_connection_get_asid(xpc_connection_t connection);
```

## Parameters

- `connection`: The connection object which is to be examined.

<a id="return-value"></a>

## Return Value

The audit session ID of the remote peer at the time the connection was made.

## See Also

### Remote peer information

- [xpc_connection_get_name](xpc_connection_get_name%28__%29.md): Returns the name of the remote service that creates the connection.
- [xpc_connection_get_euid](xpc_connection_get_euid%28__%29.md): Returns the EUID of the remote peer.
- [xpc_connection_get_egid](xpc_connection_get_egid%28__%29.md): Returns the EGID of the remote peer.
- [xpc_connection_get_pid](xpc_connection_get_pid%28__%29.md): Returns the PID of the remote peer.
- [xpc_connection_set_peer_entitlement_exists_requirement](xpc_connection_set_peer_entitlement_exists_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement.
- [xpc_connection_set_peer_entitlement_matches_value_requirement](xpc_connection_set_peer_entitlement_matches_value_requirement%28______%29.md): Sets a requirement that the executable for the peer process has a valid code signature that contains an entitlement with a specific value.
- [xpc_connection_set_peer_lightweight_code_requirement](xpc_connection_set_peer_lightweight_code_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that matches the lightweight code requirement.
- [xpc_connection_set_peer_platform_identity_requirement](xpc_connection_set_peer_platform_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature that identifies it as an Apple-signed binary with the given signing identifier.
- [xpc_connection_set_peer_team_identity_requirement](xpc_connection_set_peer_team_identity_requirement%28____%29.md): Sets a requirement that the executable for the peer process has a valid code signature and is signed by the same team identifier as the calling process.
- [xpc_connection_set_peer_code_signing_requirement](xpc_connection_set_peer_code_signing_requirement%28____%29.md)
