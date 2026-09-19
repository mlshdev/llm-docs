> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_getattrlist_t/reserved

# reserved (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file for which to retrieve attributes.
- [attrlist](attrlist.md): The attributes to retrieve, such as volume, directory, file, and fork attributes.

# reserved (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```objectivec
uint8_t reserved[64];
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file for which to retrieve attributes.
- [attrlist](attrlist.md): The attributes to retrieve, such as volume, directory, file, and fork attributes.
- [attrlist](https://developer.apple.com/documentation/kernel/attrlist): A list of attributes associated with a file.
