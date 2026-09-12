> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/itemreplacementoptions](https://developer.apple.com/documentation/foundation/filemanager/itemreplacementoptions)

# FileManager.ItemReplacementOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for specifying the behavior of file replacement operations.

## Declaration

```swift
struct ItemReplacementOptions
```

<a id="overview"></a>

## Overview

These options are used by [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md).

## Topics

### Using File Replacement Options

- [init(rawValue:)](itemreplacementoptions/init%28rawvalue_%29.md): Creates a value for a file replacement operation.
- [usingNewMetadataOnly](itemreplacementoptions/usingnewmetadataonly.md): Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).
- [withoutDeletingBackupItem](itemreplacementoptions/withoutdeletingbackupitem.md): The backup item remains in place after a successful replacement.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Replacing items

- [replaceItemAt(\_:withItemAt:backupItemName:options:)](replaceitemat%28__withitemat_backupitemname_options_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.
- [replaceItem(at:withItemAt:backupItemName:options:resultingItemURL:)](replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.

# NSFileManagerItemReplacementOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for specifying the behavior of file replacement operations.

## Declaration

```objectivec
enum NSFileManagerItemReplacementOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These options are used by [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md).

## Topics

### Using File Replacement Options

- [NSFileManagerItemReplacementUsingNewMetadataOnly](itemreplacementoptions/usingnewmetadataonly.md): Only metadata from the new item is used, and metadata from the original item isn’t preserved (default).
- [NSFileManagerItemReplacementWithoutDeletingBackupItem](itemreplacementoptions/withoutdeletingbackupitem.md): The backup item remains in place after a successful replacement.

## See Also

### Replacing items

- [replaceItemAtURL:withItemAtURL:backupItemName:options:resultingItemURL:error:](replaceitem%28at_withitemat_backupitemname_options_resultingitemurl_%29.md): Replaces the contents of the item at the specified URL in a manner that ensures no data loss occurs.
