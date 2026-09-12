> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beimportoptions](https://developer.apple.com/documentation/browserkit/beimportoptions)

# BEImportOptions (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Options for importing browsing data.

## Declaration

```swift
class BEImportOptions
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

The [requestImport(for:completionHandler:)](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md) returns an instance of this class, which indicates whether the import needs to source from files rather than direct browser-to-browser transfer.

## Topics

### Creating import options

- [init(coder:)](beimportoptions/init%28coder_%29.md): Initializes imports from a decoder.
- [init(importFromFiles:)](beimportoptions/init%28importfromfiles_%29.md): Initializes imports with a file import preference.

### Configuring import preferences

- [importFromFiles](beimportoptions/importfromfiles.md): A Boolean value that indicates whether to import browser data from files.

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

### Data import management

- [BEBrowserDataImportManager](bebrowserdataimportmanager.md): A class that handles importing browsing data from other browsers.
- [BEImportMetadata](beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.

# BEImportOptions (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Options for importing browsing data.

## Declaration

```objectivec
@interface BEImportOptions : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

The [requestImportForMetadata:completionHandler:](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md) returns an instance of this class, which indicates whether the import needs to source from files rather than direct browser-to-browser transfer.

## Topics

### Creating import options

- [initWithImportFromFiles:](beimportoptions/init%28importfromfiles_%29.md): Initializes imports with a file import preference.

### Configuring import preferences

- [importFromFiles](beimportoptions/importfromfiles.md): A Boolean value that indicates whether to import browser data from files.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Data import management

- [BEBrowserDataImportManager](bebrowserdataimportmanager.md): A class that handles importing browsing data from other browsers.
- [BEImportMetadata](beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.
