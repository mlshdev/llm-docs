> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager)

# BEBrowserDataExportManager (Swift)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that handles exporting browsing data to other browsers.

## Declaration

```swift
class BEBrowserDataExportManager
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class coordinates the transfer of browsing data by presenting an *export sheet* when someone exports data through your app’s UI (see [requestExport(for:token:completionHandler:)](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md)). Call this class’s [exportBrowserData:completionHandler:](bebrowserdataexportmanager/exportbrowserdata_completionhandler_.md) to stream browsing data to the system. For more information and details about the export sheet, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating an export manager

- [init(scene:)](bebrowserdataexportmanager/init%28scene_%29.md): Initializes an export manager with your app’s window scene.

### Exporting browser data

- [exportBrowserData(\_:)](bebrowserdataexportmanager/exportbrowserdata%28__%29.md): Exports the given browser data.
- [requestExport(for:token:completionHandler:)](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md): Requests that the system display the browsing-data transfer sheet to export data to another browser.

### Managing export tokens

- [exportTokenUserInfoKey](bebrowserdataexportmanager/exporttokenuserinfokey-1y5l1.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [exportTokenUserInfoKey](bebrowserdataexportmanager/exporttokenuserinfokey-7e56u.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [userActivityType](bebrowserdataexportmanager/useractivitytype-4ar5j.md): A constant that identifies the launch activity for data export requests.
- [userActivityType](bebrowserdataexportmanager/useractivitytype-g862.md): A constant that identifies the launch activity for data export requests.

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

### Data export management

- [BEExportOptions](beexportoptions.md): Options that identify data to export.
- [BEExportMetadata](beexportmetadata.md): Metadata that describes available browser data for export.

# BEBrowserDataExportManager (Objective-C)

**Framework:** BrowserKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A class that handles exporting browsing data to other browsers.

## Declaration

```objectivec
@interface BEBrowserDataExportManager : NSObject
```

## Mentioned In

- [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md)

<a id="overview"></a>

## Overview

This class coordinates the transfer of browsing data by presenting an *export sheet* when someone exports data through your app’s UI (see [requestExportForMetadata:token:completionHandler:](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md)). Call this class’s [exportBrowserData:completionHandler:](bebrowserdataexportmanager/exportbrowserdata_completionhandler_.md) to stream browsing data to the system. For more information and details about the export sheet, see [Transferring browsing data to another browser](transferring-browsing-data-to-another-browser.md).

## Topics

### Creating an export manager

- [initWithScene:](bebrowserdataexportmanager/init%28scene_%29.md): Initializes an export manager with your app’s window scene.

### Exporting browser data

- [requestExportForMetadata:token:completionHandler:](bebrowserdataexportmanager/requestexport%28for_token_completionhandler_%29.md): Requests that the system display the browsing-data transfer sheet to export data to another browser.
- [exportBrowserData:completionHandler:](bebrowserdataexportmanager/exportbrowserdata_completionhandler_.md): Exports the given browser data with the given completion handler.
- [exportFinishedWithCompletionHandler:](bebrowserdataexportmanager/exportfinishedwithcompletionhandler_.md): A callback the system invokes when an export of browsing data completes.

### Managing export tokens

- [BEBrowserDataExchangeExportToken](bebrowserdataexportmanager/exporttokenuserinfokey-7e56u.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [BEBrowserDataExchangeExportActivity](bebrowserdataexportmanager/useractivitytype-g862.md): A constant that identifies the launch activity for data export requests.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Data export management

- [BEExportOptions](beexportoptions.md): Options that identify data to export.
- [BEExportMetadata](beexportmetadata.md): Metadata that describes available browser data for export.
