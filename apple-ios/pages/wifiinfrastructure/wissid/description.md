> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiinfrastructure/wissid/description

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
