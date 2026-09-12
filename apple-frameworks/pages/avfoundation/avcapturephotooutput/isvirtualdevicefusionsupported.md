> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isvirtualdevicefusionsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isvirtualdevicefusionsupported)

# isVirtualDeviceFusionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports virtual device image fusion.

## Declaration

```swift
var isVirtualDeviceFusionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When using a virtual capture device, the system can fuse the images from its constituent cameras to improve image quality.

If the current configuration doesn’t support virtual device fusion, your capture requests always resolve [isVirtualDeviceFusionEnabled](../avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md) to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring virtual device capture

- [isVirtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md): A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.
- [isVirtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md): A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.

# virtualDeviceFusionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device supports virtual device image fusion.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVirtualDeviceFusionSupported) BOOL virtualDeviceFusionSupported;
```

<a id="Discussion"></a>

## Discussion

When using a virtual capture device, the system can fuse the images from its constituent cameras to improve image quality.

If the current configuration doesn’t support virtual device fusion, your capture requests always resolve [virtualDeviceFusionEnabled](../avcaptureresolvedphotosettings/isvirtualdevicefusionenabled.md) to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring virtual device capture

- [virtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md): A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.
- [virtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md): A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.
