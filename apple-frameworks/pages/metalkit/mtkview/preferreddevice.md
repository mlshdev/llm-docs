> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/preferreddevice](https://developer.apple.com/documentation/metalkit/mtkview/preferreddevice)

# preferredDevice (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The device object that the system recommends using for this view.

## Declaration

```swift
var preferredDevice: (any MTLDevice)? { get }
```

<a id="Discussion"></a>

## Discussion

On systems with a single GPU, this method returns the default Metal system device; see [MTLCreateSystemDefaultDevice()](../../metal/mtlcreatesystemdefaultdevice%28%29.md). On systems with more than one GPU, this method returns the [MTLDevice](../../metal/mtldevice.md) that was last used to composite and present the view’s contents. This device object usually corresponds to the GPU associated with the screen that’s displaying the view. If you set the view’s [device](device.md) property to this device object, you reduce the number of cross-GPU texture copies that Core Animation must make to present the view’s contents onscreen.

## See Also

### Configuring the Metal Device

- [device](device.md): The device object the view uses to create its Metal objects.

# preferredDevice (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The device object that the system recommends using for this view.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLDevice> preferredDevice;
```

<a id="Discussion"></a>

## Discussion

On systems with a single GPU, this method returns the default Metal system device; see [MTLCreateSystemDefaultDevice](../../metal/mtlcreatesystemdefaultdevice%28%29.md). On systems with more than one GPU, this method returns the [MTLDevice](../../metal/mtldevice.md) that was last used to composite and present the view’s contents. This device object usually corresponds to the GPU associated with the screen that’s displaying the view. If you set the view’s [device](device.md) property to this device object, you reduce the number of cross-GPU texture copies that Core Animation must make to present the view’s contents onscreen.

## See Also

### Configuring the Metal Device

- [device](device.md): The device object the view uses to create its Metal objects.
