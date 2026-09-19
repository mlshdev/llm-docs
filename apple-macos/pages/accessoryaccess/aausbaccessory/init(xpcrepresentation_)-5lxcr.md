> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/init(xpcrepresentation:)-5lxcr

# init(XPCRepresentation:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a USB accessory from an XPC representation.

## Declaration

```swift
init?(XPCRepresentation xpcRepresentation: xpc_object_t)
```

## Parameters

- `xpcRepresentation`: The XPC representation of an `AAUSBAccessory` object received from the XPC.

<a id="return-value"></a>

## Return Value

An `AAUSBAccessory` object if the framework decoded the provided `xpc_object_t`, or `nil` if it’s invalid.

## See Also

### Creating USB accessories

- [init(xpcRepresentation:)](init%28xpcrepresentation_%29-6dmbu.md): Creates a USB accessory from an XPC representation.
- [init(coder:)](init%28coder_%29.md): Creates a new USB accessory with the provided coder.
