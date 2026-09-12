> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfosignerinfoskid](https://developer.apple.com/documentation/security/kseccodeinfosignerinfoskid)

# kSecCodeInfoSignerInfoSKID (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
let kSecCodeInfoSignerInfoSKID: CFString
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFData containing the Subject Key Identifier (SKID) of the leaf signing certificate. Useful for looking up detached certificates.

# kSecCodeInfoSignerInfoSKID (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoSignerInfoSKID;
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFData containing the Subject Key Identifier (SKID) of the leaf signing certificate. Useful for looking up detached certificates.
