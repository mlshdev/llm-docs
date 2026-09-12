> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requeststorefrontcountrycode(completionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requeststorefrontcountrycode(completionhandler:))

# requestStorefrontCountryCode(completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the country code for the storefront associated with a customer’s iTunes account.

> Use MusicDataRequest.currentCountryCode from MusicKit.

## Declaration

```swift
func requestStorefrontCountryCode(completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func requestStorefrontCountryCode() async throws -> String
```

## Parameters

- `completionHandler`: A block that is called when the storefront country code is returned. The block takes the following parameters:

  - **storefrontCountryCode**: The country code of a specific storefront.
  - **error**: An error value that indicates the reason for failure. See [SKError.Code](../skerror/code.md) for possible error values.

<a id="Discussion"></a>

## Discussion

You need to get the appropriate storefront country code before you specify a product as each country or region contains different products.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestCapabilities(completionHandler:)](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

# requestStorefrontCountryCodeWithCompletionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the country code for the storefront associated with a customer’s iTunes account.

> Use MusicDataRequest.currentCountryCode from MusicKit.

## Declaration

```objectivec
- (void) requestStorefrontCountryCodeWithCompletionHandler:(void (^)(NSString *storefrontCountryCode, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called when the storefront country code is returned. The block takes the following parameters:

  - **storefrontCountryCode**: The country code of a specific storefront.
  - **error**: An error value that indicates the reason for failure. See [SKErrorCode](../skerror/code.md) for possible error values.

<a id="Discussion"></a>

## Discussion

You need to get the appropriate storefront country code before you specify a product as each country or region contains different products.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestCapabilitiesWithCompletionHandler:](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.
