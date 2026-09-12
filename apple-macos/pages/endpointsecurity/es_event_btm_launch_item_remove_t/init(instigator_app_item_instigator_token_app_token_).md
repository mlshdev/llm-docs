> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_btm_launch_item_remove_t/init(instigator:app:item:instigator_token:app_token:)](https://developer.apple.com/documentation/endpointsecurity/es_event_btm_launch_item_remove_t/init(instigator:app:item:instigator_token:app_token:))

# init(instigator:app:item:instigator_token:app_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, app: UnsafeMutablePointer<es_process_t>?, item: UnsafeMutablePointer<es_btm_launch_item_t>, instigator_token: UnsafeMutablePointer<audit_token_t>?, app_token: UnsafeMutablePointer<audit_token_t>?)
```
