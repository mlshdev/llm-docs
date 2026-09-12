> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/usehardwareacceleration](https://developer.apple.com/documentation/coreimage/ciimageoption/usehardwareacceleration)

# useHardwareAcceleration (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value specifying that using hardware is preferred when decoding.

## Declaration

```swift
static let useHardwareAcceleration: CIImageOption
```

<a id="discussion"></a>

## Discussion

If the value for this option is:

- True: The image will be decoded using dedicated hardware if possible.
- False: The image will be decoded using the CPU is possible.
- Not specified: The default behavior is True.

This option is only supported by JPEG and HEIF images formats.

This option is only supported by these APIs:

- `/CIImage/imageWithContentsOfURL:options:`
- `/CIImage/initWithContentsOfURL:options:`
- `/CIImage/imageWithData:options:`
- `/CIImage/initWithData:options:`
- `/CIImage/imageWithCGImageSource:index:options:`
- `/CIImage/initWithCGImageSource:index:options:`

> **Note**

> The `kCGImageSourceUseHardwareAcceleration` key can also be used for this purpose.

# kCIImageUseHardwareAcceleration (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value specifying that using hardware is preferred when decoding.

## Declaration

```objectivec
extern CIImageOption const kCIImageUseHardwareAcceleration;
```

<a id="discussion"></a>

## Discussion

If the value for this option is:

- True: The image will be decoded using dedicated hardware if possible.
- False: The image will be decoded using the CPU is possible.
- Not specified: The default behavior is True.

This option is only supported by JPEG and HEIF images formats.

This option is only supported by these APIs:

- `/CIImage/imageWithContentsOfURL:options:`
- `/CIImage/initWithContentsOfURL:options:`
- `/CIImage/imageWithData:options:`
- `/CIImage/initWithData:options:`
- `/CIImage/imageWithCGImageSource:index:options:`
- `/CIImage/initWithCGImageSource:index:options:`

> **Note**

> The `kCGImageSourceUseHardwareAcceleration` key can also be used for this purpose.
