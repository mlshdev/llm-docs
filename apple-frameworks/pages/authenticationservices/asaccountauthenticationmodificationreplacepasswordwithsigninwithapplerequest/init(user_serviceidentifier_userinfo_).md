> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/init(user:serviceidentifier:userinfo:)](https://developer.apple.com/documentation/authenticationservices/asaccountauthenticationmodificationreplacepasswordwithsigninwithapplerequest/init(user:serviceidentifier:userinfo:))

# init(user:serviceIdentifier:userInfo:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a request to upgrade from using passwords to using Sign in with Apple.

## Declaration

```swift
init(user: String, serviceIdentifier: ASCredentialServiceIdentifier, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `user`: The user name of the account to upgrade.
- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `userInfo`: A dictionary that contains values to pass to your account modification extension.

<a id="return-value"></a>

## Return Value

An initialized request object with details about the account to upgrade to Sign in with Apple.

<a id="Discussion"></a>

## Discussion

If your extension needs information to authenticate with your server, such as an authentication token, set it in the `userInfo` dictionary before calling this method.

## See Also

### Creating Upgrade Requests in Your App

- [user](user.md): The user name of the account to upgrade.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.

# initWithUser:serviceIdentifier:userInfo: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Creates a request to upgrade from using passwords to using Sign in with Apple.

## Declaration

```objectivec
- (instancetype) initWithUser:(NSString *) user serviceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier userInfo:(NSDictionary *) userInfo;
```

## Parameters

- `user`: The user name of the account to upgrade.
- `serviceIdentifier`: An identifier that represents a particular service that the user needs a credential for, like a web site.
- `userInfo`: A dictionary that contains values to pass to your account modification extension.

<a id="return-value"></a>

## Return Value

An initialized request object with details about the account to upgrade to Sign in with Apple.

<a id="Discussion"></a>

## Discussion

If your extension needs information to authenticate with your server, such as an authentication token, set it in the `userInfo` dictionary before calling this method.

## See Also

### Creating Upgrade Requests in Your App

- [user](user.md): The user name of the account to upgrade.
- [serviceIdentifier](serviceidentifier.md): An identifier that represents a particular service that the user needs a credential for, like a web site.
- [userInfo](userinfo.md): A dictionary that contains values to pass to your account modification extension.
