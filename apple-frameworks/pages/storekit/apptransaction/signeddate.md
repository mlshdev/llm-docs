> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/signeddate](https://developer.apple.com/documentation/storekit/apptransaction/signeddate)

# signedDate

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The date that the App Store signed the JWS app transaction.

## Declaration

```swift
let signedDate: Date
```

<a id="Discussion"></a>

## Discussion

Use the [signedDate](signeddate.md) to verify whether the certificate used to sign the app transaction was valid when the App Store signed the transaction.

## See Also

### Verifying the app transaction

- [deviceVerification](deviceverification.md): The device verification value to use to verify whether the app transaction belongs to the device.
- [deviceVerificationNonce](deviceverificationnonce.md): The UUID used to compute the device verification value.
