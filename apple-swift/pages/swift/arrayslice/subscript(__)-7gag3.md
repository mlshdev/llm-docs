> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/arrayslice/subscript(_:)-7gag3](https://developer.apple.com/documentation/swift/arrayslice/subscript(_:)-7gag3)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
subscript<R>(r: R) -> Self.SubSequence where R : RangeExpression, Self.Index == R.Bound { get set }
```
