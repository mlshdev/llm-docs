> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/anchor/inverted](https://developer.apple.com/documentation/regexbuilder/anchor/inverted)

# inverted

**Framework:** RegexBuilder  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The inverse of this anchor, which matches at every position that this anchor does not.

## Declaration

```swift
var inverted: Anchor { get }
```

<a id="discussion"></a>

## Discussion

For the [wordBoundary](wordboundary.md) and [textSegmentBoundary](textsegmentboundary.md) anchors, the inverted version corresponds to `\B` and `\Y`, respectively.
