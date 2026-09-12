> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationpublickeycredentialassertion/signature](https://developer.apple.com/documentation/authenticationservices/asauthorizationpublickeycredentialassertion/signature)

# signature (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The signature for the assertion.

## Declaration

```swift
var signature: Data! { get }
```

## See Also

### Getting the properties

- [userID](userid.md): A user identifier for the assertion.
- [rawAuthenticatorData](rawauthenticatordata.md): A byte sequence that contains additional information about the credential.

# signature (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The signature for the assertion.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * signature;
```

## See Also

### Getting the properties

- [userID](userid.md): A user identifier for the assertion.
- [rawAuthenticatorData](rawauthenticatordata.md): A byte sequence that contains additional information about the credential.
