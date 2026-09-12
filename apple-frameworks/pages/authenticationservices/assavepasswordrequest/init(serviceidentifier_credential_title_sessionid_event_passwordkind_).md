> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/assavepasswordrequest/init(serviceidentifier:credential:title:sessionid:event:passwordkind:)](https://developer.apple.com/documentation/authenticationservices/assavepasswordrequest/init(serviceidentifier:credential:title:sessionid:event:passwordkind:))

# init(serviceIdentifier:credential:title:sessionID:event:passwordKind:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```swift
init(serviceIdentifier: ASCredentialServiceIdentifier, credential: ASPasswordCredential, title: String?, sessionID: String, event: ASSavePasswordRequest.Event, passwordKind: ASGeneratedPassword.Kind?)
```

# initWithServiceIdentifier:credential:title:sessionID:event:passwordKind: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

## Declaration

```objectivec
- (instancetype) initWithServiceIdentifier:(ASCredentialServiceIdentifier *) serviceIdentifier credential:(ASPasswordCredential *) credential title:(NSString *) title sessionID:(NSString *) sessionID event:(ASSavePasswordRequestEvent) event passwordKind:(ASGeneratedPasswordKind) passwordKind;
```
