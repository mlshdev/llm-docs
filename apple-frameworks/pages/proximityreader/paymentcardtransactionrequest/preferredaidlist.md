> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardtransactionrequest/preferredaidlist

# preferredAIDList

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The preferred Application Identifier (AID) or Registered Application Provider Identifier (RID).

## Declaration

```swift
var preferredAIDList: [Data]
```

<a id="discussion"></a>

## Discussion

An ordered list of valid binary data between 5 and 16 bytes representing the preferred AID or RID. Use the preferred AID or RID when completing transactions with co-badged cards - a *co-badged* or *co-branded* card is a payment card that supports two or more payment brands.

> **Note**

> In iOS 16 and earlier, the framework only uses the first entry. In iOS 17 and later, the list can have up to four entries.
