> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingsdomain](https://developer.apple.com/documentation/security/sectrustsettingsdomain)

# SecTrustSettingsDomain (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The trust settings domains.

## Declaration

```swift
enum SecTrustSettingsDomain
```

## Topics

### Constants

- [SecTrustSettingsDomain.user](sectrustsettingsdomain/user.md): Per-user trust settings.
- [SecTrustSettingsDomain.admin](sectrustsettingsdomain/admin.md): Locally administered, system-wide trust settings.
- [SecTrustSettingsDomain.system](sectrustsettingsdomain/system.md): System trust settings.

### Initializers

- [init(rawValue:)](sectrustsettingsdomain/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecTrustSettingsDomain (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The trust settings domains.

## Declaration

```objectivec
enum SecTrustSettingsDomain : uint32_t;
```

## Topics

### Constants

- [kSecTrustSettingsDomainUser](sectrustsettingsdomain/user.md): Per-user trust settings.
- [kSecTrustSettingsDomainAdmin](sectrustsettingsdomain/admin.md): Locally administered, system-wide trust settings.
- [kSecTrustSettingsDomainSystem](sectrustsettingsdomain/system.md): System trust settings.
