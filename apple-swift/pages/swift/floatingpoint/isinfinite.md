> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpoint/isinfinite](https://developer.apple.com/documentation/swift/floatingpoint/isinfinite)

# isInfinite

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the instance is infinite.

## Declaration

```swift
var isInfinite: Bool { get }
```

<a id="discussion"></a>

## Discussion

For NaN, both `isFinite` and `isInfinite` are false.
