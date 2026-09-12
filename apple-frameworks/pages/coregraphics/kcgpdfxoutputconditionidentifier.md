> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfxoutputconditionidentifier](https://developer.apple.com/documentation/coregraphics/kcgpdfxoutputconditionidentifier)

# kCGPDFXOutputConditionIdentifier (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
let kCGPDFXOutputConditionIdentifier: CFString
```

<a id="Discussion"></a>

## Discussion

A string identifying the intended output device or production condition in a human- or machine-readable form. This key is required. The value of this key must be a [CFString](../corefoundation/cfstring.md) object. For best results, the string should be restricted to characters in the ASCII character set.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)

# kCGPDFXOutputConditionIdentifier (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.4+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
extern CFStringRef const kCGPDFXOutputConditionIdentifier;
```

<a id="Discussion"></a>

## Discussion

A string identifying the intended output device or production condition in a human- or machine-readable form. This key is required. The value of this key must be a [CFStringRef](../corefoundation/cfstring.md) object. For best results, the string should be restricted to characters in the ASCII character set.

## See Also

### Output Intent Keys

- [kCGPDFXOutputIntentSubtype](kcgpdfxoutputintentsubtype.md): The output intent subtype. This key is required.
- [kCGPDFXOutputCondition](kcgpdfxoutputcondition.md): A text string identifying the intended output device or production condition in a human-readable form.
- [kCGPDFXRegistryName](kcgpdfxregistryname.md)
- [kCGPDFXInfo](kcgpdfxinfo.md)
- [kCGPDFXDestinationOutputProfile](kcgpdfxdestinationoutputprofile.md)
