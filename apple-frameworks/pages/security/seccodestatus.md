> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodestatus](https://developer.apple.com/documentation/security/seccodestatus)

# SecCodeStatus (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Operational flags attached by code signing services to running code.

## Declaration

```swift
struct SecCodeStatus
```

<a id="overview"></a>

## Overview

These flags are maintained by the code’s host, and can be read by anyone. Running code may change its own flags, and root may change anyone’s flags. However, each of these flags can change in only one direction and never back, for the lifetime of the code. Not even root can violate this restriction.

All of the bits in the [SecCodeStatus](seccodestatus.md) enumeration are reserved by Apple. If you set any bits not defined here, the behavior is undefined.

## Topics

### Initializers

- [init(rawValue:)](seccodestatus/init%28rawvalue_%29.md)

### Constants

- [valid](seccodestatus/valid.md): The code is dynamically valid.
- [hard](seccodestatus/hard.md): The code prefers to be denied access to resources if gaining access would invalidate it.
- [kill](seccodestatus/kill.md): The code wants to be terminated if it ever loses its validity.
- [debugged](seccodestatus/debugged.md): The code has been debugged by another process that was allowed to do so.
- [platform](seccodestatus/platform.md): The code ships with the operating system and is signed by Apple.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# SecCodeStatus (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Operational flags attached by code signing services to running code.

## Declaration

```objectivec
enum SecCodeStatus : uint32_t;
```

<a id="overview"></a>

## Overview

These flags are maintained by the code’s host, and can be read by anyone. Running code may change its own flags, and root may change anyone’s flags. However, each of these flags can change in only one direction and never back, for the lifetime of the code. Not even root can violate this restriction.

All of the bits in the [SecCodeStatus](seccodestatus.md) enumeration are reserved by Apple. If you set any bits not defined here, the behavior is undefined.

## Topics

### Constants

- [kSecCodeStatusValid](seccodestatus/valid.md): The code is dynamically valid.
- [kSecCodeStatusHard](seccodestatus/hard.md): The code prefers to be denied access to resources if gaining access would invalidate it.
- [kSecCodeStatusKill](seccodestatus/kill.md): The code wants to be terminated if it ever loses its validity.
- [kSecCodeStatusDebugged](seccodestatus/debugged.md): The code has been debugged by another process that was allowed to do so.
- [kSecCodeStatusPlatform](seccodestatus/platform.md): The code ships with the operating system and is signed by Apple.
