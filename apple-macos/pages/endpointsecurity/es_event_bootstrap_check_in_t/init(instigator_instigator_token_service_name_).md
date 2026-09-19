> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_bootstrap_check_in_t/init(instigator:instigator_token:service_name:)

# init(instigator:instigator_token:service_name:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(instigator: UnsafeMutablePointer<es_process_t>?, instigator_token: audit_token_t, service_name: es_string_token_t)
```
