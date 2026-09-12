> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_copyfile_t/reserved](https://developer.apple.com/documentation/endpointsecurity/es_event_copyfile_t/reserved)

# reserved (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_file](target_file.md): The file, if any, that exists at the target location.
- [target_dir](target_dir.md): The directory that contains the copied file.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.

# reserved (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An unused field reserved for future use.

## Declaration

```objectivec
uint8_t reserved[56];
```

## See Also

### Inspecting Event Properties

- [source](source.md): The file to clone.
- [target_file](target_file.md): The file, if any, that exists at the target location.
- [target_dir](target_dir.md): The directory that contains the copied file.
- [target_name](target_name.md): The name of the newly copied file.
- [mode](mode.md): The mode argument of the system call.
- [flags](flags.md): The flags argument of the system call.
