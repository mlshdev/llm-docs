> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/historytoken](https://developer.apple.com/documentation/financekit/financestore/historytoken)

# FinanceStore.HistoryToken

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the starting point to use for financial data queries.

## Declaration

```swift
struct HistoryToken
```

<a id="overview"></a>

## Overview

The framework returns this as part of a [FinanceStore.Changes](changes.md) instance when iterating over a `History` sequence.

## Topics

### Initializers

- [init(from:)](historytoken/init%28from_%29.md): Initializes a new history token using data from the provided decoder.

### Instance Methods

- [encode(to:)](historytoken/encode%28to_%29.md): Encodes the history token into the provided encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
