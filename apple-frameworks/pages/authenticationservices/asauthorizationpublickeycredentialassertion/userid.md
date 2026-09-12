> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertion/userid](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertion/userid)

# userID (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A user identifier for the assertion.

## Declaration

```swift
var userID: Data! { get }
```

## See Also

### Getting the properties

- [signature](signature.md): The signature for the assertion.
- [rawAuthenticatorData](rawauthenticatordata.md): A byte sequence that contains additional information about the credential.

# userID (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A user identifier for the assertion.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * userID;
```

## See Also

### Getting the properties

- [signature](signature.md): The signature for the assertion.
- [rawAuthenticatorData](rawauthenticatordata.md): A byte sequence that contains additional information about the credential.
