> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/count](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/count)

# count

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The number of payments this batch includes.

## Declaration

```swift
let count: Int
```

## See Also

### Getting the batch details

- [id](id.md): The unique identifier for the batch.
- [intermediateCertificate](intermediatecertificate.md): An array that contains the intermediate certificates that the system uses to sign the leaf certificate.
- [leafCertificate](leafcertificate.md): The leaf certificate the framework uses to sign this batch.
- [payments](payments.md): The payments that are part of the batch.
- [signature](signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the batch.
