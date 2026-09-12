> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beimportoptions/importfromfiles](https://developer.apple.com/documentation/browserkit/beimportoptions/importfromfiles)

# importFromFiles (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A Boolean value that indicates whether to import browser data from files.

## Declaration

```swift
var importFromFiles: Bool { get }
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

If the value of this property is `false`, the system retrieves browsing data from the other browser and provides the data to your app by invoking your handler for the [BEBrowserDataImportManager](../bebrowserdataimportmanager.md) class’s [userActivityType](../bebrowserdataimportmanager/useractivitytype-35jes.md).

If the value of this property is `true`, the system cancels the browser-to-browser data transfer, and your app imports the browsing data from disk according to your app’s unique workflow.

# importFromFiles (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A Boolean value that indicates whether to import browser data from files.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL importFromFiles;
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

If the value of this property is `false`, the system retrieves browsing data from the other browser and provides the data to your app by invoking your handler for the [BEBrowserDataImportManager](../bebrowserdataimportmanager.md) class’s [userActivityType](../bebrowserdataimportmanager/useractivitytype-35jes.md).

If the value of this property is `true`, the system cancels the browser-to-browser data transfer, and your app imports the browsing data from disk according to your app’s unique workflow.
