> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataimportmanager](https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager)

# BEBrowserDataImportManager (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that handles importing browsing data from other browsers.

## Declaration

```swift
class BEBrowserDataImportManager
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class coordinates the transfer of browsing data by presenting the framework-provided import sheet when a person wants to import data through your app’s UI (see [requestImport(for:completionHandler:)](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md)). Call this class’s [requestImport(for:completionHandler:)](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md) to stream browsing data from the system, as received through another browser. For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating an import manager

- [init()](bebrowserdataimportmanager/init%28%29.md): Initializes an import manager.

### Importing browser data

- [importBrowserData(token:)](bebrowserdataimportmanager/importbrowserdata%28token_%29.md): Imports another app’s browsing data as a stream.
- [requestImport(for:completionHandler:)](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md): Requests that the system display the sheet to import data from another browser.

### Managing import tokens

- [importTokenUserInfoKey](bebrowserdataimportmanager/importtokenuserinfokey-3bqve.md): A key for accessing the data transfer token in the import launch activity’s info dictionary.
- [importTokenUserInfoKey](bebrowserdataimportmanager/importtokenuserinfokey-3zzub.md): A key for accessing the data transfer token in the import launch activity’s info dictionary.
- [userActivityType](bebrowserdataimportmanager/useractivitytype-35jes.md): A constant that identifies the launch activity for data import requests.
- [userActivityType](bebrowserdataimportmanager/useractivitytype-8xgjo.md): A constant that identifies the launch activity for data import requests.

### Initializers

- [init(scene:)](bebrowserdataimportmanager/init%28scene_%29.md): Initializes an import manager for a window scene.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data import management

- [BEImportMetadata](beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.
- [BEImportOptions](beimportoptions.md): Options for importing browsing data.

# BEBrowserDataImportManager (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that handles importing browsing data from other browsers.

## Declaration

```objectivec
@interface BEBrowserDataImportManager : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class coordinates the transfer of browsing data by presenting the framework-provided import sheet when a person wants to import data through your app’s UI (see [requestImportForMetadata:completionHandler:](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md)). Call this class’s [requestImportForMetadata:completionHandler:](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md) to stream browsing data from the system, as received through another browser. For more information, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating an import manager

- [init](bebrowserdataimportmanager/init%28%29.md): Initializes an import manager.

### Importing browser data

- [importBrowserDataWithToken:importBlock:](bebrowserdataimportmanager/importbrowserdatawithtoken_importblock_.md): Imports browser data using the given token and processes it the given block.
- [requestImportForMetadata:completionHandler:](bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md): Requests that the system display the sheet to import data from another browser.

### Managing import tokens

- [BEBrowserDataExchangeImportToken](bebrowserdataimportmanager/importtokenuserinfokey-3bqve.md): A key for accessing the data transfer token in the import launch activity’s info dictionary.
- [BEBrowserDataExchangeImportActivity](bebrowserdataimportmanager/useractivitytype-8xgjo.md): A constant that identifies the launch activity for data import requests.

### Instance Methods

- [initWithScene:](bebrowserdataimportmanager/init%28scene_%29.md): Initializes an import manager for a window scene.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Data import management

- [BEImportMetadata](beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.
- [BEImportOptions](beimportoptions.md): Options for importing browsing data.
