> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wissid/init(_:encoding:)](https://developer.apple.com/documentation/wifiinfrastructure/wissid/init(_:encoding:))

# init(\_:encoding:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Creates an SSID from a text string using the specified encoding.

## Declaration

```swift
init?(_ ssid: String, encoding: String.Encoding = .utf8)
```

## Parameters

- `ssid`: The network name as a string.
- `encoding`: The text encoding to use for conversion. Defaults to UTF-8.

<a id="return-value"></a>

## Return Value

A new SSID, or `nil` if the string can’t be encoded or results in invalid data length.

<a id="discussion"></a>

## Discussion

Use this initializer to create SSIDs from human-readable network names. The method converts the string to binary data using the specified encoding before validating against length requirements.

## See Also

### Working with SSIDs as a string

- [stringRepresentation(encoding:)](stringrepresentation%28encoding_%29.md): Converts the SSID’s raw data to a string representation using the specified encoding.
