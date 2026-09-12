> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_file_t/path_truncated](https://developer.apple.com/documentation/endpointsecurity/es_file_t/path_truncated)

# path_truncated (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether Endpoint Security truncated the path string.

## Declaration

```swift
var path_truncated: Bool
```

<a id="Discussion"></a>

## Discussion

If Endpoint Security truncated the full file path when assigning the [path](path.md) field, this value is `true`.

## See Also

### Inspecting File Properties

- [path](path.md): The file’s path.
- [stat](stat.md): The file’s metadata, such as file size, user and group identifiers, and access and modification dates.

# path_truncated (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether Endpoint Security truncated the path string.

## Declaration

```objectivec
bool path_truncated;
```

<a id="Discussion"></a>

## Discussion

If Endpoint Security truncated the full file path when assigning the [path](path.md) field, this value is `true`.

## See Also

### Inspecting File Properties

- [path](path.md): The file’s path.
- [stat](stat.md): The file’s metadata, such as file size, user and group identifiers, and access and modification dates.
