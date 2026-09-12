> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assavepasswordrequest](https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest)

# ASSavePasswordRequest (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```swift
class ASSavePasswordRequest
```

## Topics

### Initializers

- [init(coder:)](assavepasswordrequest/init%28coder_%29.md)
- [init(serviceIdentifier:credential:sessionID:event:)](assavepasswordrequest/init%28serviceidentifier_credential_sessionid_event_%29.md)
- [init(serviceIdentifier:credential:sessionID:event:passwordKind:)](assavepasswordrequest/init%28serviceidentifier_credential_sessionid_event_passwordkind_%29.md)
- [init(serviceIdentifier:credential:title:sessionID:event:)](assavepasswordrequest/init%28serviceidentifier_credential_title_sessionid_event_%29.md)
- [init(serviceIdentifier:credential:title:sessionID:event:passwordKind:)](assavepasswordrequest/init%28serviceidentifier_credential_title_sessionid_event_passwordkind_%29.md)

### Instance Properties

- [credential](assavepasswordrequest/credential.md): The credential to save.
- [event](assavepasswordrequest/event-swift.property.md): The type of event that the save request represents.
- [passwordKind](assavepasswordrequest/passwordkind.md): For passwordFilled events, this is the kind of password that was created.
- [serviceIdentifier](assavepasswordrequest/serviceidentifier.md): The identifier of the service for which the the credential should be associated.
- [sessionID](assavepasswordrequest/sessionid.md): An ID that represents a form’s session.
- [title](assavepasswordrequest/title.md): A user-displayable name for the password credential to be saved.

### Enumerations

- [ASSavePasswordRequest.Event](assavepasswordrequest/event-swift.enum.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

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

# ASSavePasswordRequest (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```objectivec
@interface ASSavePasswordRequest : NSObject
```

## Topics

### Instance Properties

- [credential](assavepasswordrequest/credential.md): The credential to save.
- [event](assavepasswordrequest/event-swift.property.md): The type of event that the save request represents.
- [passwordKind](assavepasswordrequest/passwordkind.md): For passwordFilled events, this is the kind of password that was created.
- [serviceIdentifier](assavepasswordrequest/serviceidentifier.md): The identifier of the service for which the the credential should be associated.
- [sessionID](assavepasswordrequest/sessionid.md): An ID that represents a form’s session.
- [title](assavepasswordrequest/title.md): A user-displayable name for the password credential to be saved.

### Instance Methods

- [initWithServiceIdentifier:credential:sessionID:event:](assavepasswordrequest/init%28serviceidentifier_credential_sessionid_event_%29.md)
- [initWithServiceIdentifier:credential:sessionID:event:passwordKind:](assavepasswordrequest/init%28serviceidentifier_credential_sessionid_event_passwordkind_%29.md)
- [initWithServiceIdentifier:credential:title:sessionID:event:](assavepasswordrequest/init%28serviceidentifier_credential_title_sessionid_event_%29.md)
- [initWithServiceIdentifier:credential:title:sessionID:event:passwordKind:](assavepasswordrequest/init%28serviceidentifier_credential_title_sessionid_event_passwordkind_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
