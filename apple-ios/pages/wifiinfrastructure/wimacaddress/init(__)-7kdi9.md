> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/init(_:)-7kdi9](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/init(_:)-7kdi9)

# init(\_:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a MAC Address from the provided case-insensitive string, of the format `"XX:XX:XX:XX:XX:XX"`.

## Declaration

```swift
init?(_ macAddress: String)
```

## Parameters

- `macAddress`: The BSSID as a String.

<a id="return-value"></a>

## Return Value

The mac address, or `nil` if the input data was invalid and it could not be constructed.

## See Also

### Working with MAC Addresses as strings

- [stringRepresentation](stringrepresentation.md): The MAC Address as an uppercase string, in the format `"XX:XX:XX:XX:XX:XX"`.
