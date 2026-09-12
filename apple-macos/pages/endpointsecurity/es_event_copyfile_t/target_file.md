> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_copyfile_t/target_file](https://developer.apple.com/documentation/endpointsecurity/es_event_copyfile_t/target_file)

# target_file (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file, if any, that exists at the target location.

## Declaration

```swift
var target_file: UnsafeMutablePointer<es_file_t>?
```

<a id="Discussion"></a>

## Discussion

The copy file operation overwrites this file if the operation completes. If no file exists at the target location, this value is `NULL`.

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_dir](target_dir.md): The directory that contains the copied file.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.
- [reserved](reserved.md): An unused field reserved for future use.

# target_file (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file, if any, that exists at the target location.

## Declaration

```objectivec
es_file_t * target_file;
```

<a id="Discussion"></a>

## Discussion

The copy file operation overwrites this file if the operation completes. If no file exists at the target location, this value is `NULL`.

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_dir](target_dir.md): The directory that contains the copied file.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.
- [reserved](reserved.md): An unused field reserved for future use.
