> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/profilepictureforuser(using:completion:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionregistrationhandler/profilepictureforuser(using:completion:))

# profilePictureForUser(using:completion:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

## Declaration

```swift
optional func profilePictureForUser(using loginManager: ASAuthorizationProviderExtensionLoginManager, completion: @escaping @Sendable (Data) -> Void)
```

```swift
optional func profilePictureForUser(using loginManager: ASAuthorizationProviderExtensionLoginManager) async -> Data
```

<a id="discussion"></a>

## Discussion

Request the profile picture for the current user in jpeg format.

# profilePictureForUserUsingLoginManager:completion: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

## Declaration

```objectivec
- (void) profilePictureForUserUsingLoginManager:(ASAuthorizationProviderExtensionLoginManager *) loginManager completion:(void (^)(NSData *jpegData)) completion;
```

<a id="discussion"></a>

## Discussion

Request the profile picture for the current user in jpeg format.
