> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/relinkaccount(using:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/relinkaccount(using:))

# relinkAccount(using:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 17.0+

Presents a sheet for the merchant to re-accept Tap to Pay on iPhone’s Terms and Conditions on a device using a different Apple Account.

## Declaration

```swift
func relinkAccount(using token: PaymentCardReader.Token) async throws
```

## Parameters

- `token`: The token from your payment service provider. This token contains the merchant identifier and must include permission for relinking.

<a id="discussion"></a>

## Discussion

To use Tap to Pay on iPhone, your participating payment service provider must provide the merchant using your app with a secure token. This token contains a unique identifier for each merchant and also specifies if relinking using a different Apple Account is allowed.

To use this method, a merchant must have already accepted the Terms and Conditions using [linkAccount(using:)](linkaccount%28using_%29.md).

After a merchant accepts the Terms and Conditions for their specific merchant identifier on one device, they don’t need to accept it again on additional devices that use the same identifier.

> **Throws**

> [PaymentCardReaderError.accountLinkingFailed](../paymentcardreadererror/accountlinkingfailed.md), [PaymentCardReaderError.accountLinkingCancelled](../paymentcardreadererror/accountlinkingcancelled.md), or other relevant errors in [PaymentCardReaderError](../paymentcardreadererror.md).

## See Also

### Displaying the Tap to Pay on iPhone’s terms and conditions

- [isAccountLinked(using:)](isaccountlinked%28using_%29.md): A Boolean value that indicates whether the account is already linked.
- [linkAccount(using:)](linkaccount%28using_%29.md): Presents a sheet for the merchant to accept Tap to Pay on iPhone’s Terms and Conditions on a device.
- [PaymentCardReader.Token](token.md): A secure token that you receive from your participating payment service provider.
