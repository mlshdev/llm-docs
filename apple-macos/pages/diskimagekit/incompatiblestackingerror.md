> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/incompatiblestackingerror](https://developer.apple.com/documentation/diskimagekit/incompatiblestackingerror)

# IncompatibleStackingError

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

The appended layer isn’t compatible with the existing stack.

## Declaration

```swift
struct IncompatibleStackingError
```

## Topics

### Instance Properties

- [reason](incompatiblestackingerror/reason.md): A description of why the stacking operation failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [InvalidBlockCountError](invalidblockcounterror.md): The block count specified for the disk image is invalid (zero or negative).
- [CorruptedImageError](corruptedimageerror.md): The disk image is corrupted or contains invalid data.
- [UnsupportedFormatError](unsupportedformaterror.md): The disk image format isn’t supported.
