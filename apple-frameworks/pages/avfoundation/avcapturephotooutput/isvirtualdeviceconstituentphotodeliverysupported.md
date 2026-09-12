> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isvirtualdeviceconstituentphotodeliverysupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isvirtualdeviceconstituentphotodeliverysupported)

# isVirtualDeviceConstituentPhotoDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.

## Declaration

```swift
var isVirtualDeviceConstituentPhotoDeliverySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system only supports virtual device constituent photo delivery for certain capture session presets and capture device formats.

When switching cameras or formats, this property may change. When this property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), [isVirtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring virtual device capture

- [isVirtualDeviceFusionSupported](isvirtualdevicefusionsupported.md): A Boolean value that indicates whether the device supports virtual device image fusion.
- [isVirtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md): A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.

# virtualDeviceConstituentPhotoDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output configuration supports delivery of photos from constituent cameras of a virtual device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVirtualDeviceConstituentPhotoDeliverySupported) BOOL virtualDeviceConstituentPhotoDeliverySupported;
```

<a id="Discussion"></a>

## Discussion

The system only supports virtual device constituent photo delivery for certain capture session presets and capture device formats.

When switching cameras or formats, this property may change. When this property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), [virtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring virtual device capture

- [virtualDeviceFusionSupported](isvirtualdevicefusionsupported.md): A Boolean value that indicates whether the device supports virtual device image fusion.
- [virtualDeviceConstituentPhotoDeliveryEnabled](isvirtualdeviceconstituentphotodeliveryenabled.md): A Boolean value that indicates whether the photo output delivers photos from constituent cameras of a virtual device.
