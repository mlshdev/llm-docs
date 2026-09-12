> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/pipeoptions/nonblocking](https://developer.apple.com/documentation/system/filedescriptor/pipeoptions/nonblocking)

# nonBlocking

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates that all subsequent input and output operations on the pipe’s file descriptors will be nonblocking.

## Declaration

```swift
static var nonBlocking: FileDescriptor.PipeOptions { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `O_NONBLOCK`.
