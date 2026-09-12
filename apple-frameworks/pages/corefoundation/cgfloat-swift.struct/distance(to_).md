> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cgfloat-swift.struct/distance(to:)](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct/distance(to:))

# distance(to:)

**Framework:** Core Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS · watchOS 1.0+

Returns a stride `x` such that `self.advanced(by: x)` approximates `other`.

## Declaration

```swift
func distance(to other: CGFloat) -> CGFloat
```

<a id="Discussion"></a>

## Discussion

Complexity: O(1).
