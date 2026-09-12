> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccredentialtype](https://developer.apple.com/documentation/security/seccredentialtype)

# SecCredentialType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 12.0)

The credential type to be returned by [SecKeyGetCredentials](seckeygetcredentials.md).

> No longer supported

## Declaration

```swift
enum SecCredentialType
```

<a id="overview"></a>

## Overview

See the section “Servers and the Keychain” in the [macOS Keychain Services Tasks](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/03tasks/tasks.html#//apple_ref/doc/uid/TP30000897-CH205) chapter of [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897) for information on the use of UI with keychain tasks.

## Topics

### Constants

- [SecCredentialType.default](seccredentialtype/default.md): Deprecated. The default setting for determining whether to present UI is used.
- [SecCredentialType.withUI](seccredentialtype/withui.md): Deprecated. Keychain operations on keys that have this credential are allowed to present UI if required.
- [SecCredentialType.noUI](seccredentialtype/noui.md): Deprecated. Keychain operations on keys that have this credential are not allowed to present UI, and will fail if UI is required.

### Initializers

- [init(rawValue:)](seccredentialtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecCredentialType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 12.0)

The credential type to be returned by [SecKeyGetCredentials](seckeygetcredentials.md).

> No longer supported

## Declaration

```objectivec
enum SecCredentialType : uint32;
```

<a id="overview"></a>

## Overview

See the section “Servers and the Keychain” in the [macOS Keychain Services Tasks](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/03tasks/tasks.html#//apple_ref/doc/uid/TP30000897-CH205) chapter of [Keychain Services Programming Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/keychainServConcepts/01introduction/introduction.html#//apple_ref/doc/uid/TP30000897) for information on the use of UI with keychain tasks.

## Topics

### Constants

- [kSecCredentialTypeDefault](seccredentialtype/default.md): Deprecated. The default setting for determining whether to present UI is used.
- [kSecCredentialTypeWithUI](seccredentialtype/withui.md): Deprecated. Keychain operations on keys that have this credential are allowed to present UI if required.
- [kSecCredentialTypeNoUI](seccredentialtype/noui.md): Deprecated. Keychain operations on keys that have this credential are not allowed to present UI, and will fail if UI is required.
