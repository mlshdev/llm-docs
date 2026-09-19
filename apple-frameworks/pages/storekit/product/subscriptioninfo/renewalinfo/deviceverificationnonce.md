> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/deviceverificationnonce

# deviceVerificationNonce

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The UUID to use to compute the device verification value.

## Declaration

```swift
let deviceVerificationNonce: UUID
```

<a id="Discussion"></a>

## Discussion

For more information, see [deviceVerificationID](../../../appstore/deviceverificationid.md).

## See Also

### Verifying subscription renewal information

- [deviceVerification](deviceverification.md): The device verification value to use to verify whether the renewal information belongs to the device.
- [signedDate](signeddate.md): The date that the App Store signed the JWS renewal information.
