> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/corruptedimageerror](https://developer.apple.com/documentation/diskimagekit/corruptedimageerror)

# CorruptedImageError

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

The disk image is corrupted or contains invalid data.

## Declaration

```swift
struct CorruptedImageError
```

## Topics

### Instance Properties

- [underlyingError](corruptedimageerror/underlyingerror.md): The underlying error with additional diagnostic details.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [IncompatibleStackingError](incompatiblestackingerror.md): The appended layer isn’t compatible with the existing stack.
- [InvalidBlockCountError](invalidblockcounterror.md): The block count specified for the disk image is invalid (zero or negative).
- [UnsupportedFormatError](unsupportedformaterror.md): The disk image format isn’t supported.
