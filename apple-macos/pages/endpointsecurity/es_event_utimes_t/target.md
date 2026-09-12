> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_utimes_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_utimes_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file with time metadata to modify.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [atime](atime.md): The new last-accessed time.
- [mtime](mtime.md): The new last-modified time.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file with time metadata to modify.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [atime](atime.md): The new last-accessed time.
- [mtime](mtime.md): The new last-modified time.
- [reserved](reserved.md): An unused field reserved for future use.
