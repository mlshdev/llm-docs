> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muting_inverted(_:_:)](https://developer.apple.com/documentation/endpointsecurity/es_muting_inverted(_:_:))

# es_muting_inverted(\_:\_:) (Swift)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```swift
func es_muting_inverted(_ client: OpaquePointer, _ mute_type: es_mute_inversion_type_t) -> es_mute_inverted_return_t
```

## See Also

### Functions

- [es_invert_muting(\_:\_:)](es_invert_muting%28____%29.md)
- [es_unmute_all_target_paths(\_:)](es_unmute_all_target_paths%28__%29.md)

# es_muting_inverted (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Function  
**Availability:** macOS 13.0+

## Declaration

```objectivec
extern es_mute_inverted_return_t es_muting_inverted(es_client_t *client, es_mute_inversion_type_t mute_type);
```

## See Also

### Functions

- [es_invert_muting](es_invert_muting%28____%29.md)
- [es_unmute_all_target_paths](es_unmute_all_target_paths%28__%29.md)
