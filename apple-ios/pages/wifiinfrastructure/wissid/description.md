> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wissid/description](https://developer.apple.com/documentation/wifiinfrastructure/wissid/description)

# description

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

This property provides a readable representation suitable for logging and debugging.

## Declaration

```swift
var description: String { get }
```

<a id="discussion"></a>

## Discussion

When the SSID can be converted to UTF-8 text, it displays the text in quotes. Otherwise, it shows the raw bytes as hexadecimal values.
