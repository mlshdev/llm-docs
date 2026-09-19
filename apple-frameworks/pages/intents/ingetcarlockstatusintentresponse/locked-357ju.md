> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetcarlockstatusintentresponse/locked-357ju

# locked

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · watchOS 3.2+

A Boolean value indicating the status of the car’s locks.

## Declaration

```swift
@nonobjc final var locked: Bool? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you assign a value to this property only after handling the intent. If the car is locked, set the property to [true](https://developer.apple.com/documentation/swift/true); otherwise, set it to [false](https://developer.apple.com/documentation/swift/false).
