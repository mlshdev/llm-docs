> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/financekit/financestore/history/iterator/next()

# next()

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Declaration

```swift
func next() async throws -> FinanceStore.Changes<Model>?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or `nil` to signal the end of the sequence.
