> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/userinfo](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/userinfo)

# userInfo (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains values to pass to your account modification extension.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

## See Also

### Creating Upgrade Requests in Your App

- [init(user:serviceIdentifier:userInfo:)](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using passwords to using Sign in with Apple.
- [user](user.md): The user name of the account to upgrade.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.

# userInfo (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A dictionary that contains values to pass to your account modification extension.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary * userInfo;
```

## See Also

### Creating Upgrade Requests in Your App

- [initWithUser:serviceIdentifier:userInfo:](init%28user_serviceidentifier_userinfo_%29.md): Creates a request to upgrade from using passwords to using Sign in with Apple.
- [user](user.md): The user name of the account to upgrade.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
