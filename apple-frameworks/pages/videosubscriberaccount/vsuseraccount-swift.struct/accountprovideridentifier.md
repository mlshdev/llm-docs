> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccount-swift.struct/accountprovideridentifier](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccount-swift.struct/accountprovideridentifier)

# accountProviderIdentifier

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS

A string that uniquely identifies a provider known to Apple that provides the user account.

## Declaration

```swift
var accountProviderIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For use only with TV Provider Authentication integrated apps.

## See Also

### User account information

- [accountType](accounttype-swift.property.md): A constant that represents whether a user has access to paid content.
- [authenticationData](authenticationdata.md): A string that represents an authentication token for the user account to authenticate with a provider.
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
