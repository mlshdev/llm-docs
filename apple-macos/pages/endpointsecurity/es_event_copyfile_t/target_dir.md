> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_copyfile_t/target_dir](https://developer.apple.com/documentation/endpointsecurity/es_event_copyfile_t/target_dir)

# target_dir (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the copied file.

## Declaration

```swift
var target_dir: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_file](target_file.md): The file, if any, that exists at the target location.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.
- [reserved](reserved.md): An unused field reserved for future use.

# target_dir (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The directory that contains the copied file.

## Declaration

```objectivec
es_file_t * target_dir;
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_file](target_file.md): The file, if any, that exists at the target location.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.
- [reserved](reserved.md): An unused field reserved for future use.
