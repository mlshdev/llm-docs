> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager/importtokenuserinfokey-3zzub

# importTokenUserInfoKey

**Framework:** BrowserKit  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A key for accessing the data transfer token in the import launch activity’s info dictionary.

## Declaration

```swift
static var importTokenUserInfoKey: String { get }
```

<a id="discussion"></a>

## Discussion

Use this key to access the token that validates the transfer of browsing data when the system launches your app to import the data. For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Managing import tokens

- [importTokenUserInfoKey](importtokenuserinfokey-3bqve.md): A key for accessing the data transfer token in the import launch activity’s info dictionary.
- [userActivityType](useractivitytype-35jes.md): A constant that identifies the launch activity for data import requests.
- [userActivityType](useractivitytype-8xgjo.md): A constant that identifies the launch activity for data import requests.
