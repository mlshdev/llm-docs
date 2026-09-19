> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_gatekeeper_user_override_t/init(file_type:file:sha256:signing_info:)

# init(file_type:file:sha256:signing_info:)

**Framework:** Endpoint Security  
**Kind:** Initializer  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
init(file_type: es_gatekeeper_user_override_file_type_t, file: es_event_gatekeeper_user_override_t.__Unnamed_union_file, sha256: UnsafeMutablePointer<es_sha256_t>?, signing_info: UnsafeMutablePointer<es_signed_file_info_t>?)
```
