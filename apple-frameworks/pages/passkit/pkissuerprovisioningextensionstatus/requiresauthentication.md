> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionstatus/requiresauthentication](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionstatus/requiresauthentication)

# requiresAuthentication (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

A Boolean value that indicates whether adding a card requires an authorization-user-interface extension provided by your app.

## Declaration

```swift
var requiresAuthentication: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you return `true` your app must provide a [PKIssuerProvisioningExtensionAuthorizationProviding](../pkissuerprovisioningextensionauthorizationproviding.md) UI extension.

# requiresAuthentication (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

A Boolean value that indicates whether adding a card requires an authorization-user-interface extension provided by your app.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresAuthentication;
```

<a id="Discussion"></a>

## Discussion

If you return `true` your app must provide a [PKIssuerProvisioningExtensionAuthorizationProviding](../pkissuerprovisioningextensionauthorizationproviding.md) UI extension.
