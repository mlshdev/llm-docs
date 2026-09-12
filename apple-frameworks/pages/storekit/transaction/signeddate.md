> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/signeddate](https://developer.apple.com/documentation/storekit/transaction/signeddate)

# signedDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The date that the App Store signed the JWS transaction.

## Declaration

```swift
let signedDate: Date
```

<a id="Discussion"></a>

## Discussion

Use the [signedDate](signeddate.md) to verify whether the certificate used to sign the transaction was valid when the App Store signed the transaction.

## See Also

### Verifying transactions

- [deviceVerification](deviceverification.md): The device verification value you use to verify whether the transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce.md): The UUID for computing the device verification value.
