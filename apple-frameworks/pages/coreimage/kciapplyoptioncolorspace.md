> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kciapplyoptioncolorspace](https://developer.apple.com/documentation/coreimage/kciapplyoptioncolorspace)

# kCIApplyOptionColorSpace (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The color space of the produced image.

## Declaration

```swift
let kCIApplyOptionColorSpace: String
```

<a id="discussion"></a>

## Discussion

The associated value must be an RGB [CGColorSpace](../coregraphics/cgcolorspace.md) object. If not specified, the output of the kernel is in the working color space of the Core Image context used to render the image.

## See Also

### Constants

- [kCIApplyOptionExtent](kciapplyoptionextent.md): The extent of the image.
- [kCIApplyOptionDefinition](kciapplyoptiondefinition.md): The domain of definition (DOD) of the produced image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.

# kCIApplyOptionColorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The color space of the produced image.

## Declaration

```objectivec
extern NSString * const kCIApplyOptionColorSpace;
```

<a id="discussion"></a>

## Discussion

The associated value must be an RGB [CGColorSpaceRef](../coregraphics/cgcolorspace.md) object. If not specified, the output of the kernel is in the working color space of the Core Image context used to render the image.

## See Also

### Constants

- [kCIApplyOptionExtent](kciapplyoptionextent.md): The extent of the image.
- [kCIApplyOptionDefinition](kciapplyoptiondefinition.md): The domain of definition (DOD) of the produced image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.
