> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondeviceproperties/setpropertystate(_:forproperty:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondeviceproperties/setpropertystate(_:forproperty:))

# setPropertyState(\_:forProperty:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the value of a device property.

## Declaration

```swift
func setPropertyState(_ propertyState: CMIOExtensionPropertyState<AnyObject>?, forProperty property: CMIOExtensionProperty)
```

## Parameters

- `propertyState`: The updated property state.
- `property`: The property to update.

<a id="Discussion"></a>

## Discussion

Setting a `nil` property state value doesn’t remove the property.

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-96gm.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-eru0.md): A Boolean value that indicates whether the device is in a suspended state.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.

# setPropertyState:forProperty: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Sets the value of a device property.

## Declaration

```objectivec
- (void) setPropertyState:(CMIOExtensionPropertyState *) propertyState forProperty:(CMIOExtensionProperty) property;
```

## Parameters

- `propertyState`: The updated property state.
- `property`: The property to update.

<a id="Discussion"></a>

## Discussion

Setting a `nil` property state value doesn’t remove the property.

## See Also

### Configuring Device Properties

- [model](model.md): A device model string.
- [linkedCoreAudioDeviceUID](linkedcoreaudiodeviceuid.md): A universal identifier of the audio device linked to this device.
- [transportType](transporttype-25qzh.md): The transport type of the device, such as USB or HDMI.
- [suspended](suspended-2ja7h.md): A Boolean value that indicates whether the device is in a suspended state.
- [propertiesDictionary](propertiesdictionary.md): A dictionary of properties for a device.
