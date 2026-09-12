> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredential/credentialwithuser:password:](https://developer.apple.com/documentation/authenticationservices/aspasswordcredential/credentialwithuser:password:)

# credentialWithUser:password:

**Interface language:** Objective-C

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a password credential instance with a given user name and password.

## Declaration

```objectivec
+ (instancetype) credentialWithUser:(NSString *) user password:(NSString *) password;
```

## Parameters

- `user`: The username for the credential.
- `password`: The password for the credential.

<a id="return-value"></a>

## Return Value

The credential object.

## See Also

### Creating a credential

- [initWithUser:password:](init%28user_password_%29.md): Initializes a password credential.
