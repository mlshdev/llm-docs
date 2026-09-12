> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfxdestinationoutputprofile](https://developer.apple.com/documentation/coregraphics/kcgpdfxdestinationoutputprofile)

# kCGPDFXDestinationOutputProfile (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
let kCGPDFXDestinationOutputProfile: CFString
```

<a id="Discussion"></a>

## Discussion

An ICC profile stream defining the transformation from the PDF document’s source colors to output device colorants. This key is required if the value of [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md) does not specify a standard production condition. It is optional otherwise. If present, the value of this key must be an ICC-based color space specified as a `CGColorSpace` object.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)

# kCGPDFXDestinationOutputProfile (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
extern CFStringRef const kCGPDFXDestinationOutputProfile;
```

<a id="Discussion"></a>

## Discussion

An ICC profile stream defining the transformation from the PDF document’s source colors to output device colorants. This key is required if the value of [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md) does not specify a standard production condition. It is optional otherwise. If present, the value of this key must be an ICC-based color space specified as a `CGColorSpace` object.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)
