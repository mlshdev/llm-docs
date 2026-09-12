> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecusekeychain](https://developer.apple.com/documentation/security/ksecusekeychain)

# kSecUseKeychain (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a keychain to operate on.

## Declaration

```swift
let kSecUseKeychain: CFString
```

<a id="Discussion"></a>

## Discussion

Specifies a [SecKeychain](seckeychain.md) object that references the keychain to which [SecItemAdd(\_:\_:)](secitemadd%28____%29.md) should add the provided items.

# kSecUseKeychain (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a keychain to operate on.

## Declaration

```objectivec
extern CFStringRef const kSecUseKeychain;
```

<a id="Discussion"></a>

## Discussion

Specifies a [SecKeychainRef](seckeychain.md) object that references the keychain to which [SecItemAdd](secitemadd%28____%29.md) should add the provided items.
