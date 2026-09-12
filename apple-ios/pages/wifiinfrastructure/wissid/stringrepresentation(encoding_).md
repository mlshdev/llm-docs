> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wissid/stringrepresentation(encoding:)](https://developer.apple.com/documentation/wifiinfrastructure/wissid/stringrepresentation(encoding:))

# stringRepresentation(encoding:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Converts the SSID’s raw data to a string representation using the specified encoding.

## Declaration

```swift
func stringRepresentation(encoding: String.Encoding = .utf8) -> String?
```

## Parameters

- `encoding`: The text encoding to use for conversion. Defaults to UTF-8.

<a id="return-value"></a>

## Return Value

A string representation of the SSID, or `nil` if the raw data can’t be converted using the specified encoding.

<a id="discussion"></a>

## Discussion

Use this method to obtain a human-readable version of the network name. Because SSIDs don’t have a standardized text encoding, the conversion may fail if the raw data can’t be represented as text in the specified encoding.

> **Warning**

> Per the Wi-Fi standard, the SSID is a value between 1 and 32 bytes long, and not a `String`. No standard encoding is defined, and any byte value may appear, including embedded NULL characters, control characters, and other unprintable values.

## See Also

### Working with SSIDs as a string

- [init(\_:encoding:)](init%28__encoding_%29.md): Creates an SSID from a text string using the specified encoding.
