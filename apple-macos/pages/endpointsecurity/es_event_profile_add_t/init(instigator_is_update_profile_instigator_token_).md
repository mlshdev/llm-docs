> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_profile_add_t/init(instigator:is_update:profile:instigator_token:)

# init(instigator:is_update:profile:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, is_update: Bool, profile: UnsafeMutablePointer<es_profile_t>, instigator_token: audit_token_t)
```
