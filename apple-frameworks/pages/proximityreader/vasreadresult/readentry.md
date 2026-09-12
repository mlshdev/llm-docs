> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasreadresult/readentry](https://developer.apple.com/documentation/proximityreader/vasreadresult/readentry)

# VASReadResult.ReadEntry

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

An object containing encrypted data associated with a customer’s loyalty or reward pass.

## Declaration

```swift
struct ReadEntry
```

## Topics

### Getting the customer data

- [customerVASData](readentry/customervasdata.md): The encrypted content of the pass stored in Wallet, which contains the loyalty or reward pass identifier.

### Getting the status word

- [status](readentry/status-swift.property.md): The status word that represents the outcome of the VAS read attempt for this reward pass.
- [VASReadResult.ReadEntry.Status](readentry/status-swift.enum.md): Status words that indicate the possible read outcomes.

### Getting the entry ID

- [id](readentry/id.md): The merchant identifier you used to retrieve the loyalty program information from Wallet.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the entry details

- [entries](entries.md): The list of loyalty reward card entries received from the customer.
