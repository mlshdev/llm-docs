> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/item-class-keys-and-values](https://developer.apple.com/documentation/security/item-class-keys-and-values)

# Item class keys and values (Swift)

**Framework:** Security  
**Kind:** API Collection

Specify the class of a keychain item.

<a id="overview"></a>

## Overview

Keychain items come in a variety of classes according to the kind of data they hold, such as passwords, cryptographic keys, and certificates. The item’s class dictates which attributes apply and enables the system to decide whether to encrypt the data. For example, the system encrypts passwords, but not certificates because they aren’t secret.

Use the key and one of the corresponding values listed here to specify the class for a new item you create with a call to the [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) function by placing the key/value pair in the `attributes` dictionary.

Later, use this same pair in the `query` dictionary when searching for an item with one of the [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md), [SecItemUpdate(\_:\_:)](secitemupdate%28____%29.md), or [SecItemDelete(\_:)](secitemdelete%28__%29.md) functions.

## Topics

### Item class keys

- [kSecClass](ksecclass.md): A dictionary key whose value is the item’s class.

### Item class values

Values you use with the [kSecClass](ksecclass.md) key.

- [kSecClassGenericPassword](ksecclassgenericpassword.md): The value that indicates a generic password item.
- [kSecClassInternetPassword](ksecclassinternetpassword.md): The value that indicates an Internet password item.
- [kSecClassCertificate](ksecclasscertificate.md): The value that indicates a certificate item.
- [kSecClassKey](ksecclasskey.md): The value that indicates a cryptographic key item.
- [kSecClassIdentity](ksecclassidentity.md): The value that indicates an identity item.

# Item class keys and values (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Specify the class of a keychain item.

<a id="overview"></a>

## Overview

Keychain items come in a variety of classes according to the kind of data they hold, such as passwords, cryptographic keys, and certificates. The item’s class dictates which attributes apply and enables the system to decide whether to encrypt the data. For example, the system encrypts passwords, but not certificates because they aren’t secret.

Use the key and one of the corresponding values listed here to specify the class for a new item you create with a call to the [SecItemAdd](secitemadd%28____%29.md) function by placing the key/value pair in the `attributes` dictionary.

Later, use this same pair in the `query` dictionary when searching for an item with one of the [SecItemCopyMatching](secitemcopymatching%28____%29.md), [SecItemUpdate](secitemupdate%28____%29.md), or [SecItemDelete](secitemdelete%28__%29.md) functions.

## Topics

### Item class keys

- [kSecClass](ksecclass.md): A dictionary key whose value is the item’s class.

### Item class values

Values you use with the [kSecClass](ksecclass.md) key.

- [kSecClassGenericPassword](ksecclassgenericpassword.md): The value that indicates a generic password item.
- [kSecClassInternetPassword](ksecclassinternetpassword.md): The value that indicates an Internet password item.
- [kSecClassCertificate](ksecclasscertificate.md): The value that indicates a certificate item.
- [kSecClassKey](ksecclasskey.md): The value that indicates a cryptographic key item.
- [kSecClassIdentity](ksecclassidentity.md): The value that indicates an identity item.
