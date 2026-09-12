> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secafpserversignature](https://developer.apple.com/documentation/security/secafpserversignature)

# SecAFPServerSignature (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Represents a 16-byte Apple File Protocol server signature block.

> Use internet password items instead of AppleShare password items.

## Declaration

```swift
typealias SecAFPServerSignature = (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is deprecated. Use internet password items instead of AppleShare password items.

This type represents a 16-byte Apple File Protocol server signature block. You can use a value of this type with the keychain item attribute constant [SecItemAttr.signatureItemAttr](secitemattr/signatureitemattr.md) to specify an Apple File Protocol server signature.

# SecAFPServerSignature (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Represents a 16-byte Apple File Protocol server signature block.

> Use internet password items instead of AppleShare password items.

## Declaration

```objectivec
typedef UInt8[16] SecAFPServerSignature;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is deprecated. Use internet password items instead of AppleShare password items.

This type represents a 16-byte Apple File Protocol server signature block. You can use a value of this type with the keychain item attribute constant [kSecSignatureItemAttr](secitemattr/signatureitemattr.md) to specify an Apple File Protocol server signature.
