> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/seekorigin/nextdata](https://developer.apple.com/documentation/system/filedescriptor/seekorigin/nextdata)

# nextData

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Indicates that the offset should be set to the start of the next file region that isn’t a hole and is greater than or equal to the supplied offset.

## Declaration

```swift
static var nextData: FileDescriptor.SeekOrigin { get }
```

## Mentioned In

- [Adopting Swift File Options](../../adopting-file-options.md)

<a id="discussion"></a>

## Discussion

The corresponding C constant is `SEEK_DATA`.

## See Also

### Creating a Seek Origin

- [current](current.md): Indicates that the offset should be set to the specified number of bytes after the current location.
- [end](end.md): Indicates that the offset should be set to the size of the file plus the specified number of bytes.
- [nextHole](nexthole.md): Indicates that the offset should be set to the next hole after the specified number of bytes.
- [start](start.md): Indicates that the offset should be set to the specified value.
