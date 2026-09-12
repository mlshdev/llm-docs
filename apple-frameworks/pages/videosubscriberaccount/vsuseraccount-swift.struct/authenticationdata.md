> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccount-swift.struct/authenticationdata](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccount-swift.struct/authenticationdata)

# authenticationData

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS

A string that represents an authentication token for the user account to authenticate with a provider.

## Declaration

```swift
var authenticationData: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The authentication token or data used to maintain the authentication state for the account in your application. The system provides the token or data to the application JS during account refresh requests so that the account can fetch billing cycle dates, account validity, or any other account data.

hen you fetch accounts using [VSUserAccountManager](../vsuseraccountmanager.md), if an account is pulled from a different device and the person isn’t signed in to the current device, you can use the token or data to authenticate them seamlessly without requiring their username and password. This data isn’t accessible by Apple.

## See Also

### User account information

- [accountProviderIdentifier](accountprovideridentifier.md): A string that uniquely identifies a provider known to Apple that provides the user account.
- [accountType](accounttype-swift.property.md): A constant that represents whether a user has access to paid content.
- [billingIdentifier](billingidentifier.md): A string that Identifies the billing group associated with the user account’s subscription.
- [deviceCategory](devicecategory.md): A constant that indicates whether the device from which the user registered is mobile.
- [VSUserAccount.OriginatingDeviceCategory](originatingdevicecategory.md): Constants that represent whether the device from which the user originally registered is mobile.
- [identifier](identifier.md): A string you provide that uniquely identifies the account.
- [isFromCurrentDevice](isfromcurrentdevice.md): A Boolean value that indicates whether the user originated their account on the current device.
- [isSignedOut](issignedout.md): A Boolean value that indicates whether the user has signed out of their account.
- [requiresSystemTrust](requiressystemtrust.md): A Boolean value that indicates whether the update URL must have a system-trusted certificate.
- [subscriptionBillingCycleEndDate](subscriptionbillingcycleenddate.md): A date that indicates when the billing cycle ends for a paid account.
- [tierIdentifiers](tieridentifiers.md): An array of strings that identify a subset of content from your catalog that the subscriber can play.
- [updateURL](updateurl.md): A URL that points to the application’s JavaScript endpoint for update requests.
