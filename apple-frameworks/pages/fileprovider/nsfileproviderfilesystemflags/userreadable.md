> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfilesystemflags/userreadable](https://developer.apple.com/documentation/fileprovider/nsfileproviderfilesystemflags/userreadable)

# userReadable (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The user can read the item.

## Declaration

```swift
static var userReadable: NSFileProviderFileSystemFlags { get }
```

## See Also

### Flags

- [userWritable](userwritable.md): The user can modify the item.
- [userExecutable](userexecutable.md): The user can execute the item.
- [hidden](hidden.md): By default, the system hides the item when the user views the file system.
- [pathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.

# NSFileProviderFileSystemUserReadable (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The user can read the item.

## Declaration

```objectivec
NSFileProviderFileSystemUserReadable
```

## See Also

### Flags

- [NSFileProviderFileSystemUserWritable](userwritable.md): The user can modify the item.
- [NSFileProviderFileSystemUserExecutable](userexecutable.md): The user can execute the item.
- [NSFileProviderFileSystemHidden](hidden.md): By default, the system hides the item when the user views the file system.
- [NSFileProviderFileSystemPathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.
