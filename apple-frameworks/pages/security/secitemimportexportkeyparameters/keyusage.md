> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemimportexportkeyparameters/keyusage](https://developer.apple.com/documentation/security/secitemimportexportkeyparameters/keyusage)

# keyUsage (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

An array containing usage attributes applied to a key on import.

## Declaration

```swift
var keyUsage: Unmanaged<CFArray>?
```

<a id="Discussion"></a>

## Discussion

The array may contain any of the following key usage constants:

- [kSecAttrCanEncrypt](../ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](../ksecattrcandecrypt.md)
- [kSecAttrCanDerive](../ksecattrcanderive.md)
- [kSecAttrCanSign](../ksecattrcansign.md)
- [kSecAttrCanVerify](../ksecattrcanverify.md)
- [kSecAttrCanWrap](../ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](../ksecattrcanunwrap.md)

If the array is `NULL`, all operations are allowed by default.

# keyUsage (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

An array containing usage attributes applied to a key on import.

## Declaration

```objectivec
CFArrayRef keyUsage;
```

<a id="Discussion"></a>

## Discussion

The array may contain any of the following key usage constants:

- [kSecAttrCanEncrypt](../ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](../ksecattrcandecrypt.md)
- [kSecAttrCanDerive](../ksecattrcanderive.md)
- [kSecAttrCanSign](../ksecattrcansign.md)
- [kSecAttrCanVerify](../ksecattrcanverify.md)
- [kSecAttrCanWrap](../ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](../ksecattrcanunwrap.md)

If the array is `NULL`, all operations are allowed by default.
