> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isvirtualdeviceconstituentphotodeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isvirtualdeviceconstituentphotodeliveryenabled)

# isVirtualDeviceConstituentPhotoDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.

## Declaration

```swift
var isVirtualDeviceConstituentPhotoDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can only set this value to [true](https://developer.apple.com/documentation/swift/true) when [isVirtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md) is [true](https://developer.apple.com/documentation/swift/true).

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  Virtual device constituent photo delivery requires a lengthy reconfiguration of the capture render pipeline, so enable this property prior to starting the capture session.

## See Also

### Configuring virtual device capture

- [isVirtualDeviceFusionSupported](isvirtualdevicefusionsupported.md): A Boolean value that indicates whether the device supports virtual device image fusion.
- [isVirtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md): A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.

# virtualDeviceConstituentPhotoDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.

## Declaration

```objectivec
@property (nonatomic, getter=isVirtualDeviceConstituentPhotoDeliveryEnabled) BOOL virtualDeviceConstituentPhotoDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

You can only set this value to [true](https://developer.apple.com/documentation/swift/true) when [virtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md) is [true](https://developer.apple.com/documentation/swift/true).

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  Virtual device constituent photo delivery requires a lengthy reconfiguration of the capture render pipeline, so enable this property prior to starting the capture session.

## See Also

### Configuring virtual device capture

- [virtualDeviceFusionSupported](isvirtualdevicefusionsupported.md): A Boolean value that indicates whether the device supports virtual device image fusion.
- [virtualDeviceConstituentPhotoDeliverySupported](isvirtualdeviceconstituentphotodeliverysupported.md): A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.
