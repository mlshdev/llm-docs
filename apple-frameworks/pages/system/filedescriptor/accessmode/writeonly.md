> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filedescriptor/accessmode/writeonly

# writeOnly

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Opens the file for writing only.

## Declaration

```swift
static var writeOnly: FileDescriptor.AccessMode { get }
```

## Mentioned In

- [Adopting Swift File Options](../../adopting-file-options.md)

<a id="discussion"></a>

## Discussion

The corresponding C constant is `O_WRONLY`.

## See Also

### Creating an Access Mode

- [readOnly](readonly.md): Opens the file for reading only.
- [readWrite](readwrite.md): Opens the file for reading and writing.
