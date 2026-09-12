> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1470924-file_system_manager_version_sele](https://developer.apple.com/documentation/coreservices/1470924-file_system_manager_version_sele)

# File System Manager Version Selector

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specifies version information for the File System Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltFSMVersion](1470924-file_system_manager_version_sele/gestaltfsmversion.md): Pass this selector to the `Gestalt` function to determine the version of the HFS External File Systems Manager (FSM).
