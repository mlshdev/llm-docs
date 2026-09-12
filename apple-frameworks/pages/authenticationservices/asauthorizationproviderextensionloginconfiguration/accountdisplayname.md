> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/accountdisplayname](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginconfiguration/accountdisplayname)

# accountDisplayName (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The display name for the account.

## Declaration

```swift
var accountDisplayName: String? { get set }
```

## Mentioned In

- [Configuring authentication with the identity provider (IdP)](../configuring-authentication-with-the-identity-provider-idp.md)

<a id="Discussion"></a>

## Discussion

The system uses this value for notifications and login prompts.

## See Also

### Obtaining the recommended configuration

- [invalidCredentialPredicate](invalidcredentialpredicate.md): The predicate string that identifies invalid credential errors.

# accountDisplayName (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The display name for the account.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * accountDisplayName;
```

## Mentioned In

- [Configuring authentication with the identity provider (IdP)](../configuring-authentication-with-the-identity-provider-idp.md)

<a id="Discussion"></a>

## Discussion

The system uses this value for notifications and login prompts.

## See Also

### Obtaining the recommended configuration

- [invalidCredentialPredicate](invalidcredentialpredicate.md): The predicate string that identifies invalid credential errors.
