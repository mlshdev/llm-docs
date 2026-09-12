> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/update(_:completionhandler:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/update(_:completionhandler:))

# update(\_:completionHandler:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Updates the device’s device-specific configuration.

## Declaration

```swift
func update(_ newConfiguration: VZVirtioDeviceSpecificConfiguration, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func update(_ newConfiguration: VZVirtioDeviceSpecificConfiguration) async throws
```

## Parameters

- `newConfiguration`: The [VZVirtioDeviceSpecificConfiguration](../vzvirtiodevicespecificconfiguration.md) object that contains the new configuration data.
- `completionHandler`: A block the framework calls after the device’s configuration updates successfully, or on error. The error parameter the framework passes to the block is `nil` if the configuration update was successful.

<a id="discussion"></a>

## Discussion

The size of the underlying data for the new configuration must be the same as the previous configuration. The framework raises an exception if this condition isn’t met.

# updateDeviceSpecificConfiguration:completionHandler: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Updates the device’s device-specific configuration.

## Declaration

```objectivec
- (void) updateDeviceSpecificConfiguration:(VZVirtioDeviceSpecificConfiguration *) newConfiguration completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `newConfiguration`: The [VZVirtioDeviceSpecificConfiguration](../vzvirtiodevicespecificconfiguration.md) object that contains the new configuration data.
- `completionHandler`: A block the framework calls after the device’s configuration updates successfully, or on error. The error parameter the framework passes to the block is `nil` if the configuration update was successful.

<a id="discussion"></a>

## Discussion

The size of the underlying data for the new configuration must be the same as the previous configuration. The framework raises an exception if this condition isn’t met.
