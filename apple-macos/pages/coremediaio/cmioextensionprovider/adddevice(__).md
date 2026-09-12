> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/adddevice(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/adddevice(_:))

# addDevice(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Adds a device to a provider.

## Declaration

```swift
func addDevice(_ device: CMIOExtensionDevice) throws
```

## Parameters

- `device`: A device to add to a provider.

## See Also

### Managing Devices

- [devices](devices.md): An array of connected devices.
- [removeDevice(\_:)](removedevice%28__%29.md): Removes a device from a provider.

# addDevice:error: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Adds a device to a provider.

## Declaration

```objectivec
- (BOOL) addDevice:(CMIOExtensionDevice *) device error:(NSError **) outError;
```

## Parameters

- `device`: A device to add to a provider.
- `outError`: An error pointer. If an error occurs, this method sets the pointer to an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the failure; otherwise it sets the pointer to `nil`.

<a id="return-value"></a>

## Return Value

`true` if the provider successfully adds the device; otherwise, `false`.

## See Also

### Managing Devices

- [devices](devices.md): An array of connected devices.
- [removeDevice:error:](removedevice%28__%29.md): Removes a device from a provider.
