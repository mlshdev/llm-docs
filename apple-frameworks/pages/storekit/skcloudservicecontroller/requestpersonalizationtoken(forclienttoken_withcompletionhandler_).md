> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requestpersonalizationtoken(forclienttoken:withcompletionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requestpersonalizationtoken(forclienttoken:withcompletionhandler:))

# requestPersonalizationToken(forClientToken:withCompletionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · Mac Catalyst 10.3+ (deprecated in 11.0) · tvOS 10.3+ (deprecated in 11.0)

## Declaration

```swift
func requestPersonalizationToken(forClientToken clientToken: String, withCompletionHandler completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCode(completionHandler:)](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilities(completionHandler:)](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.

# requestPersonalizationTokenForClientToken:withCompletionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 11.0) · iPadOS 10.3+ (deprecated in 11.0) · tvOS 10.3+ (deprecated in 11.0)

## Declaration

```objectivec
- (void) requestPersonalizationTokenForClientToken:(NSString *) clientToken withCompletionHandler:(void (^)(NSString *personalizationToken, NSError *error)) completionHandler;
```

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCodeWithCompletionHandler:](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilitiesWithCompletionHandler:](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
