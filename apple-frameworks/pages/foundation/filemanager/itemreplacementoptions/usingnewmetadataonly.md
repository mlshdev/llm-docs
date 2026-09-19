> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions/usingnewmetadataonly

# usingNewMetadataOnly (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).

## Declaration

```swift
static var usingNewMetadataOnly: FileManager.ItemReplacementOptions { get }
```

## See Also

### Using File Replacement Options

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a value for a file replacement operation.
- [withoutDeletingBackupItem](withoutdeletingbackupitem.md): The backup item remains in place after a successful replacement.

# NSFileManagerItemReplacementUsingNewMetadataOnly (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).

## Declaration

```objectivec
NSFileManagerItemReplacementUsingNewMetadataOnly
```

## See Also

### Using File Replacement Options

- [NSFileManagerItemReplacementWithoutDeletingBackupItem](withoutdeletingbackupitem.md): The backup item remains in place after a successful replacement.
