> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturecolorspace/hlg_bt2020](https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/hlg_bt2020)

# AVCaptureColorSpace.HLG_BT2020 (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

The BT.2020 wide color space that uses Illuminant D65 as the white point and Hybrid Log-Gamma (HLG) as the transfer function.

## Declaration

```swift
case HLG_BT2020
```

## See Also

### Color spaces

- [AVCaptureColorSpace.sRGB](srgb.md): The standard RGB color space.
- [AVCaptureColorSpace.P3_D65](p3_d65.md): The P3 D65 wide color space that uses Illuminant D65 as the white point.
- [AVCaptureColorSpace.appleLog](applelog.md): The Apple Log Color space, which uses BT2020 as the color primaries, and an Apple-defined Log curve as a transfer function.
- [AVCaptureColorSpace.appleLog2](applelog2.md): The Apple Log 2 Color space, which uses Apple Gamut as the color primaries, and an Apple defined Log curve as a transfer function. When you set this as the active color space on an [AVCaptureDevice](../avcapturedevice.md), any [AVCapturePhotoOutput](../avcapturephotooutput.md) or [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) connected to the same [AVCaptureDevice](../avcapturedevice.md) is made inactive (its [isActive](../avcaptureconnection/isactive.md) property returns `false`).

# AVCaptureColorSpace_HLG_BT2020 (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · tvOS 17.0+

The BT.2020 wide color space that uses Illuminant D65 as the white point and Hybrid Log-Gamma (HLG) as the transfer function.

## Declaration

```objectivec
AVCaptureColorSpace_HLG_BT2020
```

## See Also

### Color spaces

- [AVCaptureColorSpace_sRGB](srgb.md): The standard RGB color space.
- [AVCaptureColorSpace_P3_D65](p3_d65.md): The P3 D65 wide color space that uses Illuminant D65 as the white point.
- [AVCaptureColorSpace_AppleLog](applelog.md): The Apple Log Color space, which uses BT2020 as the color primaries, and an Apple-defined Log curve as a transfer function.
- [AVCaptureColorSpace_AppleLog2](applelog2.md): The Apple Log 2 Color space, which uses Apple Gamut as the color primaries, and an Apple defined Log curve as a transfer function. When you set this as the active color space on an [AVCaptureDevice](../avcapturedevice.md), any [AVCapturePhotoOutput](../avcapturephotooutput.md) or [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) connected to the same [AVCaptureDevice](../avcapturedevice.md) is made inactive (its [active](../avcaptureconnection/isactive.md) property returns `false`).
