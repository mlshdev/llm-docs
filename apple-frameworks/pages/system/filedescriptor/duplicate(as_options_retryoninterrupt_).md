> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/duplicate(as:options:retryoninterrupt:)](https://developer.apple.com/documentation/system/filedescriptor/duplicate(as:options:retryoninterrupt:))

# duplicate(as:options:retryOnInterrupt:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Duplicates this file descriptor and returns the newly created copy.

## Declaration

```swift
@discardableResult func duplicate(as target: FileDescriptor, options: FileDescriptor.DuplicateOptions, retryOnInterrupt: Bool = true) throws(Errno) -> FileDescriptor
```

## Parameters

- `retryOnInterrupt`: Whether to retry the duplicate operation if it throws [interrupted](../errno/interrupted.md). The default is `true`. Pass `false` to try only once and throw an error upon interruption.

<a id="return-value"></a>

## Return Value

The new file descriptor.

<a id="discussion"></a>

## Discussion

If the `target` descriptor is already in use, then it is first deallocated as if a close(2) call had been done first.

File descriptors are merely references to some underlying system resource. The system does not distinguish between the original and the new file descriptor in any way. For example, read, write and seek operations on one of them also affect the logical file position in the other, and append mode, non-blocking I/O and asynchronous I/O options are shared between the references. If a separate pointer into the file is desired, a different object reference to the file must be obtained by issuing an additional call to `open`.

However, each file descriptor maintains its own close-on-exec flag.

The corresponding C function is `dup3`.
