> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_muted_path_t/init(type:event_count:events:path:)

# init(type:event_count:events:path:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(type: es_mute_path_type_t, event_count: Int, events: UnsafePointer<es_event_type_t>!, path: es_string_token_t)
```
