> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_paths_t/paths](https://developer.apple.com/documentation/endpointsecurity/es_muted_paths_t/paths)

# paths (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted paths.

## Declaration

```swift
var paths: UnsafePointer<es_muted_path_t>!
```

## See Also

### Accessing Muted Paths

- [es_muted_path_t](../es_muted_path_t.md): A structure that describes a path’s muted events.
- [count](count.md): The number of elements in the paths array.

# paths (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An array containing the muted paths.

## Declaration

```objectivec
const es_muted_path_t * paths;
```

## See Also

### Accessing Muted Paths

- [es_muted_path_t](../es_muted_path_t.md): A structure that describes a path’s muted events.
- [count](count.md): The number of elements in the paths array.
