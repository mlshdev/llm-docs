> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager/useractivitytype-4ar5j](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager/useractivitytype-4ar5j)

# userActivityType

**Framework:** BrowserKit  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A constant that identifies the launch activity for data export requests.

## Declaration

```swift
static var userActivityType: String { get }
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

The system launches your browser app with this activity when someone initiates a data import request ([requestImport(for:completionHandler:)](../bebrowserdataimportmanager/requestimport%28for_completionhandler_%29.md)) from within another browser, and chooses your app in the sheet as the browser to provide the exported data.

For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Managing export tokens

- [exportTokenUserInfoKey](exporttokenuserinfokey-1y5l1.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [exportTokenUserInfoKey](exporttokenuserinfokey-7e56u.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [userActivityType](useractivitytype-g862.md): A constant that identifies the launch activity for data export requests.
