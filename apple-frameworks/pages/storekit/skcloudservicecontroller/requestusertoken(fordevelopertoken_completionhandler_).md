> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requestusertoken(fordevelopertoken:completionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requestusertoken(fordevelopertoken:completionhandler:))

# requestUserToken(forDeveloperToken:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a user token that you use to access personalized Apple Music content.

> Use MusicKit.

## Declaration

```swift
func requestUserToken(forDeveloperToken developerToken: String, completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func requestUserToken(forDeveloperToken developerToken: String) async throws -> String
```

## Parameters

- `developerToken`: A signed and encrypted JWT token used to authenticate the developer in Apple Music API requests.
- `completionHandler`: A completion block that includes the following parameters:

  - **userToken**: A token that identifies the user.
  - **error**: The error that occurred, if any.

<a id="Discussion"></a>

## Discussion

Use this method with your developer token to get a token that authenticates the user in personalized Apple Music API requests. Note that personalized requests return user-specific data. Errors 401 and 403 only occur when requesting a music user token. They do not occur for any of the other Apple Music API requests.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestStorefrontCountryCode(completionHandler:)](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilities(completionHandler:)](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

# requestUserTokenForDeveloperToken:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a user token that you use to access personalized Apple Music content.

> Use MusicKit.

## Declaration

```objectivec
- (void) requestUserTokenForDeveloperToken:(NSString *) developerToken completionHandler:(void (^)(NSString *userToken, NSError *error)) completionHandler;
```

## Parameters

- `developerToken`: A signed and encrypted JWT token used to authenticate the developer in Apple Music API requests.
- `completionHandler`: A completion block that includes the following parameters:

  - **userToken**: A token that identifies the user.
  - **error**: The error that occurred, if any.

<a id="Discussion"></a>

## Discussion

Use this method with your developer token to get a token that authenticates the user in personalized Apple Music API requests. Note that personalized requests return user-specific data. Errors 401 and 403 only occur when requesting a music user token. They do not occur for any of the other Apple Music API requests.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestStorefrontCountryCodeWithCompletionHandler:](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilitiesWithCompletionHandler:](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.
