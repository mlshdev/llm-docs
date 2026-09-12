> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/finding-multiple-gpus-on-an-intel-based-mac](https://developer.apple.com/documentation/metal/finding-multiple-gpus-on-an-intel-based-mac)

# Finding multiple GPUs on an Intel-based Mac (Swift)

**Framework:** Metal  
**Kind:** Article

Locate, identify, and choose suitable GPUs for your app.

<a id="overview"></a>

## Overview

Your app can use multiple GPUs on an Intel-based Mac, including any built-in and external GPUs. Start by getting a list of all the system’s available GPUs, and then submit workloads to those appropriate for your app’s tasks.

> **Note**

>  Mac computers with Apple silicon have a single, high-performance, and energy-efficient GPU.

<a id="Get-a-list-of-GPU-devices"></a>

### Get a list of GPU devices

Your app can get an array of [MTLDevice](mtldevice.md) instances, each of which represents an available GPU, by calling the [MTLCopyAllDevices()](mtlcopyalldevices%28%29.md) function.

**Swift**

```swift
let devices = MTLCopyAllDevices()
```

**Objective-C**

```objective-c
NSArray<id<MTLDevice>> *devices = MTLCopyAllDevices();
```

However, that function provides a list of GPUs that are available at that moment in time. To get the current list and register for device update notifications, provide a handler to Metal by calling the [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md) function.

**Swift**

```swift
let (devices, observer) = MTLCopyAllDevicesWithObserver() { (device, notification) in
    self.device(device, issued: notification)
}
```

**Objective-C**

```objective-c
id<NSObject> deviceObserver = nil;
NSArray<id<MTLDevice>> *devices = nil;

devices = MTLCopyAllDevicesWithObserver(&deviceObserver,
                                        ^(id<MTLDevice> device,
                                          MTLDeviceNotificationName name) {
    [self device:device hasNotification:name];
});
```

Metal calls your handler to tell your app when the system adds or removes an [MTLDevice](mtldevice.md) from the system.

> **Note**

>  Metal calls your app’s handler when a device may change its state in the future, such as when a person makes a safe disconnect request. For more information, see [Handling external GPU additions and removals](handling-external-gpu-additions-and-removals.md).

Your app can deregister its observer when it no longer needs GPU device updates from the system by calling the [MTLRemoveDeviceObserver(\_:)](mtlremovedeviceobserver%28__%29.md) function.

**Swift**

```swift
MTLRemoveDeviceObserver(observer)
```

**Objective-C**

```objective-c
MTLRemoveDeviceObserver(deviceObserver);
```

<a id="Identify-each-GPU-by-type"></a>

### Identify each GPU by type

Each GPU on a Mac computer’s system can be one of three types: integrated, discrete, or external. You can identify each [MTLDevice](mtldevice.md) instance’s type by inspecting its [isLowPower](mtldevice/islowpower.md) and [isRemovable](mtldevice/isremovable.md) properties.

| GPU Type | [isLowPower](mtldevice/islowpower.md) | [isRemovable](mtldevice/isremovable.md) |
| --- | --- | --- |
| Integrated | [true](https://developer.apple.com/documentation/swift/true) | [false](https://developer.apple.com/documentation/swift/false) |
| Discrete | [false](https://developer.apple.com/documentation/swift/false) | [false](https://developer.apple.com/documentation/swift/false) |
| External | [false](https://developer.apple.com/documentation/swift/false) | [true](https://developer.apple.com/documentation/swift/true) |

For example, you can use these properties to build a list of devices for each GPU type.

**Swift**

```swift
var externalGPUs = [MTLDevice]()
var discreteGPUs = [MTLDevice]()
var integratedGPUs = [MTLDevice]()

for device in devices {
    if device.isRemovable { externalGPUs.append(device) } else
    if device.isLowPower { integratedGPUs.append(device) } else {
        discreteGPUs.append(device)
    }
}
```

**Objective-C**

```objective-c
NSMutableArray<id<MTLDevice>> *externalGPUs = [[NSMutableArray alloc] init];
NSMutableArray<id<MTLDevice>> *discreteGPUs = [[NSMutableArray alloc] init];
NSMutableArray<id<MTLDevice>> *integratedGPUs = [[NSMutableArray alloc] init];

for (id<MTLDevice> device in devices) {
    if (device.isRemovable) { [externalGPUs addObject:device]; }
    else if (device.isLowPower) { [integratedGPUs addObject:device]; }
    else { [discreteGPUs addObject:device]; }
}
```

Some external or discrete GPUs can also be *headless*, which means they aren’t connected to a display. Your app can identify whether a GPU is headless by checking a device instance’s [isHeadless](mtldevice/isheadless.md) property.

**Swift**

```swift
if device.isHeadless {
    // This GPU device isn't connected to any displays.
    ...
}
```

**Objective-C**

```objective-c
if (device.isHeadless) {
    // This GPU device isn't connected to any displays.
    ...
}
```

<a id="Select-the-GPUs-suitable-for-your-workloads"></a>

### Select the GPUs suitable for your workloads

Each GPU type has its advantages for certain tasks or workloads that you can consider for a system with multiple GPUs.

| GPU type | Power consumption | Memory bandwidth |
| --- | --- | --- |
| Integrated | Low | High |
| Discrete | Medium | High |
| External | High | Low |

In general, start with an integrated GPU (if the system has one) to conserve power and extend the device’s battery life. If your app needs additional graphics or compute processing, consider moving some workloads to a discrete GPU, if the system has one.

> **Tip**

>  Your app could let a person choose which GPU your app uses for its workloads, especially if they attach an external GPU to their system.

External GPUs typically have significant processing power but lower bandwidth compared to internal GPUs, which makes them a good choice for tasks that don’t require much memory bandwidth for each frame, including the following:

- Rendering high-complexity graphics scenes
- Rendering high-resolution graphics content
- Processing compute workloads in tandem with rendering graphics
- Processing compute workloads that use a high arithmetic-logic unit (ALU) complexity

For more information about GPU memory bandwidth, see [Adjusting for GPU memory bandwidth tradeoffs](adjusting-for-gpu-memory-bandwidth-tradeoffs.md).

> **Note**

>  A headless GPU is more suitable for compute processing than rendering graphics for a display because the GPU isn’t connected to a display.

## See Also

### Locating GPUs

- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices()](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver(handler:)](mtlcopyalldeviceswithobserver%28handler_%29.md): Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver(\_:)](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice(\_:)](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.

# Finding multiple GPUs on an Intel-based Mac (Objective-C)

**Framework:** Metal  
**Kind:** Article

Locate, identify, and choose suitable GPUs for your app.

<a id="overview"></a>

## Overview

Your app can use multiple GPUs on an Intel-based Mac, including any built-in and external GPUs. Start by getting a list of all the system’s available GPUs, and then submit workloads to those appropriate for your app’s tasks.

> **Note**

>  Mac computers with Apple silicon have a single, high-performance, and energy-efficient GPU.

<a id="Get-a-list-of-GPU-devices"></a>

### Get a list of GPU devices

Your app can get an array of [MTLDevice](mtldevice.md) instances, each of which represents an available GPU, by calling the [MTLCopyAllDevices](mtlcopyalldevices%28%29.md) function.

**Swift**

```swift
let devices = MTLCopyAllDevices()
```

**Objective-C**

```objective-c
NSArray<id<MTLDevice>> *devices = MTLCopyAllDevices();
```

However, that function provides a list of GPUs that are available at that moment in time. To get the current list and register for device update notifications, provide a handler to Metal by calling the [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md) function.

**Swift**

```swift
let (devices, observer) = MTLCopyAllDevicesWithObserver() { (device, notification) in
    self.device(device, issued: notification)
}
```

**Objective-C**

```objective-c
id<NSObject> deviceObserver = nil;
NSArray<id<MTLDevice>> *devices = nil;

devices = MTLCopyAllDevicesWithObserver(&deviceObserver,
                                        ^(id<MTLDevice> device,
                                          MTLDeviceNotificationName name) {
    [self device:device hasNotification:name];
});
```

Metal calls your handler to tell your app when the system adds or removes an [MTLDevice](mtldevice.md) from the system.

> **Note**

>  Metal calls your app’s handler when a device may change its state in the future, such as when a person makes a safe disconnect request. For more information, see [Handling external GPU additions and removals](handling-external-gpu-additions-and-removals.md).

Your app can deregister its observer when it no longer needs GPU device updates from the system by calling the [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md) function.

**Swift**

```swift
MTLRemoveDeviceObserver(observer)
```

**Objective-C**

```objective-c
MTLRemoveDeviceObserver(deviceObserver);
```

<a id="Identify-each-GPU-by-type"></a>

### Identify each GPU by type

Each GPU on a Mac computer’s system can be one of three types: integrated, discrete, or external. You can identify each [MTLDevice](mtldevice.md) instance’s type by inspecting its [lowPower](mtldevice/islowpower.md) and [removable](mtldevice/isremovable.md) properties.

| GPU Type | [lowPower](mtldevice/islowpower.md) | [removable](mtldevice/isremovable.md) |
| --- | --- | --- |
| Integrated | [true](https://developer.apple.com/documentation/swift/true) | [false](https://developer.apple.com/documentation/swift/false) |
| Discrete | [false](https://developer.apple.com/documentation/swift/false) | [false](https://developer.apple.com/documentation/swift/false) |
| External | [false](https://developer.apple.com/documentation/swift/false) | [true](https://developer.apple.com/documentation/swift/true) |

For example, you can use these properties to build a list of devices for each GPU type.

**Swift**

```swift
var externalGPUs = [MTLDevice]()
var discreteGPUs = [MTLDevice]()
var integratedGPUs = [MTLDevice]()

for device in devices {
    if device.isRemovable { externalGPUs.append(device) } else
    if device.isLowPower { integratedGPUs.append(device) } else {
        discreteGPUs.append(device)
    }
}
```

**Objective-C**

```objective-c
NSMutableArray<id<MTLDevice>> *externalGPUs = [[NSMutableArray alloc] init];
NSMutableArray<id<MTLDevice>> *discreteGPUs = [[NSMutableArray alloc] init];
NSMutableArray<id<MTLDevice>> *integratedGPUs = [[NSMutableArray alloc] init];

for (id<MTLDevice> device in devices) {
    if (device.isRemovable) { [externalGPUs addObject:device]; }
    else if (device.isLowPower) { [integratedGPUs addObject:device]; }
    else { [discreteGPUs addObject:device]; }
}
```

Some external or discrete GPUs can also be *headless*, which means they aren’t connected to a display. Your app can identify whether a GPU is headless by checking a device instance’s [headless](mtldevice/isheadless.md) property.

**Swift**

```swift
if device.isHeadless {
    // This GPU device isn't connected to any displays.
    ...
}
```

**Objective-C**

```objective-c
if (device.isHeadless) {
    // This GPU device isn't connected to any displays.
    ...
}
```

<a id="Select-the-GPUs-suitable-for-your-workloads"></a>

### Select the GPUs suitable for your workloads

Each GPU type has its advantages for certain tasks or workloads that you can consider for a system with multiple GPUs.

| GPU type | Power consumption | Memory bandwidth |
| --- | --- | --- |
| Integrated | Low | High |
| Discrete | Medium | High |
| External | High | Low |

In general, start with an integrated GPU (if the system has one) to conserve power and extend the device’s battery life. If your app needs additional graphics or compute processing, consider moving some workloads to a discrete GPU, if the system has one.

> **Tip**

>  Your app could let a person choose which GPU your app uses for its workloads, especially if they attach an external GPU to their system.

External GPUs typically have significant processing power but lower bandwidth compared to internal GPUs, which makes them a good choice for tasks that don’t require much memory bandwidth for each frame, including the following:

- Rendering high-complexity graphics scenes
- Rendering high-resolution graphics content
- Processing compute workloads in tandem with rendering graphics
- Processing compute workloads that use a high arithmetic-logic unit (ALU) complexity

For more information about GPU memory bandwidth, see [Adjusting for GPU memory bandwidth tradeoffs](adjusting-for-gpu-memory-bandwidth-tradeoffs.md).

> **Note**

>  A headless GPU is more suitable for compute processing than rendering graphics for a display because the GPU isn’t connected to a display.

## See Also

### Locating GPUs

- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLCopyAllDevicesWithObserver](mtlcopyalldeviceswithobserver.md): Deprecated. Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.
- [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.
