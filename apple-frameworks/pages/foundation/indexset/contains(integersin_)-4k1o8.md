> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/contains(integersin:)-4k1o8](https://developer.apple.com/documentation/foundation/indexset/contains(integersin:)-4k1o8)

# contains(integersIn:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns `true` if `self` contains all of the integers in `range`.

## Declaration

```swift
func contains<R>(integersIn range: R) -> Bool where R : RangeExpression, R.Bound == Int
```
