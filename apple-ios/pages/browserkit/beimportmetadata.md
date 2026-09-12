> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beimportmetadata](https://developer.apple.com/documentation/browserkit/beimportmetadata)

# BEImportMetadata (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Metadata that describes import capabilities for browser data transfers.

## Declaration

```swift
class BEImportMetadata
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class provides information about the import methods your browser supports. Configure an instance of this class to include in the sheet the option of importing data from files.

## Topics

### Creating import metadata

- [init(coder:)](beimportmetadata/init%28coder_%29.md): Initializes import metadata from a decoder.
- [init(supportForImportFromFiles:)](beimportmetadata/init%28supportforimportfromfiles_%29.md): Initializes import metadata with file support information.

### Configuring import capabilities

- [supportImportFromFiles](beimportmetadata/supportimportfromfiles.md): A Boolean value that indicates whether the import supports data from files.

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
- [BEImportOptions](beimportoptions.md): Options for importing browsing data.

# BEImportMetadata (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Metadata that describes import capabilities for browser data transfers.

## Declaration

```objectivec
@interface BEImportMetadata : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class provides information about the import methods your browser supports. Configure an instance of this class to include in the sheet the option of importing data from files.

## Topics

### Creating import metadata

- [initWithSupportForImportFromFiles:](beimportmetadata/init%28supportforimportfromfiles_%29.md): Initializes import metadata with file support information.

### Configuring import capabilities

- [supportImportFromFiles](beimportmetadata/supportimportfromfiles.md): A Boolean value that indicates whether the import supports data from files.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Data import management

- [BEBrowserDataImportManager](bebrowserdataimportmanager.md): A class that handles importing browsing data from other browsers.
- [BEImportOptions](beimportoptions.md): Options for importing browsing data.
