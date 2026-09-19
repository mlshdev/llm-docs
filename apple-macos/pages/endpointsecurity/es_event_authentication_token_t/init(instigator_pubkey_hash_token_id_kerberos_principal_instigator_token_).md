> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_authentication_token_t/init(instigator:pubkey_hash:token_id:kerberos_principal:instigator_token:)

# init(instigator:pubkey_hash:token_id:kerberos_principal:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, pubkey_hash: es_string_token_t, token_id: es_string_token_t, kerberos_principal: es_string_token_t, instigator_token: audit_token_t)
```
