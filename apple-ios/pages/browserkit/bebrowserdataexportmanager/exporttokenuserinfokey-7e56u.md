> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager/exporttokenuserinfokey-7e56u](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager/exporttokenuserinfokey-7e56u)

# exportTokenUserInfoKey (Swift)

**Framework:** BrowserKit  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A key for accessing the data transfer token in the export launch activity’s info dictionary.

## Declaration

```swift
class let exportTokenUserInfoKey: String
```

<a id="discussion"></a>

## Discussion

Use this key to access the token that validates the transfer of browsing data when the system launches your app to export the data. For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Managing export tokens

- [exportTokenUserInfoKey](exporttokenuserinfokey-1y5l1.md): A key for accessing the data transfer token in the export launch activity’s info dictionary.
- [userActivityType](useractivitytype-4ar5j.md): A constant that identifies the launch activity for data export requests.
- [userActivityType](useractivitytype-g862.md): A constant that identifies the launch activity for data export requests.

# BEBrowserDataExchangeExportToken (Objective-C)

**Framework:** BrowserKit  
**Kind:** Global Variable  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A key for accessing the data transfer token in the export launch activity’s info dictionary.

## Declaration

```objectivec
extern NSString * const BEBrowserDataExchangeExportToken;
```

<a id="discussion"></a>

## Discussion

Use this key to access the token that validates the transfer of browsing data when the system launches your app to export the data. For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Managing export tokens

- [BEBrowserDataExchangeExportActivity](useractivitytype-g862.md): A constant that identifies the launch activity for data export requests.
