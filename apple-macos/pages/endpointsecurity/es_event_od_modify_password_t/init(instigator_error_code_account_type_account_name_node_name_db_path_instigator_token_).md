> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_od_modify_password_t/init(instigator:error_code:account_type:account_name:node_name:db_path:instigator_token:)](https://developer.apple.com/documentation/endpointsecurity/es_event_od_modify_password_t/init(instigator:error_code:account_type:account_name:node_name:db_path:instigator_token:))

# init(instigator:error_code:account_type:account_name:node_name:db_path:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, error_code: Int32, account_type: es_od_account_type_t, account_name: es_string_token_t, node_name: es_string_token_t, db_path: es_string_token_t, instigator_token: audit_token_t)
```
