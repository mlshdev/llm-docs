> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/removedevice(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/removedevice(_:))

# removeDevice(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Removes a device from a provider.

## Declaration

```swift
func removeDevice(_ device: CMIOExtensionDevice) throws
```

## Parameters

- `device`: A device to remove from a provider.

## See Also

### Managing Devices

- [devices](devices.md): An array of connected devices.
- [addDevice(\_:)](adddevice%28__%29.md): Adds a device to a provider.

# removeDevice:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Removes a device from a provider.

## Declaration

```objectivec
- (BOOL) removeDevice:(CMIOExtensionDevice *) device error:(NSError **) outError;
```

## Parameters

- `device`: A device to remove from a provider.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

`true` if the provider successfully removes the device; otherwise, `false`.

## See Also

### Managing Devices

- [devices](devices.md): An array of connected devices.
- [addDevice:error:](adddevice%28__%29.md): Adds a device to a provider.
