> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfxoutputintentsubtype](https://developer.apple.com/documentation/coregraphics/kcgpdfxoutputintentsubtype)

# kCGPDFXOutputIntentSubtype (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The output intent subtype. This key is required.

## Declaration

```swift
let kCGPDFXOutputIntentSubtype: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFString](../corefoundation/cfstring.md) object equal to `"GTS_PDFX"`; otherwise, the dictionary is ignored.

## See Also

### Output Intent Keys

- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)

# kCGPDFXOutputIntentSubtype (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The output intent subtype. This key is required.

## Declaration

```objectivec
extern CFStringRef const kCGPDFXOutputIntentSubtype;
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFStringRef](../corefoundation/cfstring.md) object equal to `"GTS_PDFX"`; otherwise, the dictionary is ignored.

## See Also

### Output Intent Keys

- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)
