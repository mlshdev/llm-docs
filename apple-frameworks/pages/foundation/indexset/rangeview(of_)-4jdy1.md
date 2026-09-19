> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/indexset/rangeview(of:)-4jdy1

# rangeView(of:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `Range`-based view of `self`.

## Declaration

```swift
func rangeView<R>(of range: R) -> IndexSet.RangeView where R : RangeExpression, R.Bound == Int
```

## Parameters

- `range`: A subrange of `self` to view.
