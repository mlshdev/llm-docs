> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_od_delete_user_t/init(instigator:error_code:user_name:node_name:db_path:instigator_token:)

# init(instigator:error_code:user_name:node_name:db_path:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, error_code: Int32, user_name: es_string_token_t, node_name: es_string_token_t, db_path: es_string_token_t, instigator_token: audit_token_t)
```
