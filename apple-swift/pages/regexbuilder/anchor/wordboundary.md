> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/anchor/wordboundary](https://developer.apple.com/documentation/regexbuilder/anchor/wordboundary)

# wordBoundary

**Framework:** RegexBuilder  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An anchor that matches at a word boundary.

## Declaration

```swift
static var wordBoundary: Anchor { get }
```

<a id="discussion"></a>

## Discussion

Word boundaries are identified using the Unicode default word boundary algorithm by default. To specify a different word boundary algorithm, use the `wordBoundaryKind(_:)` method.

This anchor is equivalent to `\b` in regex syntax.
