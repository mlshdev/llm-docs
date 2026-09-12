> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/deviceverificationnonce](https://developer.apple.com/documentation/storekit/apptransaction/deviceverificationnonce)

# deviceVerificationNonce

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The UUID used to compute the device verification value.

## Declaration

```swift
let deviceVerificationNonce: UUID
```

<a id="Discussion"></a>

## Discussion

For more information, see [deviceVerificationID](../appstore/deviceverificationid.md).

## See Also

### Verifying the app transaction

- [deviceVerification](deviceverification.md): The device verification value to use to verify whether the app transaction belongs to the device.
- [signedDate](signeddate.md): The date that the App Store signed the JWS app transaction.
