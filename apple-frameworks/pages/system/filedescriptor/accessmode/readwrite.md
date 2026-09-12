> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/accessmode/readwrite](https://developer.apple.com/documentation/system/filedescriptor/accessmode/readwrite)

# readWrite

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Opens the file for reading and writing.

## Declaration

```swift
static var readWrite: FileDescriptor.AccessMode { get }
```

## Mentioned In

- [Adopting Swift File Options](../../adopting-file-options.md)

<a id="discussion"></a>

## Discussion

The corresponding C constant is `O_RDWR`.

## See Also

### Creating an Access Mode

- [readOnly](readonly.md): Opens the file for reading only.
- [writeOnly](writeonly.md): Opens the file for writing only.
