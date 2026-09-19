> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver/suggestedbatchsize

# suggestedBatchSize

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Retrieves the suggested number of changed contact items to include in a batch.

## Declaration

```swift
var suggestedBatchSize: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is a suggested upper limit for the number of contact items you can pass in the aggregate calls to [didUpdate(\_:)](didupdate%28__%29.md) and [didDelete(\_:)](diddelete%28__%29.md). Exceeding this limit may result in memory issues.
