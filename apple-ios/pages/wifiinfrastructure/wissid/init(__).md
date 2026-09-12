> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wissid/init(_:)](https://developer.apple.com/documentation/wifiinfrastructure/wissid/init(_:))

# init(\_:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Creates an SSID from raw binary data.

## Declaration

```swift
init?(_ ssid: Data)
```

## Parameters

- `ssid`: The raw binary data representing the SSID, between 1 and 32 bytes in length.

<a id="return-value"></a>

## Return Value

A new SSID, or `nil`if the data length is invalid.

<a id="discussion"></a>

## Discussion

Use this initializer when working with SSID data received from Wi-Fi enabled accessories. Valid SSIDs conform to Wi-Fi standard length requirements.

## See Also

### Working with raw SSID data

- [data](data.md): The raw binary data of the SSID as transmitted over-the-air.
