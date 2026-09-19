> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/devicedescriptordata

# deviceDescriptorData (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the device descriptor data.

## Declaration

```swift
var deviceDescriptorData: Data { get }
```

<a id="Discussion"></a>

## Discussion

The underlying bytes can be cast to [IOUSBDeviceDescriptor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor).

## See Also

### Getting information about a USB accessory

- [configurationDescriptorData](configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [registryID](registryid.md): Returns the IORegistry ID for the USB accessory.

# deviceDescriptorData (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Returns the device descriptor data.

## Declaration

```objectivec
@property (readonly) NSData * deviceDescriptorData;
```

<a id="Discussion"></a>

## Discussion

The underlying bytes can be cast to [IOUSBDeviceDescriptor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor).

## See Also

### Getting information about a USB accessory

- [configurationDescriptorData](configurationdescriptordata.md): Returns the currently selected configuration descriptor data.
- [registryID](registryid.md): Returns the IORegistry ID for the USB accessory.
