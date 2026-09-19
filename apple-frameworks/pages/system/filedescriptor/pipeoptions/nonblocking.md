> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filedescriptor/pipeoptions/nonblocking

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
