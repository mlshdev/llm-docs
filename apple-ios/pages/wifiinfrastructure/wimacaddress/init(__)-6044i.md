> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/init(_:)-6044i](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/init(_:)-6044i)

# init(\_:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Create a MAC Address from the provided data.

## Declaration

```swift
init?(_ macAddressData: Data)
```

## Parameters

- `macAddressData`: The native value for the MAC Address as data.

<a id="return-value"></a>

## Return Value

The mac address, or `nil` if the input data was invalid and it could not be constructed.

## See Also

### Working with MAC Addresses as data

- [data](data.md): The raw data value of the MAC Address.
