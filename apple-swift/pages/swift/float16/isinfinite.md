> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/isinfinite](https://developer.apple.com/documentation/swift/float16/isinfinite)

# isInfinite

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value indicating whether the instance is infinite.

## Declaration

```swift
var isInfinite: Bool { get }
```

<a id="discussion"></a>

## Discussion

For NaN, both `isFinite` and `isInfinite` are false.
