> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/productid

# productID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The product ID for the device.

## Declaration

```swift
var productID: UInt32?
```

<a id="discussion"></a>

## Discussion

The product ID combines with the [vendorID](vendorid.md) to specify the exact product. Without knowing the vendor, the product ID is meaningless. Look for vendor specific documentation for more details on the assigned product IDs for a vendor’s products.
