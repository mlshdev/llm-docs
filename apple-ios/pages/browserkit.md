> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit](https://developer.apple.com/documentation/browserkit)

# BrowserKit (Swift)

**Framework:** BrowserKit  
**Kind:** Framework  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Transfer browser data to another browser or check a device’s eligibility to use an alternative browser engine.

<a id="Overview"></a>

## Overview

Use the BrowserKit framework to transfer data such as browsing history, bookmarks, and browser extensions from one browser to another, and to test whether a device is eligible to implement an alternative browser engine.

<a id="Test-eligibility-to-use-alternative-browser-engines"></a>

## Test eligibility to use alternative browser engines

To test if a device supports alternative browser engines, call [isEligible(for:completionHandler:)](browserkit/beavailability/iseligible%28for_completionhandler_%29.md) in a browser app that you develop with WebKit:

```swift
do {
  guard await BEAvailability.isEligible(for: .webBrowser) else { return } 
...  
```

If the device supports alternative browser engines, you can offer the person a download link to an alternative distribution of your app that uses the alternative browser engine. For more information about alternative distribution, see [Distributing your app on an alternative app marketplace](marketplacekit/distributing-your-app-on-an-alternative-marketplace.md). For more information about developing or embedding alternative browser engines, see [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit).

## Topics

### Essentials

- [Transferring browsing data to another browser](browserkit/transferring-browsing-data-to-another-browser.md): Allow people to transfer browsing history, bookmarks, reading lists, and browser extensions to or from your app using a system-provided sheet.
- [BEAvailability](browserkit/beavailability.md): A class that tests whether a device is eligible to run an alternative browser engine.

### Data export management

- [BEBrowserDataExportManager](browserkit/bebrowserdataexportmanager.md): A class that handles exporting browsing data to other browsers.
- [BEExportOptions](browserkit/beexportoptions.md): Options that identify data to export.
- [BEExportMetadata](browserkit/beexportmetadata.md): Metadata that describes available browser data for export.

### Data import management

- [BEBrowserDataImportManager](browserkit/bebrowserdataimportmanager.md): A class that handles importing browsing data from other browsers.
- [BEImportMetadata](browserkit/beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.
- [BEImportOptions](browserkit/beimportoptions.md): Options for importing browsing data.

### Browser data

- [BEBrowserDataHistoryVisit](browserkit/bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](browserkit/bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](browserkit/bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](browserkit/bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](browserkit/bebrowserdata.md): A representation of browsing data from a source browser app.

### Errors

- [BEBrowserDataExchangeError](browserkit/bebrowserdataexchangeerror-swift.struct.md): An error that occurs during browser data import or export operations.
- [BEBrowserDataExchangeErrorDomain](browserkit/bebrowserdataexchangeerrordomain.md): A constant that identifies the error domain for browser data exchange errors.

### Classes

- [BEBrowserContentFilter](browserkit/bebrowsercontentfilter.md)

# BrowserKit (Objective-C)

**Framework:** BrowserKit  
**Kind:** Framework  
**Availability:** iOS 18.4+ · iPadOS 18.4+

Transfer browser data to another browser or check a device’s eligibility to use an alternative browser engine.

<a id="Overview"></a>

## Overview

Use the BrowserKit framework to transfer data such as browsing history, bookmarks, and browser extensions from one browser to another, and to test whether a device is eligible to implement an alternative browser engine.

<a id="Test-eligibility-to-use-alternative-browser-engines"></a>

## Test eligibility to use alternative browser engines

To test if a device supports alternative browser engines, call [isEligibleForContext:completionHandler:](browserkit/beavailability/iseligible%28for_completionhandler_%29.md) in a browser app that you develop with WebKit:

```swift
do {
  guard await BEAvailability.isEligible(for: .webBrowser) else { return } 
...  
```

If the device supports alternative browser engines, you can offer the person a download link to an alternative distribution of your app that uses the alternative browser engine. For more information about alternative distribution, see [Distributing your app on an alternative app marketplace](marketplacekit/distributing-your-app-on-an-alternative-marketplace.md). For more information about developing or embedding alternative browser engines, see [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit).

## Topics

### Essentials

- [Transferring browsing data to another browser](browserkit/transferring-browsing-data-to-another-browser.md): Allow people to transfer browsing history, bookmarks, reading lists, and browser extensions to or from your app using a system-provided sheet.
- [BEAvailability](browserkit/beavailability.md): A class that tests whether a device is eligible to run an alternative browser engine.

### Data export management

- [BEBrowserDataExportManager](browserkit/bebrowserdataexportmanager.md): A class that handles exporting browsing data to other browsers.
- [BEExportOptions](browserkit/beexportoptions.md): Options that identify data to export.
- [BEExportMetadata](browserkit/beexportmetadata.md): Metadata that describes available browser data for export.

### Data import management

- [BEBrowserDataImportManager](browserkit/bebrowserdataimportmanager.md): A class that handles importing browsing data from other browsers.
- [BEImportMetadata](browserkit/beimportmetadata.md): Metadata that describes import capabilities for browser data transfers.
- [BEImportOptions](browserkit/beimportoptions.md): Options for importing browsing data.

### Browser data

- [BEBrowserDataHistoryVisit](browserkit/bebrowserdatahistoryvisit.md): A class that transfers page visit history between browsers.
- [BEBrowserDataBookmark](browserkit/bebrowserdatabookmark.md): A class that transfers bookmark information between browsers.
- [BEBrowserDataReadingListItem](browserkit/bebrowserdatareadinglistitem.md): A class that transfers reading list data between browsers.
- [BEBrowserDataExtension](browserkit/bebrowserdataextension.md): A class that transfers browser extension information between browsers.
- [BEBrowserData](browserkit/bebrowserdata.md): A representation of browsing data from a source browser app.

### Errors

- [BEBrowserDataExchangeErrorDomain](browserkit/bebrowserdataexchangeerrordomain.md): A constant that identifies the error domain for browser data exchange errors.

### Classes

- [BEBrowserContentFilter](browserkit/bebrowsercontentfilter.md)
