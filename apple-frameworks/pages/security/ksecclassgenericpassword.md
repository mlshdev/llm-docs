> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecclassgenericpassword](https://developer.apple.com/documentation/security/ksecclassgenericpassword)

# kSecClassGenericPassword (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates a generic password item.

## Declaration

```swift
let kSecClassGenericPassword: CFString
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of a generic password item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrAccount](ksecattraccount.md)
- [kSecAttrService](ksecattrservice.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md)

Calls to [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) that add a generic password item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to a generic password item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
- [kSecAttrAccessControl](ksecattraccesscontrol.md)
- [kSecAttrAccessible](ksecattraccessible.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrCreationDate](ksecattrcreationdate.md)
- [kSecAttrModificationDate](ksecattrmodificationdate.md)
- [kSecAttrDescription](ksecattrdescription.md)
- [kSecAttrComment](ksecattrcomment.md)
- [kSecAttrCreator](ksecattrcreator.md)
- [kSecAttrType](ksecattrtype.md)
- [kSecAttrLabel](ksecattrlabel.md)
- [kSecAttrIsInvisible](ksecattrisinvisible.md)
- [kSecAttrIsNegative](ksecattrisnegative.md)
- [kSecAttrGeneric](ksecattrgeneric.md)

# kSecClassGenericPassword (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates a generic password item.

## Declaration

```objectivec
extern CFStringRef const kSecClassGenericPassword;
```

## Mentioned In

- [Adding a password to the keychain](adding-a-password-to-the-keychain.md)

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of a generic password item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrAccount](ksecattraccount.md)
- [kSecAttrService](ksecattrservice.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md)

Calls to [SecItemAdd](secitemadd%28____%29.md) that add a generic password item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to a generic password item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
- [kSecAttrAccessControl](ksecattraccesscontrol.md)
- [kSecAttrAccessible](ksecattraccessible.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrCreationDate](ksecattrcreationdate.md)
- [kSecAttrModificationDate](ksecattrmodificationdate.md)
- [kSecAttrDescription](ksecattrdescription.md)
- [kSecAttrComment](ksecattrcomment.md)
- [kSecAttrCreator](ksecattrcreator.md)
- [kSecAttrType](ksecattrtype.md)
- [kSecAttrLabel](ksecattrlabel.md)
- [kSecAttrIsInvisible](ksecattrisinvisible.md)
- [kSecAttrIsNegative](ksecattrisnegative.md)
- [kSecAttrGeneric](ksecattrgeneric.md)
