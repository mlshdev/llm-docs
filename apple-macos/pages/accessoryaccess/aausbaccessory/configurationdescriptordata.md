> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/configurationdescriptordata

# configurationDescriptorData (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the currently selected configuration descriptor data.

## Declaration

```swift
var configurationDescriptorData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The underlying bytes can be cast to [IOUSBConfigurationDescriptor](../../kernel/iousbconfigurationdescriptor.md). If the USB accessory isn’t configured, this returns `nil`.

## See Also

### Getting information about a USB accessory

- [deviceDescriptorData](devicedescriptordata.md): Returns the device descriptor data.
- [registryID](registryid.md): Returns the IORegistry ID for the USB accessory.

# configurationDescriptorData (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the currently selected configuration descriptor data.

## Declaration

```objectivec
@property (readonly, nullable) NSData * configurationDescriptorData;
```

<a id="Discussion"></a>

## Discussion

The underlying bytes can be cast to [IOUSBConfigurationDescriptor](../../kernel/iousbconfigurationdescriptor.md). If the USB accessory isn’t configured, this returns `nil`.

## See Also

### Getting information about a USB accessory

- [deviceDescriptorData](devicedescriptordata.md): Returns the device descriptor data.
- [registryID](registryid.md): Returns the IORegistry ID for the USB accessory.
