> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/apptransaction/deviceverification](https://developer.apple.com/documentation/storekit/apptransaction/deviceverification)

# deviceVerification

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The device verification value to use to verify whether the app transaction belongs to the device.

## Declaration

```swift
let deviceVerification: Data
```

<a id="Discussion"></a>

## Discussion

For more information, see [deviceVerificationID](../appstore/deviceverificationid.md).

## See Also

### Verifying the app transaction

- [deviceVerificationNonce](deviceverificationnonce.md): The UUID used to compute the device verification value.
- [signedDate](signeddate.md): The date that the App Store signed the JWS app transaction.
