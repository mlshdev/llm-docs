> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturecolorspace/applelog2](https://developer.apple.com/documentation/avfoundation/avcapturecolorspace/applelog2)

# AVCaptureColorSpace.appleLog2 (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

The Apple Log 2 Color space, which uses Apple Gamut as the color primaries, and an Apple defined Log curve as a transfer function. When you set this as the active color space on an [AVCaptureDevice](../avcapturedevice.md), any [AVCapturePhotoOutput](../avcapturephotooutput.md) or [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) connected to the same [AVCaptureDevice](../avcapturedevice.md) is made inactive (its [isActive](../avcaptureconnection/isactive.md) property returns `false`).

## Declaration

```swift
case appleLog2
```

## See Also

### Color spaces

- [AVCaptureColorSpace.sRGB](srgb.md): The standard RGB color space.
- [AVCaptureColorSpace.P3_D65](p3_d65.md): The P3 D65 wide color space that uses Illuminant D65 as the white point.
- [AVCaptureColorSpace.HLG_BT2020](hlg_bt2020.md): The BT.2020 wide color space that uses Illuminant D65 as the white point and Hybrid Log-Gamma (HLG) as the transfer function.
- [AVCaptureColorSpace.appleLog](applelog.md): The Apple Log Color space, which uses BT2020 as the color primaries, and an Apple-defined Log curve as a transfer function.

# AVCaptureColorSpace_AppleLog2 (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

The Apple Log 2 Color space, which uses Apple Gamut as the color primaries, and an Apple defined Log curve as a transfer function. When you set this as the active color space on an [AVCaptureDevice](../avcapturedevice.md), any [AVCapturePhotoOutput](../avcapturephotooutput.md) or [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) connected to the same [AVCaptureDevice](../avcapturedevice.md) is made inactive (its [active](../avcaptureconnection/isactive.md) property returns `false`).

## Declaration

```objectivec
AVCaptureColorSpace_AppleLog2
```

## See Also

### Color spaces

- [AVCaptureColorSpace_sRGB](srgb.md): The standard RGB color space.
- [AVCaptureColorSpace_P3_D65](p3_d65.md): The P3 D65 wide color space that uses Illuminant D65 as the white point.
- [AVCaptureColorSpace_HLG_BT2020](hlg_bt2020.md): The BT.2020 wide color space that uses Illuminant D65 as the white point and Hybrid Log-Gamma (HLG) as the transfer function.
- [AVCaptureColorSpace_AppleLog](applelog.md): The Apple Log Color space, which uses BT2020 as the color primaries, and an Apple-defined Log curve as a transfer function.
