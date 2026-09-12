> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asverificationcode](https://developer.apple.com/documentation/authenticationservices/asverificationcode)

# ASVerificationCode

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

This is an instance of a verification code.

## Declaration

```swift
struct ASVerificationCode
```

<a id="overview"></a>

## Overview

It represents a code at a specific point in time.

## Topics

### Initializers

- [init(code:timestamp:domain:embeddedDomains:id:)](asverificationcode/init%28code_timestamp_domain_embeddeddomains_id_%29.md)

### Instance Properties

- [code](asverificationcode/code.md): The system’s best understanding of the code that can be used for verification purposes.
- [domain](asverificationcode/domain.md): The domain associated with the code, if one exists.
- [embeddedDomains](asverificationcode/embeddeddomains.md): Embedded page or frame domains. For domain-bound codes, this array contains all the domains specified after the code field.
- [timestamp](asverificationcode/timestamp.md): Date when the message was received by the device.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
