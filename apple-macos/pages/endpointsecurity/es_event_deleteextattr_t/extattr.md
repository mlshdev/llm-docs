> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_deleteextattr_t/extattr

# extattr (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The extended attribute to delete.

## Declaration

```swift
var extattr: es_string_token_t
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing extended attributes to delete.
- [reserved](reserved.md): An unused field reserved for future use.

# extattr (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The extended attribute to delete.

## Declaration

```objectivec
es_string_token_t extattr;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file containing extended attributes to delete.
- [reserved](reserved.md): An unused field reserved for future use.
