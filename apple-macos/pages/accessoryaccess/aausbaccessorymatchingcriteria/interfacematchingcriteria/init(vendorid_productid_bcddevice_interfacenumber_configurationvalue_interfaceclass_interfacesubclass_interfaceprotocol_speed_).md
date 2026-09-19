> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingcriteria/init(vendorid:productid:bcddevice:interfacenumber:configurationvalue:interfaceclass:interfacesubclass:interfaceprotocol:speed:)

# init(vendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubClass:interfaceProtocol:speed:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a new matching criteria structure with the provided values.

## Declaration

```swift
init(vendorID: Int? = nil, productID: Int? = nil, bcdDevice: Int? = nil, interfaceNumber: Int? = nil, configurationValue: Int? = nil, interfaceClass: Int? = nil, interfaceSubClass: Int? = nil, interfaceProtocol: Int? = nil, speed: Int? = nil)
```
