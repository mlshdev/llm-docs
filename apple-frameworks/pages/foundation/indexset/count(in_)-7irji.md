> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/count(in:)-7irji](https://developer.apple.com/documentation/foundation/indexset/count(in:)-7irji)

# count(in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the count of integers in `self` that intersect `range`.

## Declaration

```swift
func count<R>(in range: R) -> Int where R : RangeExpression, R.Bound == Int
```
