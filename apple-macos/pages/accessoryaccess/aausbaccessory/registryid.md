> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/registryid

# registryID (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the IORegistry ID for the USB accessory.

## Declaration

```swift
var registryID: UInt64 { get }
```

## See Also

### Getting information about a USB accessory

- [configurationDescriptorData](configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [deviceDescriptorData](devicedescriptordata.md): Returns the device descriptor data.

# registryID (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the IORegistry ID for the USB accessory.

## Declaration

```objectivec
@property (readonly) uint64_t registryID;
```

## See Also

### Getting information about a USB accessory

- [configurationDescriptorData](configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [deviceDescriptorData](devicedescriptordata.md): Returns the device descriptor data.
