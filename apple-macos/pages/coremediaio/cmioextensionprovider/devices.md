> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionprovider/devices](https://developer.apple.com/documentation/coremediaio/cmioextensionprovider/devices)

# devices (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of connected devices.

## Declaration

```swift
var devices: [CMIOExtensionDevice] { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable.

## See Also

### Managing Devices

- [addDevice(\_:)](adddevice%28__%29.md): Adds a device to a provider.
- [removeDevice(\_:)](removedevice%28__%29.md): Removes a device from a provider.

# devices (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An array of connected devices.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSArray<CMIOExtensionDevice *> * devices;
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable.

## See Also

### Managing Devices

- [addDevice:error:](adddevice%28__%29.md): Adds a device to a provider.
- [removeDevice:error:](removedevice%28__%29.md): Removes a device from a provider.
