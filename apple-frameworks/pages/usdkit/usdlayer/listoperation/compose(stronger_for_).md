> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/listoperation/compose(stronger:for:)

# compose(stronger:for:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Composes a stronger operation into this one for the given slot.

## Declaration

```swift
mutating func compose(stronger: USDLayer.ListOperation<T>, for operation: USDLayer.ListOperationType)
```

## Parameters

- `stronger`: The stronger operation to compose into this one.
- `operation`: The slot to update.
