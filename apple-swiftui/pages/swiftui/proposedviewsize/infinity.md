> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/proposedviewsize/infinity](https://developer.apple.com/documentation/swiftui/proposedviewsize/infinity)

# infinity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A size proposal that contains infinity in both dimensions.

## Declaration

```swift
static let infinity: ProposedViewSize
```

<a id="discussion"></a>

## Discussion

Both dimensions contain [infinity](https://developer.apple.com/documentation/swift/float/infinity) in this size proposal. Subviews of a custom layout return their maximum size when you propose this value using the [dimensions(in:)](../layoutsubview/dimensions%28in_%29.md) method. A custom layout should also return its maximum size from the [sizeThatFits(proposal:subviews:cache:)](../layout/sizethatfits%28proposal_subviews_cache_%29.md) method for this value.

## See Also

### Getting standard proposals

- [zero](zero.md): A size proposal that contains zero in both dimensions.
- [unspecified](unspecified.md): The proposed size with both dimensions left unspecified.
