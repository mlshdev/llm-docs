> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/progress/addchild(_:withpendingunitcount:)-4hi92

# addChild(\_:withPendingUnitCount:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds a ProgressReporter as a child to a Progress, which constitutes a portion of Progress’s totalUnitCount.

## Declaration

```swift
func addChild(_ reporter: ProgressReporter, withPendingUnitCount count: Int)
```

## Parameters

- `reporter`: A `ProgressReporter` instance.
- `count`: Number of units delegated from `self`’s `totalCount`.
