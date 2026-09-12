> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/duplicateoptions/closeonfork](https://developer.apple.com/documentation/system/filedescriptor/duplicateoptions/closeonfork)

# closeOnFork

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that forking a program closes the file.

## Declaration

```swift
static var closeOnFork: FileDescriptor.DuplicateOptions { get }
```

<a id="discussion"></a>

## Discussion

Normally, file descriptors remain open across calls to the `fork(2)` function. If you specify this option, the file descriptor is closed when forking this process into another process.

The state of the file descriptor flags can be inspected using `F_GETFD`, as described in the `fcntl(2)` man page.

The corresponding C constant is `O_CLOFORK`.
