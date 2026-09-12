> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/deviceverificationnonce](https://developer.apple.com/documentation/storekit/transaction/deviceverificationnonce)

# deviceVerificationNonce

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The UUID for computing the device verification value.

## Declaration

```swift
let deviceVerificationNonce: UUID
```

<a id="Discussion"></a>

## Discussion

Use the lowercased nonce when computing the [deviceVerification](deviceverification.md) value.

## See Also

### Verifying transactions

- [deviceVerification](deviceverification.md): The device verification value you use to verify whether the transaction belongs to the device.
- [signedDate](signeddate.md): The date that the App Store signed the JWS transaction.
