> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/devicematchingcriteria/init(vendorid:productid:deviceclass:devicesubclass:deviceprotocol:speed:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/devicematchingcriteria/init(vendorid:productid:deviceclass:devicesubclass:deviceprotocol:speed:))

# init(vendorID:productID:deviceClass:deviceSubClass:deviceProtocol:speed:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a new device matching criteria structure with the provided values.

## Declaration

```swift
init(vendorID: Int? = nil, productID: Int? = nil, deviceClass: Int? = nil, deviceSubClass: Int? = nil, deviceProtocol: Int? = nil, speed: Int? = nil)
```

## Parameters

- `vendorID`: The vendor ID.
- `productID`: The product ID.
- `deviceClass`: The device class.
- `deviceSubClass`: The device subclass.
- `deviceProtocol`: The device protocol
- `speed`: The device speed.
