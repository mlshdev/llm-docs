> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:shouldauthenticateaccountproviderwithidentifier:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerdelegate/accountmanager(_:shouldauthenticateaccountproviderwithidentifier:))

# accountManager(\_:shouldAuthenticateAccountProviderWithIdentifier:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Asks the delegate whether to authenticate the user with the selected provider.

## Declaration

```swift
optional func accountManager(_ accountManager: VSAccountManager, shouldAuthenticateAccountProviderWithIdentifier accountProviderIdentifier: String) -> Bool
```

## Parameters

- `accountManager`: The account manager instance that requests the authentication view controller.
- `accountProviderIdentifier`: The supported account provider the user has selected.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to attempt authentication with the selected provider; otherwise, return [false](https://developer.apple.com/documentation/swift/false) to respond with an unsupported provider error.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user chooses a provider from the list of supported providers; it isn’t called if the user selects “Other TV Providers”. Use this method to temporarily refrain from authenticating the user with the supported provider during a brief outage or service degradation.

If you don’t implement this method, the user can authenticate with all supported providers.

# accountManager:shouldAuthenticateAccountProviderWithIdentifier: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Asks the delegate whether to authenticate the user with the selected provider.

## Declaration

```objectivec
- (BOOL) accountManager:(VSAccountManager *) accountManager shouldAuthenticateAccountProviderWithIdentifier:(NSString *) accountProviderIdentifier;
```

## Parameters

- `accountManager`: The account manager instance that requests the authentication view controller.
- `accountProviderIdentifier`: The supported account provider the user has selected.

<a id="return-value"></a>

## Return Value

Return [true](https://developer.apple.com/documentation/swift/true) to attempt authentication with the selected provider; otherwise, return [false](https://developer.apple.com/documentation/swift/false) to respond with an unsupported provider error.

<a id="Discussion"></a>

## Discussion

The system calls this method when the user chooses a provider from the list of supported providers; it isn’t called if the user selects “Other TV Providers”. Use this method to temporarily refrain from authenticating the user with the supported provider during a brief outage or service degradation.

If you don’t implement this method, the user can authenticate with all supported providers.
