> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_utimes_t/mtime

# mtime (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new last-modified time.

## Declaration

```swift
var mtime: timespec
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file with time metadata to modify.
- [atime](atime.md): The new last-accessed time.
- [reserved](reserved.md): An unused field reserved for future use.

# mtime (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The new last-modified time.

## Declaration

```objectivec
struct timespec mtime;
```

## See Also

### Inspecting Event Properties

- [target](target.md): The file with time metadata to modify.
- [atime](atime.md): The new last-accessed time.
- [reserved](reserved.md): An unused field reserved for future use.
