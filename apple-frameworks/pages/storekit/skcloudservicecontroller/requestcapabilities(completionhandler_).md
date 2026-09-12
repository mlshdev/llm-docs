> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller/requestcapabilities(completionhandler:)](https://developer.apple.com/documentation/storekit/skcloudservicecontroller/requestcapabilities(completionhandler:))

# requestCapabilities(completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the current capabilities associated with the Music library on the device.

> Use MusicSubscription.current from MusicKit.

## Declaration

```swift
func requestCapabilities(completionHandler: @escaping @Sendable (SKCloudServiceCapability, (any Error)?) -> Void)
```

```swift
func requestCapabilities() async throws -> SKCloudServiceCapability
```

## Parameters

- `completionHandler`: A block that is called when the device’s current capabilities are determined. The block takes the following parameters:

  - **capabilities**: Flags that indicate the device’s capabilities. For possible values, see [SKCloudServiceCapability](../skcloudservicecapability.md).
  - **error**: An error value that indicates the reason for failure. Possible values are [SKError.Code.unknown](../skerror/code/unknown.md), [SKError.Code.cloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKError.Code.cloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCode(completionHandler:)](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

# requestCapabilitiesWithCompletionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

Gets the current capabilities associated with the Music library on the device.

> Use MusicSubscription.current from MusicKit.

## Declaration

```objectivec
- (void) requestCapabilitiesWithCompletionHandler:(void (^)(SKCloudServiceCapability capabilities, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called when the device’s current capabilities are determined. The block takes the following parameters:

  - **capabilities**: Flags that indicate the device’s capabilities. For possible values, see [SKCloudServiceCapability](../skcloudservicecapability.md).
  - **error**: An error value that indicates the reason for failure. Possible values are [SKErrorUnknown](../skerror/code/unknown.md), [SKErrorCloudServicePermissionDenied](../skerror/code/cloudservicepermissiondenied.md), and [SKErrorCloudServiceNetworkConnectionFailed](../skerror/code/cloudservicenetworkconnectionfailed.md).

## Mentioned In

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md)
- [Offering Apple Music Subscription in Your App](../offering-apple-music-subscription-in-your-app.md)

<a id="Discussion"></a>

## Discussion

## See Also

### Determining capabilities

- [Determining a person’s Apple Music capabilities](../determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCodeWithCompletionHandler:](requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [SKCloudServiceCapability](../skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.
