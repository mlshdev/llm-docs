> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportmetadata](https://developer.apple.com/documentation/browserkit/beexportmetadata)

# BEExportMetadata (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Metadata that describes available browser data for export.

## Declaration

```swift
class BEExportMetadata
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

Create an instance of this class to represent the types and counts of data that originate from someone’s interaction with your browser and are available for export, such as bookmarks, page visit history, reading list items, and extensions. Pass the instance into [requestExport(for:token:completionHandler:)](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md) to request that the system display the framework-provided transfer sheet.

For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating export metadata

- [init(coder:)](beexportmetadata/init%28coder_%29.md): Initializes export metadata from a decoder.
- [init(supportForExportToFiles:bookmarksCount:readingListCount:historyCount:extensionsCount:)](beexportmetadata/init%28supportforexporttofiles_bookmarkscount_readinglistcount_historycount_extensionscount_%29.md): Initializes export metadata with file support information and data counts.

### Accessing data counts

- [bookmarksCount](beexportmetadata/bookmarkscount.md): A count of bookmarks available for export.
- [extensionsCount](beexportmetadata/extensionscount.md): A count of extensions available for export.
- [historyCount](beexportmetadata/historycount.md): A count of history items available for export.
- [readingListCount](beexportmetadata/readinglistcount.md): A count of reading list items available for export.

### Configuring export capabilities

- [supportExportToFiles](beexportmetadata/supportexporttofiles.md): A Boolean value that determines whether the sheet offers the option to export the data to files.

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
- [BEExportOptions](beexportoptions.md): Options that identify data to export.

# BEExportMetadata (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Metadata that describes available browser data for export.

## Declaration

```objectivec
@interface BEExportMetadata : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

Create an instance of this class to represent the types and counts of data that originate from someone’s interaction with your browser and are available for export, such as bookmarks, page visit history, reading list items, and extensions. Pass the instance into [requestExportForMetadata:token:completionHandler:](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md) to request that the system display the framework-provided transfer sheet.

For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating export metadata

- [initWithSupportForExportToFiles:bookmarksCount:readingListCount:historyCount:extensionsCount:](beexportmetadata/init%28supportforexporttofiles_bookmarkscount_readinglistcount_historycount_extensionscount_%29.md): Initializes export metadata with file support information and data counts.

### Accessing data counts

- [bookmarksCount](beexportmetadata/bookmarkscount.md): A count of bookmarks available for export.
- [extensionsCount](beexportmetadata/extensionscount.md): A count of extensions available for export.
- [historyCount](beexportmetadata/historycount.md): A count of history items available for export.
- [readingListCount](beexportmetadata/readinglistcount.md): A count of reading list items available for export.

### Configuring export capabilities

- [supportExportToFiles](beexportmetadata/supportexporttofiles.md): A Boolean value that determines whether the sheet offers the option to export the data to files.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Data export management

- [BEBrowserDataExportManager](bebrowserdataexportmanager.md): A class that handles exporting browsing data to other browsers.
- [BEExportOptions](beexportoptions.md): Options that identify data to export.
