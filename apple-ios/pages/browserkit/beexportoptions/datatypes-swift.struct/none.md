> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions/datatypes-swift.struct/none](https://developer.apple.com/documentation/browserkit/beexportoptions/datatypes-swift.struct/none)

# none (Swift)

**Framework:** BrowserKit  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A browser data type that indicates the person chooses to export no data.

## Declaration

```swift
static var none: BEExportOptions.DataTypes { get }
```

<a id="discussion"></a>

## Discussion

When [dataTypes](../datatypes-swift.property.md) contains this option, don’t proceed with the export.

## See Also

### Identifying browser data types

- [bookmarks](bookmarks.md): A data type for webpage bookmarks.
- [extensions](extensions.md): A data type for browser extensions.
- [history](history.md): A data type for page visit history.
- [readingList](readinglist.md): A data type for the person’s reading list.

# BEExportDataTypesNone (Objective-C)

**Framework:** BrowserKit  
**Kind:** Enumeration Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A browser data type that indicates the person chooses to export no data.

## Declaration

```objectivec
BEExportDataTypesNone
```

<a id="discussion"></a>

## Discussion

When [dataTypes](../datatypes-swift.property.md) contains this option, don’t proceed with the export.

## See Also

### Identifying browser data types

- [BEExportDataTypesBookmarks](bookmarks.md): A data type for webpage bookmarks.
- [BEExportDataTypesExtensions](extensions.md): A data type for browser extensions.
- [BEExportDataTypesHistory](history.md): A data type for page visit history.
- [BEExportDataTypesReadingList](readinglist.md): A data type for the person’s reading list.
