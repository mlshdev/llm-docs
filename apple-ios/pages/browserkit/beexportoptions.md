> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions](https://developer.apple.com/documentation/browserkit/beexportoptions)

# BEExportOptions (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Options that identify data to export.

## Declaration

```swift
class BEExportOptions
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class identifies the selected types of items to export, including bookmarks, page visit history, reading list items, and browser extensions. People make their selections in the framework-provided transfer sheet. When someone dismisses the sheet, the system returns an instance of this class. For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

This class’s [exportToFiles](beexportoptions/exporttofiles.md) property is `true` when someone chooses to export to files. In this case, the system cancels the browser-to-browser data transfer, and your app exports the browsing data to disk using a file format of your choosing.

## Topics

### Creating export options

- [init(coder:)](beexportoptions/init%28coder_%29.md): Initializes exports from a decoder.
- [init(exportToFiles:dataTypes:)](beexportoptions/init%28exporttofiles_datatypes_%29.md): Initializes exports with file information and data types.

### Configuring export preferences

- [dataTypes](beexportoptions/datatypes-swift.property.md): The set of data types to include in the export.
- [BEExportOptions.DataTypes](beexportoptions/datatypes-swift.struct.md): Types of exported browser data.
- [exportToFiles](beexportoptions/exporttofiles.md): A Boolean value that indicates whether to export to files.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data export management

- [BEBrowserDataExportManager](bebrowserdataexportmanager.md): A class that handles exporting browsing data to other browsers.
- [BEExportMetadata](beexportmetadata.md): Metadata that describes available browser data for export.

# BEExportOptions (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Options that identify data to export.

## Declaration

```objectivec
@interface BEExportOptions : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class identifies the selected types of items to export, including bookmarks, page visit history, reading list items, and browser extensions. People make their selections in the framework-provided transfer sheet. When someone dismisses the sheet, the system returns an instance of this class. For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

This class’s [exportToFiles](beexportoptions/exporttofiles.md) property is `true` when someone chooses to export to files. In this case, the system cancels the browser-to-browser data transfer, and your app exports the browsing data to disk using a file format of your choosing.

## Topics

### Creating export options

- [initWithExportToFiles:dataTypes:](beexportoptions/init%28exporttofiles_datatypes_%29.md): Initializes exports with file information and data types.

### Configuring export preferences

- [dataTypes](beexportoptions/datatypes-swift.property.md): The set of data types to include in the export.
- [BEExportDataTypes](beexportoptions/datatypes-swift.struct.md): Types of exported browser data.
- [exportToFiles](beexportoptions/exporttofiles.md): A Boolean value that indicates whether to export to files.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Data export management

- [BEBrowserDataExportManager](bebrowserdataexportmanager.md): A class that handles exporting browsing data to other browsers.
- [BEExportMetadata](beexportmetadata.md): Metadata that describes available browser data for export.
