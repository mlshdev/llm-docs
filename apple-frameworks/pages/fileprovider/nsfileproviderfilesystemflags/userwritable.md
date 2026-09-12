> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfilesystemflags/userwritable](https://developer.apple.com/documentation/fileprovider/nsfileproviderfilesystemflags/userwritable)

# userWritable (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · visionOS 1.0+

The user can modify the item.

## Declaration

```swift
static var userWritable: NSFileProviderFileSystemFlags { get }
```

## See Also

### Flags

- [userReadable](userreadable.md): The user can read the item.
- [userExecutable](userexecutable.md): The user can execute the item.
- [hidden](hidden.md): By default, the system hides the item when the user views the file system.
- [pathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.

# NSFileProviderFileSystemUserWritable (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The user can modify the item.

## Declaration

```objectivec
NSFileProviderFileSystemUserWritable
```

## See Also

### Flags

- [NSFileProviderFileSystemUserReadable](userreadable.md): The user can read the item.
- [NSFileProviderFileSystemUserExecutable](userexecutable.md): The user can execute the item.
- [NSFileProviderFileSystemHidden](hidden.md): By default, the system hides the item when the user views the file system.
- [NSFileProviderFileSystemPathExtensionHidden](pathextensionhidden.md): By default, the system hides the item’s extension when showing its filename.
