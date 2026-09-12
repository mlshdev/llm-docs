> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiinfrastructure/wimacaddress/init(_:)-9xhxx](https://developer.apple.com/documentation/wifiinfrastructure/wimacaddress/init(_:)-9xhxx)

# init(\_:)

**Framework:** Wi-Fi Infrastructure  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Create a MAC Address from the provided octet components.

## Declaration

```swift
init?(_ macAddressComponents: [UInt8])
```

## Parameters

- `macAddressComponents`: The native value for the MAC Address in octet components, as defined in the standard.

<a id="return-value"></a>

## Return Value

The mac address, or `nil` if the input data was invalid and it could not be constructed.

## See Also

### Working with MAC Addresses as octet components

- [components](components.md): The MAC Address as a list of octets.
