> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_utimes_t/atime

# atime (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new last-accessed time.

## Declaration

```swift
var atime: timespec
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file with time metadata to modify.
- [mtime](mtime.md): The new last-modified time.
- [reserved](reserved.md): An unused field reserved for future use.

# atime (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new last-accessed time.

## Declaration

```objectivec
struct timespec atime;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file with time metadata to modify.
- [mtime](mtime.md): The new last-modified time.
- [reserved](reserved.md): An unused field reserved for future use.
