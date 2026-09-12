> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/leafcertificate](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/leafcertificate)

# leafCertificate

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The leaf certificate the framework uses to sign this batch.

## Declaration

```swift
let leafCertificate: String
```

## See Also

### Getting the batch details

- [id](id.md): The unique identifier for the batch.
- [count](count.md): The number of payments this batch includes.
- [intermediateCertificate](intermediatecertificate.md): An array that contains the intermediate certificates that the system uses to sign the leaf certificate.
- [payments](payments.md): The payments that are part of the batch.
- [signature](signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the batch.
