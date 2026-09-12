> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secpreferencesdomain](https://developer.apple.com/documentation/security/secpreferencesdomain)

# SecPreferencesDomain (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The keychain preference domains.

## Declaration

```swift
enum SecPreferencesDomain
```

<a id="overview"></a>

## Overview

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. The default preference domain for system daemons (that is, for daemons running in the root session) is the system domain. The default preference domain for all other programs is the user domain. A common preference appears for all users and the system. For example, if you add a keychain to the keychain search list using [SecPreferencesDomain.common](secpreferencesdomain/common.md) for the preference domain, the keychain is added to the search list for all users and the system.

## Topics

### Constants

- [SecPreferencesDomain.user](secpreferencesdomain/user.md): Indicates the user preference domain preferences.
- [SecPreferencesDomain.system](secpreferencesdomain/system.md): Indicates the system or daemon preference domain preferences.
- [SecPreferencesDomain.common](secpreferencesdomain/common.md): Indicates the preferences are common to everyone.
- [SecPreferencesDomain.dynamic](secpreferencesdomain/dynamic.md): Indicates a dynamic search list (typically provided by removable keychains such as smart cards).

### Initializers

- [init(rawValue:)](secpreferencesdomain/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecPreferencesDomain (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The keychain preference domains.

## Declaration

```objectivec
enum SecPreferencesDomain : int;
```

<a id="overview"></a>

## Overview

A preference domain is a set of security-related preferences, such as the default keychain and the current keychain search list. The default preference domain for system daemons (that is, for daemons running in the root session) is the system domain. The default preference domain for all other programs is the user domain. A common preference appears for all users and the system. For example, if you add a keychain to the keychain search list using [kSecPreferencesDomainCommon](secpreferencesdomain/common.md) for the preference domain, the keychain is added to the search list for all users and the system.

## Topics

### Constants

- [kSecPreferencesDomainUser](secpreferencesdomain/user.md): Indicates the user preference domain preferences.
- [kSecPreferencesDomainSystem](secpreferencesdomain/system.md): Indicates the system or daemon preference domain preferences.
- [kSecPreferencesDomainCommon](secpreferencesdomain/common.md): Indicates the preferences are common to everyone.
- [kSecPreferencesDomainDynamic](secpreferencesdomain/dynamic.md): Indicates a dynamic search list (typically provided by removable keychains such as smart cards).
