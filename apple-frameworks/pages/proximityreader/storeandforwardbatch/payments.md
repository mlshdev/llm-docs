> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/payments](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/payments)

# payments

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The payments that are part of the batch.

## Declaration

```swift
let payments: [StoreAndForwardBatch.StoredPaymentCardReadResult]
```

## See Also

### Getting the batch details

- [id](id.md): The unique identifier for the batch.
- [count](count.md): The number of payments this batch includes.
- [intermediateCertificate](intermediatecertificate.md): An array that contains the intermediate certificates that the system uses to sign the leaf certificate.
- [leafCertificate](leafcertificate.md): The leaf certificate the framework uses to sign this batch.
- [signature](signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the batch.
