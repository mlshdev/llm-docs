> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/itemreplacementoptions/init(rawvalue:)](https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions/init(rawvalue:))

# init(rawValue:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a value for a file replacement operation.

## Declaration

```swift
init(rawValue: UInt)
```

## Parameters

- `rawValue`: An initial value for the structure composed as the bitwise OR of zero or more of the valid values.

## See Also

### Using File Replacement Options

- [usingNewMetadataOnly](usingnewmetadataonly.md): Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).
- [withoutDeletingBackupItem](withoutdeletingbackupitem.md): The backup item remains in place after a successful replacement.
