> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest/user](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationupgradepasswordtostrongpasswordrequest/user)

# user (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The user name of the account to upgrade.

## Declaration

```swift
var user: String { get }
```

## See Also

### Creating Upgrade Requests in Your App

- [init(user:serviceIdentifier:userInfo:)](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using a weak password to using a strong system-generated password.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.

# user (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The user name of the account to upgrade.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * user;
```

## See Also

### Creating Upgrade Requests in Your App

- [initWithUser:serviceIdentifier:userInfo:](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using a weak password to using a strong system-generated password.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.
