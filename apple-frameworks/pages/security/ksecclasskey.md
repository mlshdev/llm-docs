> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecclasskey](https://developer.apple.com/documentation/security/ksecclasskey)

# kSecClassKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates a cryptographic key item.

## Declaration

```swift
let kSecClassKey: CFString
```

## Mentioned In

- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of a cryptographic key item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrApplicationLabel](ksecattrapplicationlabel.md)
- [kSecAttrApplicationTag](ksecattrapplicationtag.md)
- [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md)
- [kSecAttrKeyClass](ksecattrkeyclass.md)
- [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)
- [kSecAttrKeyType](ksecattrkeytype.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md) (on iOS 14 and newer, iOS 11 newer, and watchOS 7 and newer)

Calls to [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) that add a cryptographic key item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to a cryptographic key item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
- [kSecAttrAccessible](ksecattraccessible.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrLabel](ksecattrlabel.md)
- [kSecAttrIsPermanent](ksecattrispermanent.md)
- [kSecAttrPRF](ksecattrprf.md)
- [kSecAttrSalt](ksecattrsalt.md)
- [kSecAttrRounds](ksecattrrounds.md)
- [kSecAttrCanEncrypt](ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](ksecattrcandecrypt.md)
- [kSecAttrCanDerive](ksecattrcanderive.md)
- [kSecAttrCanSign](ksecattrcansign.md)
- [kSecAttrCanVerify](ksecattrcanverify.md)
- [kSecAttrCanWrap](ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](ksecattrcanunwrap.md)

# kSecClassKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates a cryptographic key item.

## Declaration

```objectivec
extern CFStringRef const kSecClassKey;
```

## Mentioned In

- [Storing Keys in the Keychain](storing-keys-in-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of a cryptographic key item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrApplicationLabel](ksecattrapplicationlabel.md)
- [kSecAttrApplicationTag](ksecattrapplicationtag.md)
- [kSecAttrEffectiveKeySize](ksecattreffectivekeysize.md)
- [kSecAttrKeyClass](ksecattrkeyclass.md)
- [kSecAttrKeySizeInBits](ksecattrkeysizeinbits.md)
- [kSecAttrKeyType](ksecattrkeytype.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md) (on iOS 14 and newer, iOS 11 newer, and watchOS 7 and newer)

Calls to [SecItemAdd](secitemadd%28____%29.md) that add a cryptographic key item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to a cryptographic key item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
- [kSecAttrAccessible](ksecattraccessible.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrLabel](ksecattrlabel.md)
- [kSecAttrIsPermanent](ksecattrispermanent.md)
- [kSecAttrPRF](ksecattrprf.md)
- [kSecAttrSalt](ksecattrsalt.md)
- [kSecAttrRounds](ksecattrrounds.md)
- [kSecAttrCanEncrypt](ksecattrcanencrypt.md)
- [kSecAttrCanDecrypt](ksecattrcandecrypt.md)
- [kSecAttrCanDerive](ksecattrcanderive.md)
- [kSecAttrCanSign](ksecattrcansign.md)
- [kSecAttrCanVerify](ksecattrcanverify.md)
- [kSecAttrCanWrap](ksecattrcanwrap.md)
- [kSecAttrCanUnwrap](ksecattrcanunwrap.md)
