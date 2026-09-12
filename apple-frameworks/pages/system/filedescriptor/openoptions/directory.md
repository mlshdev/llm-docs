> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/openoptions/directory](https://developer.apple.com/documentation/system/filedescriptor/openoptions/directory)

# directory

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that opening the file only succeeds if the file is a directory.

## Declaration

```swift
static var directory: FileDescriptor.OpenOptions { get }
```

<a id="discussion"></a>

## Discussion

If you specify this option and the file path you pass to doc:FileDescriptor/open(\_:\_:options:permissions:retryOnInterrupt:)-2266j is a not a directory, then that open operation fails.

The corresponding C constant is `O_DIRECTORY`.
