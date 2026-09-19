> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insetcarlockstatusintent/locked-9h0kx

# locked

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · watchOS 3.2+

A Boolean value that indicates whether to lock the car.

## Declaration

```swift
@nonobjc final var locked: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](../../foundation/nsexpression/true.md), lock the car; otherwise unlock the car.
