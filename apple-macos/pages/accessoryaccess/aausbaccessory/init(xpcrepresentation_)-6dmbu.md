> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessory/init(xpcrepresentation:)-6dmbu](https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/init(xpcrepresentation:)-6dmbu)

# init(xpcRepresentation:) (Swift)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a USB accessory from an XPC representation.

## Declaration

```swift
init?(xpcRepresentation: xpc_object_t)
```

## Parameters

- `xpcRepresentation`: The XPC representation of an `AAUSBAccessory` object received from the XPC.

<a id="return-value"></a>

## Return Value

An `AAUSBAccessory` object if the framework decoded the provided `xpc_object_t`, or `nil` if it’s invalid.

## See Also

### Creating USB accessories

- [init(XPCRepresentation:)](init%28xpcrepresentation_%29-5lxcr.md): Creates a USB accessory from an XPC representation.
- [init(coder:)](init%28coder_%29.md): Creates a new USB accessory with the provided coder.

# initWithXPCRepresentation: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a USB accessory from an XPC representation.

## Declaration

```objectivec
- (instancetype) initWithXPCRepresentation:(xpc_object_t) xpcRepresentation;
```

## Parameters

- `xpcRepresentation`: The XPC representation of an `AAUSBAccessory` object received from the XPC.

<a id="return-value"></a>

## Return Value

An `AAUSBAccessory` object if the framework decoded the provided `xpc_object_t`, or `nil` if it’s invalid.
