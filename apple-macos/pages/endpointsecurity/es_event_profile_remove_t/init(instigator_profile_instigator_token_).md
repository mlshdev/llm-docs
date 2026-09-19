> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_profile_remove_t/init(instigator:profile:instigator_token:)

# init(instigator:profile:instigator_token:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, profile: UnsafeMutablePointer<es_profile_t>, instigator_token: audit_token_t)
```
