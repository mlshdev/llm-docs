> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.struct/userenteredformvalues](https://developer.apple.com/documentation/wifiinfrastructure/winetworksharingprovider/network/captiveportallogin-swift.struct/userenteredformvalues)

# userEnteredFormValues

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The user-entered form values to complete captive portal login.

## Declaration

```swift
let userEnteredFormValues: [String : String]
```

<a id="discussion"></a>

## Discussion

The dictionary content depends on the available data:

- `[:]` when no data is available, due to empty forms, no entries, expired data, or removal by the person.
- A set of key-value pairs representing the data that the person entered.

When present, the key-value pairs contain:

- **Key**: A [CSS selector](https://www.w3.org/TR/selectors-4/) that locates the HTML element within the document, using `querySelector()` or `querySelectorAll()` functions.
- **Value**: The corresponding HTML element value.
