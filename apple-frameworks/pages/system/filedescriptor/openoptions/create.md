> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/openoptions/create](https://developer.apple.com/documentation/system/filedescriptor/openoptions/create)

# create

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that opening the file creates the file if it doesn’t exist.

## Declaration

```swift
static var create: FileDescriptor.OpenOptions { get }
```

## Mentioned In

- [Adopting Swift File Options](../../adopting-file-options.md)

<a id="discussion"></a>

## Discussion

The corresponding C constant is `O_CREAT`.

## See Also

### Specifying Options

- [append](append.md): Indicates that each write operation appends to the file.
- [closeOnExec](closeonexec.md): Indicates that executing a program closes the file.
- [eventOnly](eventonly.md): Indicates that opening the file monitors a file for changes.
- [exclusiveCreate](exclusivecreate.md): Indicates that opening the file creates the file, expecting that it doesn’t exist.
- [exclusiveLock](exclusivelock.md): Indicates that opening the file atomically obtains an exclusive lock.
- [noFollow](nofollow.md): Indicates that opening the file doesn’t follow symlinks.
- [nonBlocking](nonblocking.md): Indicates that opening the file doesn’t wait for the file or device to become available.
- [sharedLock](sharedlock.md): Indicates that opening the file atomically obtains a shared lock on the file.
- [symlink](symlink.md): Indicates that opening the file opens symbolic links instead of following them.
- [truncate](truncate.md): Indicates that opening the file truncates the file if it exists.
