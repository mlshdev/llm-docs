> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr/signatureitemattr](https://developer.apple.com/documentation/security/secitemattr/signatureitemattr)

# SecItemAttr.signatureItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the server signature attribute.

## Declaration

```swift
case signatureItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type [SecAFPServerSignature](../secafpserversignature.md) that represents the server signature block. This is unique to AppleShare password attributes.

# kSecSignatureItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the server signature attribute.

## Declaration

```objectivec
kSecSignatureItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type [SecAFPServerSignature](../secafpserversignature.md) that represents the server signature block. This is unique to AppleShare password attributes.
