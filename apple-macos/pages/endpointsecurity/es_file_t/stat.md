> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_file_t/stat](https://developer.apple.com/documentation/endpointsecurity/es_file_t/stat)

# stat (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file’s metadata, such as file size, user and group identifiers, and access and modification dates.

## Declaration

```swift
var stat: stat
```

<a id="Discussion"></a>

## Discussion

The returned structure’s information is equivalent to that returned by the `stat(2)` system call.

## See Also

### Inspecting File Properties

- [path](path.md): The file’s path.
- [path_truncated](path_truncated.md): A Boolean value that indicates whether Endpoint Security truncated the path string.

# stat (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file’s metadata, such as file size, user and group identifiers, and access and modification dates.

## Declaration

```objectivec
struct stat stat;
```

<a id="Discussion"></a>

## Discussion

The returned structure’s information is equivalent to that returned by the `stat(2)` system call.

## See Also

### Inspecting File Properties

- [path](path.md): The file’s path.
- [path_truncated](path_truncated.md): A Boolean value that indicates whether Endpoint Security truncated the path string.
