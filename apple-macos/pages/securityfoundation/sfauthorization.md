> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization](https://developer.apple.com/documentation/securityfoundation/sfauthorization)

# SFAuthorization (Swift)

**Framework:** Security Foundation  
**Kind:** Class  
**Availability:** macOS 10.3+

A class that allows you to restrict a user’s access to particular features in your Mac app or daemon.

## Declaration

```swift
class SFAuthorization
```

<a id="overview"></a>

## Overview

> **Important**

> The authorization services API is not supported within an app sandbox because it allows privilege escalation.

The [SFAuthorization](sfauthorization.md) class is an interface for some of the functions in the Authorization Services API. You can use the [authorizationRef()](sfauthorization/authorizationref%28%29.md) method to obtain an authorization reference, used in other calls to Authorization Services functions. The Authorization Services API is documented in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## Topics

### Allocating and initializing an authorization object

- [authorization()](sfauthorization/authorization%28%29.md): Returns an authorization object initialized with a default environment, flags, and rights.
- [authorization(with:rights:environment:)](sfauthorization/authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init()](sfauthorization/init%28%29.md): Initializes an authorization object with default environment, flags, and rights.
- [init(flags:rights:environment:)](sfauthorization/init%28flags_rights_environment_%29.md): Initializes an authorization object with the specified flags, rights, and environment.

### Obtaining an authorization reference

- [authorizationRef()](sfauthorization/authorizationref%28%29.md): Returns the authorization reference for this object.

### Authorizing rights

- [obtain(withRights:flags:environment:authorizedRights:)](sfauthorization/obtain%28withrights_flags_environment_authorizedrights_%29.md): Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [obtain(withRight:flags:)](sfauthorization/obtain%28withright_flags_%29.md): Authorizes and preauthorizes one specific right.

### Preventing credentials from being shared

- [invalidateCredentials()](sfauthorization/invalidatecredentials%28%29.md): Prevents any rights that were obtained by this object from being preserved.

### Initializers

- [init(coder:)](sfauthorization/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

# SFAuthorization (Objective-C)

**Framework:** Security Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

A class that allows you to restrict a user’s access to particular features in your Mac app or daemon.

## Declaration

```objectivec
@interface SFAuthorization : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

> The authorization services API is not supported within an app sandbox because it allows privilege escalation.

The [SFAuthorization](sfauthorization.md) class is an interface for some of the functions in the Authorization Services API. You can use the [authorizationRef](sfauthorization/authorizationref%28%29.md) method to obtain an authorization reference, used in other calls to Authorization Services functions. The Authorization Services API is documented in [Authorization Services](https://developer.apple.com/documentation/security/authorization-services).

## Topics

### Allocating and initializing an authorization object

- [authorization](sfauthorization/authorization%28%29.md): Returns an authorization object initialized with a default environment, flags, and rights.
- [authorizationWithFlags:rights:environment:](sfauthorization/authorization%28with_rights_environment_%29.md): Returns an authorization object initialized with the specified flags, rights and environment.
- [init](sfauthorization/init%28%29.md): Initializes an authorization object with default environment, flags, and rights.
- [initWithFlags:rights:environment:](sfauthorization/init%28flags_rights_environment_%29.md): Initializes an authorization object with the specified flags, rights, and environment.

### Obtaining an authorization reference

- [authorizationRef](sfauthorization/authorizationref%28%29.md): Returns the authorization reference for this object.

### Authorizing rights

- [permitWithRights:flags:environment:authorizedRights:](sfauthorization/permitwithrights_flags_environment_authorizedrights_.md): Deprecated. Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [obtainWithRights:flags:environment:authorizedRights:error:](sfauthorization/obtain%28withrights_flags_environment_authorizedrights_%29.md): Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [permitWithRight:flags:](sfauthorization/permitwithright_flags_.md): Deprecated. Authorizes and preauthorizes one specific right.
- [obtainWithRight:flags:error:](sfauthorization/obtain%28withright_flags_%29.md): Authorizes and preauthorizes one specific right.

### Preventing credentials from being shared

- [invalidateCredentials](sfauthorization/invalidatecredentials%28%29.md): Prevents any rights that were obtained by this object from being preserved.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
