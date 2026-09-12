> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecsharedpassword](https://developer.apple.com/documentation/security/ksecsharedpassword)

# kSecSharedPassword (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A dictionary key whose value is the shared password.

## Declaration

```swift
let kSecSharedPassword: CFString
```

<a id="Discussion"></a>

## Discussion

The dictionary returned by the [SecRequestSharedWebCredential(\_:\_:\_:)](secrequestsharedwebcredential%28______%29.md) function includes this key to provide you with the password.

You can also access the server’s URL and the user name from this dictionary. To access the server, use the [kSecAttrServer](ksecattrserver.md) constant. To access the user name, use the [kSecAttrAccount](ksecattraccount.md) constant. These constants are part of the [Keychain services](keychain-services.md) API, and in particular are listed among the [Item attribute keys and values](item-attribute-keys-and-values.md).

# kSecSharedPassword (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A dictionary key whose value is the shared password.

## Declaration

```objectivec
extern CFStringRef const kSecSharedPassword;
```

<a id="Discussion"></a>

## Discussion

The dictionary returned by the [SecRequestSharedWebCredential](secrequestsharedwebcredential%28______%29.md) function includes this key to provide you with the password.

You can also access the server’s URL and the user name from this dictionary. To access the server, use the [kSecAttrServer](ksecattrserver.md) constant. To access the user name, use the [kSecAttrAccount](ksecattraccount.md) constant. These constants are part of the [Keychain services](keychain-services.md) API, and in particular are listed among the [Item attribute keys and values](item-attribute-keys-and-values.md).
