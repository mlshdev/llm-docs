> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzusbpassthroughdeviceconfiguration/init(device:)

# init(device:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

## Declaration

```swift
init(device: AAUSBAccessory)
```

## Parameters

- `device`: The AccessoryAccess framework object to be captured by the virtual machine.

<a id="return-value"></a>

## Return Value

An initialized VZUSBPassthroughDeviceConfiguration.

<a id="discussion"></a>

## Discussion

Initialize a passthrough USB device configuration.

Initialize a passthrough USB device configuration from an AccessoryAccess framework device.

# initWithDevice: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(AAUSBAccessory *) device;
```

## Parameters

- `device`: The AccessoryAccess framework object to be captured by the virtual machine.

<a id="return-value"></a>

## Return Value

An initialized VZUSBPassthroughDeviceConfiguration.

<a id="discussion"></a>

## Discussion

Initialize a passthrough USB device configuration.

Initialize a passthrough USB device configuration from an AccessoryAccess framework device.
