> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/alignmentstrategy/writingdirectionbased](https://developer.apple.com/documentation/swiftui/text/alignmentstrategy/writingdirectionbased)

# writingDirectionBased

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The alignment following the writing direction of the same paragraph.

## Declaration

```swift
static let writingDirectionBased: Text.AlignmentStrategy
```

<a id="discussion"></a>

## Discussion

When [multilineTextAlignment](../../environmentvalues/multilinetextalignment.md) is [TextAlignment.leading](../../textalignment/leading.md), alignment follows the writing direction. If the value is [TextAlignment.trailing](../../textalignment/trailing.md) alignment is the opposite of the writing direction and finally, a [TextAlignment.center](../../textalignment/center.md) value always results in centered alignment.
