> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/isaccountlinked(using:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/isaccountlinked(using:))

# isAccountLinked(using:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the account is already linked.

## Declaration

```swift
func isAccountLinked(using token: PaymentCardReader.Token) async throws -> Bool
```

## Parameters

- `token`: The token from your payment service provider. This token contains the merchant identifier.

<a id="discussion"></a>

## Discussion

Call [linkAccount(using:)](linkaccount%28using_%29.md) to link an account.

> **Note**

> If [prepare(using:)](prepare%28using_%29.md) throws an [PaymentCardReaderError.accountNotLinked](../paymentcardreadererror/accountnotlinked.md) error call [linkAccount(using:)](linkaccount%28using_%29.md) again to relink the account.

> **Throws**

> [PaymentCardReaderError](../paymentcardreadererror.md)

## See Also

### Displaying the Tap to Pay on iPhone’s terms and conditions

- [linkAccount(using:)](linkaccount%28using_%29.md): Presents a sheet for the merchant to accept Tap to Pay on iPhone’s Terms and Conditions on a device.
- [relinkAccount(using:)](relinkaccount%28using_%29.md): Presents a sheet for the merchant to re-accept Tap to Pay on iPhone’s Terms and Conditions on a device using a different Apple Account.
- [PaymentCardReader.Token](token.md): A secure token that you receive from your participating payment service provider.
