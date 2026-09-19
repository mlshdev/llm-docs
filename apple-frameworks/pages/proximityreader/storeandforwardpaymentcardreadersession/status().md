> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/storeandforwardpaymentcardreadersession/status()

# status()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Allows the merchant to check the status of the Store and Forward session.

## Declaration

```swift
func status() async throws -> StoreAndForwardStatus
```

<a id="return-value"></a>

## Return Value

[StoreAndForwardStatus](../storeandforwardstatus.md) when successful.

<a id="discussion"></a>

## Discussion

> **Throws**

> This method throws a `ReadError` if status cannot be retrieved.
