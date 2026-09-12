> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfxregistryname](https://developer.apple.com/documentation/coregraphics/kcgpdfxregistryname)

# kCGPDFXRegistryName (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
let kCGPDFXRegistryName: CFString
```

<a id="Discussion"></a>

## Discussion

A string identifying the registry in which the condition designated by [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md) is defined. This key is optional. If present, the value of this key must be a [CFString](../corefoundation/cfstring.md) object. For best results, the string should be lossless in ASCII encoding.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)

# kCGPDFXRegistryName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
extern CFStringRef const kCGPDFXRegistryName;
```

<a id="Discussion"></a>

## Discussion

A string identifying the registry in which the condition designated by [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md) is defined. This key is optional. If present, the value of this key must be a [CFStringRef](../corefoundation/cfstring.md) object. For best results, the string should be lossless in ASCII encoding.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputConditionIdentifier](kcgpdfxoutputconditionidentifier.md)
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)
