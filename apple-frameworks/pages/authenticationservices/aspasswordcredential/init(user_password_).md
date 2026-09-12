> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredential/init(user:password:)](https://developer.apple.com/documentation/authenticationservices/aspasswordcredential/init(user:password:))

# init(user:password:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a password credential.

## Declaration

```swift
init(user: String, password: String)
```

## Parameters

- `user`: The username associated with the credential.
- `password`: The password associated with the credential.

# initWithUser:password: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes a password credential.

## Declaration

```objectivec
- (instancetype) initWithUser:(NSString *) user password:(NSString *) password;
```

## Parameters

- `user`: The username associated with the credential.
- `password`: The password associated with the credential.

## See Also

### Creating a credential

- [credentialWithUser:password:](credentialwithuser_password_.md): Creates a password credential instance with a given user name and password.
