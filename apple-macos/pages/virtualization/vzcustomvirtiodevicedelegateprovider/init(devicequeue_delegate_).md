> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegateprovider/init(devicequeue:delegate:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegateprovider/init(devicequeue:delegate:))

# init(deviceQueue:delegate:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a custom Virtio device delegate provider.

## Declaration

```swift
init(deviceQueue: dispatch_queue_t, delegate: any VZCustomVirtioDeviceConfigurationDelegate)
```

## Parameters

- `deviceQueue`: The dispatch queue on which the framework synchronizes all device operations.
- `delegate`: The delegate object that implements the device.

# initWithDeviceQueue:delegate: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a custom Virtio device delegate provider.

## Declaration

```objectivec
- (instancetype) initWithDeviceQueue:(dispatch_queue_t) deviceQueue delegate:(id<VZCustomVirtioDeviceConfigurationDelegate>) delegate;
```

## Parameters

- `deviceQueue`: The dispatch queue on which the framework synchronizes all device operations.
- `delegate`: The delegate object that implements the device.
