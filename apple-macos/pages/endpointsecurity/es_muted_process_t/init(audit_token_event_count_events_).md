> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_muted_process_t/init(audit_token:event_count:events:)

# init(audit_token:event_count:events:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(audit_token: audit_token_t, event_count: Int, events: UnsafePointer<es_event_type_t>!)
```
