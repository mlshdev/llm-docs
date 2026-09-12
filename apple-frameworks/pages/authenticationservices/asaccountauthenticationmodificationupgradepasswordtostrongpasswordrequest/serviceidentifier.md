> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest/serviceidentifier](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest/serviceidentifier)

# serviceIdentifier (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An identifier that represents a particular service that the user needs a credential for, like a web site.

## Declaration

```swift
var serviceIdentifier: ASCredentialServiceIdentifier { get }
```

## See Also

### Creating Upgrade Requests in Your App

- [init(user:serviceIdentifier:userInfo:)](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using a weak password to using a strong system-generated password.
- [user](user.md): The user name of the account to upgrade.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.

# serviceIdentifier (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An identifier that represents a particular service that the user needs a credential for, like a web site.

## Declaration

```objectivec
@property (nonatomic, readonly) ASCredentialServiceIdentifier * serviceIdentifier;
```

## See Also

### Creating Upgrade Requests in Your App

- [initWithUser:serviceIdentifier:userInfo:](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using a weak password to using a strong system-generated password.
- [user](user.md): The user name of the account to upgrade.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.
