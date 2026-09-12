> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfilesystemflags/hidden](https://developer.apple.com/documentation/fileprovider/nsfileproviderfilesystemflags/hidden)

# hidden (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

By default, the system hides the item when the user views the file system.

## Declaration

```swift
static var hidden: NSFileProviderFileSystemFlags { get }
```

## See Also

### Flags

- [userReadable](userreadable.md): The user can read the item.
- [userWritable](userwritable.md): The user can modify the item.
- [userExecutable](userexecutable.md): The user can execute the item.
- [pathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.

# NSFileProviderFileSystemHidden (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

By default, the system hides the item when the user views the file system.

## Declaration

```objectivec
NSFileProviderFileSystemHidden
```

## See Also

### Flags

- [NSFileProviderFileSystemUserReadable](userreadable.md): The user can read the item.
- [NSFileProviderFileSystemUserWritable](userwritable.md): The user can modify the item.
- [NSFileProviderFileSystemUserExecutable](userexecutable.md): The user can execute the item.
- [NSFileProviderFileSystemPathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.
