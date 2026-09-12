> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kciapplyoptiondefinition](https://developer.apple.com/documentation/coreimage/kciapplyoptiondefinition)

# kCIApplyOptionDefinition (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The domain of definition (DOD) of the produced image.

## Declaration

```swift
let kCIApplyOptionDefinition: String
```

<a id="discussion"></a>

## Discussion

The associated value is either a Core Image filter shape or a four-element array ([NSArray](../foundation/nsarray.md)) that specifies a rectangle.

## See Also

### Constants

- [kCIApplyOptionExtent](kciapplyoptionextent.md): The extent of the image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.
- [kCIApplyOptionColorSpace](kciapplyoptioncolorspace.md): The color space of the produced image.

# kCIApplyOptionDefinition (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The domain of definition (DOD) of the produced image.

## Declaration

```objectivec
extern NSString * const kCIApplyOptionDefinition;
```

<a id="discussion"></a>

## Discussion

The associated value is either a Core Image filter shape or a four-element array ([NSArray](../foundation/nsarray.md)) that specifies a rectangle.

## See Also

### Constants

- [kCIApplyOptionExtent](kciapplyoptionextent.md): The extent of the image.
- [kCIApplyOptionUserInfo](kciapplyoptionuserinfo.md): Information needed by a callback. The associated value is an object that Core Image will pass to any callbacks invoked for that filter.
- [kCIApplyOptionColorSpace](kciapplyoptioncolorspace.md): The color space of the produced image.
