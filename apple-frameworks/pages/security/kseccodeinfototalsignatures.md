> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfototalsignatures](https://developer.apple.com/documentation/security/kseccodeinfototalsignatures)

# kSecCodeInfoTotalSignatures (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
let kSecCodeInfoTotalSignatures: CFString
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFNumber giving the total number of signature slots present on the code object (ranging from 1 to kSecCSMaxSignatures).

# kSecCodeInfoTotalSignatures (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoTotalSignatures;
```

<a id="discussion"></a>

## Discussion

Key in the dictionary returned by SecCodeCopySigningInformation. The value is a CFNumber giving the total number of signature slots present on the code object (ranging from 1 to kSecCSMaxSignatures).
