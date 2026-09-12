> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_authentication_touchid_t/init(instigator:touchid_mode:has_uid:uid:instigator_token:)](https://developer.apple.com/documentation/endpointsecurity/es_event_authentication_touchid_t/init(instigator:touchid_mode:has_uid:uid:instigator_token:))

# init(instigator:touchid_mode:has_uid:uid:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, touchid_mode: es_touchid_mode_t, has_uid: Bool, uid: es_event_authentication_touchid_t.__Unnamed_union_uid, instigator_token: audit_token_t)
```
