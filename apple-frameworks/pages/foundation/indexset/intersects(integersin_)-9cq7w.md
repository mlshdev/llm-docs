> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/intersects(integersin:)-9cq7w](https://developer.apple.com/documentation/foundation/indexset/intersects(integersin:)-9cq7w)

# intersects(integersIn:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns `true` if `self` intersects any of the integers in `range`.

## Declaration

```swift
func intersects<R>(integersIn range: R) -> Bool where R : RangeExpression, R.Bound == Int
```
