> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfochosensignature](https://developer.apple.com/documentation/security/kseccodeinfochosensignature)

# kSecCodeInfoChosenSignature (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
let kSecCodeInfoChosenSignature: CFString
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFNumber containing the 1-based index of the signature slot that was selected for validation and information retrieval.

# kSecCodeInfoChosenSignature (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoChosenSignature;
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFNumber containing the 1-based index of the signature slot that was selected for validation and information retrieval.
