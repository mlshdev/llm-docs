> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverification)

# deviceVerification

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The device verification value to use to verify whether the renewal information belongs to the device.

## Declaration

```swift
let deviceVerification: Data
```

<a id="Discussion"></a>

## Discussion

For more information, see [deviceVerificationID](../../../appstore/deviceverificationid.md).

## See Also

### Verifying subscription renewal information

- [deviceVerificationNonce](deviceverificationnonce.md): The UUID to use to compute the device verification value.
- [signedDate](signeddate.md): The date that the App Store signed the JWS renewal information.
