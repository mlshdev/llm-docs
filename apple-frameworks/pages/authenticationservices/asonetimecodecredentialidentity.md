> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asonetimecodecredentialidentity](https://developer.apple.com/documentation/authenticationservices/asonetimecodecredentialidentity)

# ASOneTimeCodeCredentialIdentity (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```swift
class ASOneTimeCodeCredentialIdentity
```

<a id="overview"></a>

## Overview

An ASOneTimeCodeCredentialIdentity is used to describe an identity that can use a service upon successful one-time code based authentication. Use this class to save entries into ASCredentialIdentityStore.

## Topics

### Initializers

- [init(coder:)](asonetimecodecredentialidentity/init%28coder_%29.md)
- [init(serviceIdentifier:label:recordIdentifier:)](asonetimecodecredentialidentity/init%28serviceidentifier_label_recordidentifier_%29.md)

### Instance Properties

- [label](asonetimecodecredentialidentity/label.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialIdentity](ascredentialidentity.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ASOneTimeCodeCredentialIdentity (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

## Declaration

```objectivec
@interface ASOneTimeCodeCredentialIdentity : NSObject
```

<a id="overview"></a>

## Overview

An ASOneTimeCodeCredentialIdentity is used to describe an identity that can use a service upon successful one-time code based authentication. Use this class to save entries into ASCredentialIdentityStore.

## Topics

### Instance Properties

- [label](asonetimecodecredentialidentity/label.md)

### Instance Methods

- [initWithServiceIdentifier:label:recordIdentifier:](asonetimecodecredentialidentity/init%28serviceidentifier_label_recordidentifier_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialIdentity](ascredentialidentity.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
