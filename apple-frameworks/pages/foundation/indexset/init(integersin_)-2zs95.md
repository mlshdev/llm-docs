> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/indexset/init(integersin:)-2zs95](https://developer.apple.com/documentation/foundation/indexset/init(integersin:)-2zs95)

# init(integersIn:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize an `IndexSet` with a range of integers.

## Declaration

```swift
init<R>(integersIn range: R) where R : RangeExpression, R.Bound == Int
```
