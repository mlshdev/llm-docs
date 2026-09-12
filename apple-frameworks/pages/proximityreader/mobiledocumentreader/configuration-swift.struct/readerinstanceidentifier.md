> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreader/configuration-swift.struct/readerinstanceidentifier](https://developer.apple.com/documentation/proximityreader/mobiledocumentreader/configuration-swift.struct/readerinstanceidentifier)

# readerInstanceIdentifier

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The unique identifier for the mobile document reader instance.

## Declaration

```swift
let readerInstanceIdentifier: String
```

## Mentioned In

- [Generating reader tokens for the Verifier API](../../generating-reader-tokens-for-the-verifier-api.md)

<a id="discussion"></a>

## Discussion

> **Note**

> Do not cache this value. When generating a reader token always retrieve the latest reader instance identifier first.
