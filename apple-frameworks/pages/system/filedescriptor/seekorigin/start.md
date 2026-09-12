> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/seekorigin/start](https://developer.apple.com/documentation/system/filedescriptor/seekorigin/start)

# start

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that the offset should be set to the specified value.

## Declaration

```swift
static var start: FileDescriptor.SeekOrigin { get }
```

## Mentioned In

- [Adopting Swift File Options](../../adopting-file-options.md)

<a id="discussion"></a>

## Discussion

The corresponding C constant is `SEEK_SET`.

## See Also

### Creating a Seek Origin

- [current](current.md): Indicates that the offset should be set to the specified number of bytes after the current location.
- [end](end.md): Indicates that the offset should be set to the size of the file plus the specified number of bytes.
- [nextHole](nexthole.md): Indicates that the offset should be set to the next hole after the specified number of bytes.
- [nextData](nextdata.md): Indicates that the offset should be set to the start of the next file region that isn’t a hole and is greater than or equal to the supplied offset.
