> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/pipeoptions/closeonexec](https://developer.apple.com/documentation/system/filedescriptor/pipeoptions/closeonexec)

# closeOnExec

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that executing a program closes the file.

## Declaration

```swift
static var closeOnExec: FileDescriptor.PipeOptions { get }
```

<a id="discussion"></a>

## Discussion

Normally, file descriptors remain open across calls to the `exec(2)` family of functions. If you specify this option, the file descriptor is closed when replacing this process with another process.

The state of the file descriptor flags can be inspected using `F_GETFD`, as described in the `fcntl(2)` man page.

The corresponding C constant is `O_CLOEXEC`.
