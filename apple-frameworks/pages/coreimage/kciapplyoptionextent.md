> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kciapplyoptionextent](https://developer.apple.com/documentation/coreimage/kciapplyoptionextent)

# kCIApplyOptionExtent (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The extent of the image.

## Declaration

```swift
let kCIApplyOptionExtent: String
```

<a id="discussion"></a>

## Discussion

The size of the produced image. The associated value is a four-element array ([NSArray](../foundation/nsarray.md)) that specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.

## See Also

### Constants

- [kCIApplyOptionDefinition](kciapplyoptiondefinition.md): The domain of definition (DOD) of the produced image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.
- [kCIApplyOptionColorSpace](kciapplyoptioncolorspace.md): The color space of the produced image.

# kCIApplyOptionExtent (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The extent of the image.

## Declaration

```objectivec
extern NSString * const kCIApplyOptionExtent;
```

<a id="discussion"></a>

## Discussion

The size of the produced image. The associated value is a four-element array ([NSArray](../foundation/nsarray.md)) that specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.

## See Also

### Constants

- [kCIApplyOptionDefinition](kciapplyoptiondefinition.md): The domain of definition (DOD) of the produced image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.
- [kCIApplyOptionColorSpace](kciapplyoptioncolorspace.md): The color space of the produced image.
