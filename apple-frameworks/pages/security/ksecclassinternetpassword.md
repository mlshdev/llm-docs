> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecclassinternetpassword](https://developer.apple.com/documentation/security/ksecclassinternetpassword)

# kSecClassInternetPassword (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates an Internet password item.

## Declaration

```swift
let kSecClassInternetPassword: CFString
```

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of an Internet password item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrAccount](ksecattraccount.md)
- [kSecAttrAuthenticationType](ksecattrauthenticationtype.md)
- [kSecAttrPath](ksecattrpath.md)
- [kSecAttrPort](ksecattrport.md)
- [kSecAttrProtocol](ksecattrprotocol.md)
- [kSecAttrSecurityDomain](ksecattrsecuritydomain.md)
- [kSecAttrServer](ksecattrserver.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md)

Calls to [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) that add an Internet password item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to an Internet password item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
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

# kSecClassInternetPassword (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates an Internet password item.

## Declaration

```objectivec
extern CFStringRef const kSecClassInternetPassword;
```

<a id="Discussion"></a>

## Discussion

The following keychain item attributes form the composite primary key of an Internet password item:

- [kSecAttrAccessGroup](ksecattraccessgroup.md) (on macOS, this key only applies if you set [kSecUseDataProtectionKeychain](ksecusedataprotectionkeychain.md) or [kSecAttrSynchronizable](ksecattrsynchronizable.md) to [true](https://developer.apple.com/documentation/swift/true))
- [kSecAttrAccount](ksecattraccount.md)
- [kSecAttrAuthenticationType](ksecattrauthenticationtype.md)
- [kSecAttrPath](ksecattrpath.md)
- [kSecAttrPort](ksecattrport.md)
- [kSecAttrProtocol](ksecattrprotocol.md)
- [kSecAttrSecurityDomain](ksecattrsecuritydomain.md)
- [kSecAttrServer](ksecattrserver.md)
- [kSecAttrSynchronizable](ksecattrsynchronizable.md)

Calls to [SecItemAdd](secitemadd%28____%29.md) that add an Internet password item with the same values for all of these attributes as an existing item result in [errSecDuplicateItem](errsecduplicateitem.md).

The following keychain item attributes apply to an Internet password item, and don’t form part of its composite primary key:

- [kSecAttrAccess](ksecattraccess.md) (macOS only)
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
