> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wissid/data](https://developer.apple.com/documentation/wifiinfrastructure/wissid/data)

# data

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

The raw binary data of the SSID as transmitted over-the-air.

## Declaration

```swift
let data: Data
```

<a id="discussion"></a>

## Discussion

This property contains the exact bytes that represent the SSID according to the Wi-Fi standard. The data ranges from 1 to 32 bytes in length and may contain any byte values, including embedded null characters, control characters, and non-printable binary data.

> **Important**

> Don’t assume this data represents UTF-8 encoded text. Use [stringRepresentation(encoding:)](stringrepresentation%28encoding_%29.md) to safely convert the data to a string format.

## See Also

### Working with raw SSID data

- [init(\_:)](init%28__%29.md): Creates an SSID from raw binary data.
