> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_peer_authentication_optional](https://developer.apple.com/documentation/security/sec_protocol_options_set_peer_authentication_optional)

# sec_protocol_options_set_peer_authentication_optional

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function

## Declaration

```objectivec
void sec_protocol_options_set_peer_authentication_optional(sec_protocol_options_t options, bool peer_authentication_optional);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `peer_authentication_optional`: Flag to enable or disable requested peer authentication.

<a id="discussion"></a>

## Discussion

When this is enabled, the endpoint requests the peer certificate, but if none is provided, the endpoint still proceeds with the connection. Default false for servers; always false for clients (clients ignore this option). If peer_authentication_required is set to true via sec_protocol_options_set_peer_authentication_required(), peer_authentication_optional will be disregarded and the peer certificate will be required.
