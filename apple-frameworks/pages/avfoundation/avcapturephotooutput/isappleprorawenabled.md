> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isappleprorawenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isappleprorawenabled)

# isAppleProRAWEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

A Boolean value that indicates whether you’ve configured the photo output to deliver Apple ProRAW formats.

## Declaration

```swift
var isAppleProRAWEnabled: Bool { get set }
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="Discussion"></a>

## Discussion

If [isAppleProRAWSupported](isappleprorawsupported.md) returns [true](https://developer.apple.com/documentation/swift/true), you can enable Apple ProRAW capture by setting this property to [true](https://developer.apple.com/documentation/swift/true). Compared to photos taken in Bayer RAW format, the system demosaics and partially processes Apple ProRAW photos. They’re still scene-referred, however, and allow capturing RAW photos in modes that don’t have a traditional Bayer RAW format available, such as modes that rely on fusing multiple captures.

Apple ProRAW formats aren’t supported on all platforms and devices. You can determine the pixel formats the system supports by querying the [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-9t9k5.md) property. Use the [isBayerRAWPixelFormat(\_:)](isbayerrawpixelformat%28__%29.md) or [isAppleProRAWPixelFormat(\_:)](isappleprorawpixelformat%28__%29.md) method to determine whether the pixel format is Bayer RAW or Apple ProRAW, respectively.

This property is key-value observable.

> **Tip**

>  Set this property to [true](https://developer.apple.com/documentation/swift/true) before calling [startRunning()](../avcapturesession/startrunning%28%29.md) on the capture session. Enabling this property later requires a lengthy reconfiguration of the capture pipeline.

## See Also

### Configuring ProRAW support

- [isAppleProRAWSupported](isappleprorawsupported.md): A Boolean value that indicates whether the current device and configuration supports Apple ProRAW pixel formats.

# appleProRAWEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

A Boolean value that indicates whether you’ve configured the photo output to deliver Apple ProRAW formats.

## Declaration

```objectivec
@property (nonatomic, getter=isAppleProRAWEnabled) BOOL appleProRAWEnabled;
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="Discussion"></a>

## Discussion

If [appleProRAWSupported](isappleprorawsupported.md) returns [true](https://developer.apple.com/documentation/swift/true), you can enable Apple ProRAW capture by setting this property to [true](https://developer.apple.com/documentation/swift/true). Compared to photos taken in Bayer RAW format, the system demosaics and partially processes Apple ProRAW photos. They’re still scene-referred, however, and allow capturing RAW photos in modes that don’t have a traditional Bayer RAW format available, such as modes that rely on fusing multiple captures.

Apple ProRAW formats aren’t supported on all platforms and devices. You can determine the pixel formats the system supports by querying the [availableRawPhotoPixelFormatTypes](availablerawphotopixelformattypes-9t9k5.md) property. Use the [isBayerRAWPixelFormat:](isbayerrawpixelformat%28__%29.md) or [isAppleProRAWPixelFormat:](isappleprorawpixelformat%28__%29.md) method to determine whether the pixel format is Bayer RAW or Apple ProRAW, respectively.

This property is key-value observable.

> **Tip**

>  Set this property to [true](https://developer.apple.com/documentation/swift/true) before calling [startRunning](../avcapturesession/startrunning%28%29.md) on the capture session. Enabling this property later requires a lengthy reconfiguration of the capture pipeline.

## See Also

### Configuring ProRAW support

- [appleProRAWSupported](isappleprorawsupported.md): A Boolean value that indicates whether the current device and configuration supports Apple ProRAW pixel formats.
