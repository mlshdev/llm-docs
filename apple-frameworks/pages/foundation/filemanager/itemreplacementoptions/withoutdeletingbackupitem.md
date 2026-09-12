> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/itemreplacementoptions/withoutdeletingbackupitem](https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions/withoutdeletingbackupitem)

# withoutDeletingBackupItem (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The backup item remains in place after a successful replacement.

## Declaration

```swift
static var withoutDeletingBackupItem: FileManager.ItemReplacementOptions { get }
```

## See Also

### Using File Replacement Options

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a value for a file replacement operation.
- [usingNewMetadataOnly](usingnewmetadataonly.md): Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).

# NSFileManagerItemReplacementWithoutDeletingBackupItem (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The backup item remains in place after a successful replacement.

## Declaration

```objectivec
NSFileManagerItemReplacementWithoutDeletingBackupItem
```

## See Also

### Using File Replacement Options

- [NSFileManagerItemReplacementUsingNewMetadataOnly](usingnewmetadataonly.md): Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).
