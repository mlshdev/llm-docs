> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_od_group_set_t/init(instigator:error_code:group_name:members:node_name:db_path:instigator_token:)](https://developer.apple.com/documentation/endpointsecurity/es_event_od_group_set_t/init(instigator:error_code:group_name:members:node_name:db_path:instigator_token:))

# init(instigator:error_code:group_name:members:node_name:db_path:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, error_code: Int32, group_name: es_string_token_t, members: UnsafeMutablePointer<es_od_member_id_array_t>, node_name: es_string_token_t, db_path: es_string_token_t, instigator_token: audit_token_t)
```
