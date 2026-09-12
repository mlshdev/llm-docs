> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialrequest/excludedcredentials](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialrequest/excludedcredentials)

# excludedCredentials (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A list of IDs that represent existing passkeys for the account, to prevent creation of duplicate passkeys.

## Declaration

```swift
var excludedCredentials: [ASAuthorizationPlatformPublicKeyCredentialDescriptor]? { get }
```

<a id="discussion"></a>

## Discussion

This value corresponds to the WebAuthn parameter `excludeCredentials`.

# excludedCredentials (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A list of IDs that represent existing passkeys for the account, to prevent creation of duplicate passkeys.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<ASAuthorizationPlatformPublicKeyCredentialDescriptor *> * excludedCredentials;
```

<a id="discussion"></a>

## Discussion

This value corresponds to the WebAuthn parameter `excludeCredentials`.
