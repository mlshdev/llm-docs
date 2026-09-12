> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/id](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/id)

# id

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The unique identifier for the batch.

## Declaration

```swift
let id: String
```

<a id="discussion"></a>

## Discussion

Include this identifier in support requests or tracing incidents to help track down potential problems.

## See Also

### Getting the batch details

- [count](count.md): The number of payments this batch includes.
- [intermediateCertificate](intermediatecertificate.md): An array that contains the intermediate certificates that the system uses to sign the leaf certificate.
- [leafCertificate](leafcertificate.md): The leaf certificate the framework uses to sign this batch.
- [payments](payments.md): The payments that are part of the batch.
- [signature](signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the batch.
