> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationsinglesignonprovider/init(identityprovider:)

# init(identityProvider:) (Swift)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a single sign-on (SSO) authorization provider.

## Declaration

```swift
convenience init(identityProvider url: URL)
```

## Parameters

- `url`: The URL of the identity provider.

<a id="return-value"></a>

## Return Value

A single sign-on authorization provider.

# authorizationProviderWithIdentityProviderURL: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a single sign-on (SSO) authorization provider.

## Declaration

```objectivec
+ (instancetype) authorizationProviderWithIdentityProviderURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the identity provider.

<a id="return-value"></a>

## Return Value

A single sign-on authorization provider.
