> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/invalidblockcounterror](https://developer.apple.com/documentation/diskimagekit/invalidblockcounterror)

# InvalidBlockCountError

**Framework:** DiskImageKit  
**Kind:** Structure  
**Availability:** macOS 27.0+

The block count specified for the disk image is invalid (zero or negative).

## Declaration

```swift
struct InvalidBlockCountError
```

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [IncompatibleStackingError](incompatiblestackingerror.md): The appended layer isn’t compatible with the existing stack.
- [CorruptedImageError](corruptedimageerror.md): The disk image is corrupted or contains invalid data.
- [UnsupportedFormatError](unsupportedformaterror.md): The disk image format isn’t supported.
