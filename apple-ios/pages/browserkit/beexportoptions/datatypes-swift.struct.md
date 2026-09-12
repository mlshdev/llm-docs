> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions/datatypes-swift.struct](https://developer.apple.com/documentation/browserkit/beexportoptions/datatypes-swift.struct)

# BEExportOptions.DataTypes (Swift)

**Framework:** BrowserKit  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Types of exported browser data.

## Declaration

```swift
struct DataTypes
```

## Topics

### Creating a browser data type

- [init(rawValue:)](datatypes-swift.struct/init%28rawvalue_%29.md): Initializes a browser data export option with a value that represents the underlying type.

### Identifying browser data types

- [bookmarks](datatypes-swift.struct/bookmarks.md): A data type for webpage bookmarks.
- [extensions](datatypes-swift.struct/extensions.md): A data type for browser extensions.
- [history](datatypes-swift.struct/history.md): A data type for page visit history.
- [readingList](datatypes-swift.struct/readinglist.md): A data type for the person’s reading list.
- [none](datatypes-swift.struct/none.md): A browser data type that indicates the person chooses to export no data.

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

### Configuring export preferences

- [dataTypes](datatypes-swift.property.md): The set of data types to include in the export.
- [exportToFiles](exporttofiles.md): A Boolean value that indicates whether to export to files.

# BEExportDataTypes (Objective-C)

**Framework:** BrowserKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Types of exported browser data.

## Declaration

```objectivec
enum BEExportDataTypes : NSUInteger;
```

## Topics

### Identifying browser data types

- [BEExportDataTypesBookmarks](datatypes-swift.struct/bookmarks.md): A data type for webpage bookmarks.
- [BEExportDataTypesExtensions](datatypes-swift.struct/extensions.md): A data type for browser extensions.
- [BEExportDataTypesHistory](datatypes-swift.struct/history.md): A data type for page visit history.
- [BEExportDataTypesReadingList](datatypes-swift.struct/readinglist.md): A data type for the person’s reading list.
- [BEExportDataTypesNone](datatypes-swift.struct/none.md): A browser data type that indicates the person chooses to export no data.

## See Also

### Configuring export preferences

- [dataTypes](datatypes-swift.property.md): The set of data types to include in the export.
- [exportToFiles](exporttofiles.md): A Boolean value that indicates whether to export to files.
