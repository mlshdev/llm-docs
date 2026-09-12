> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seckey](https://developer.apple.com/documentation/security/seckey)

# SecKey (Swift)

**Framework:** Security  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a cryptographic key.

## Declaration

```swift
class SecKey
```

## Mentioned In

- [Getting an Existing Key](getting-an-existing-key.md)

<a id="overview"></a>

## Overview

A [SecKey](seckey.md) instance that represents a key that is stored in a keychain can be safely cast to a [SecKeychainItem](seckeychainitem.md) for manipulation as a keychain item. On the other hand, if the key is not stored in a keychain, casting the object to a [SecKeychainItem](seckeychainitem.md) and passing it to Keychain Services functions returns errors.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

# SecKeyRef (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a cryptographic key.

## Declaration

```objectivec
typedef struct __SecKey * SecKeyRef;
```

## Mentioned In

- [Getting an Existing Key](getting-an-existing-key.md)

<a id="overview"></a>

## Overview

A [SecKeyRef](seckey.md) instance that represents a key that is stored in a keychain can be safely cast to a [SecKeychainItemRef](seckeychainitem.md) for manipulation as a keychain item. On the other hand, if the key is not stored in a keychain, casting the object to a [SecKeychainItemRef](seckeychainitem.md) and passing it to Keychain Services functions returns errors.
