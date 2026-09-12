> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setattrlist_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_setattrlist_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file of this event.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [attrlist](attrlist.md): The attributes to set, such as volume, directory, file, and fork attributes.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file of this event.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [attrlist](attrlist.md): The attributes to set, such as volume, directory, file, and fork attributes.
- [attrlist](https://developer.apple.com/documentation/kernel/attrlist): A list of attributes associated with a file.
- [reserved](reserved.md): An unused field reserved for future use.
