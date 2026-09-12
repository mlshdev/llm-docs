> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requeststorefrontidentifier(completionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requeststorefrontidentifier(completionhandler:))

# requestStorefrontIdentifier(completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the device’s storefront identifier.

> Use Storefront.current.id.

## Declaration

```swift
func requestStorefrontIdentifier(completionHandler: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func requestStorefrontIdentifier() async throws -> String
```

## Parameters

- `completionHandler`: A block that is called when the storefront ID is returned. The block takes the following parameters:

  - **storefrontIdentifier**: The identifier of a specific storefront.
  - **error**: An error value that indicates the reason for failure. Possible values are [SKError.Code.unknown](../skerror/code/unknown.md), [SKError.Code.cloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKError.Code.cloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

<a id="Discussion"></a>

## Discussion

You need to get the appropriate storefront before you specify a product, because product identifiers are meaningful within the context of a store.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCode(completionHandler:)](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilities(completionHandler:)](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

# requestStorefrontIdentifierWithCompletionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the device’s storefront identifier.

> Use Storefront.current.id.

## Declaration

```objectivec
- (void) requestStorefrontIdentifierWithCompletionHandler:(void (^)(NSString *storefrontIdentifier, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called when the storefront ID is returned. The block takes the following parameters:

  - **storefrontIdentifier**: The identifier of a specific storefront.
  - **error**: An error value that indicates the reason for failure. Possible values are [SKErrorUnknown](../skerror/code/unknown.md), [SKErrorCloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKErrorCloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

<a id="Discussion"></a>

## Discussion

You need to get the appropriate storefront before you specify a product, because product identifiers are meaningful within the context of a store.

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCodeWithCompletionHandler:](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilitiesWithCompletionHandler:](requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.
