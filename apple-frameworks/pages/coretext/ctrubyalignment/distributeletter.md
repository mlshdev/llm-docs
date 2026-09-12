> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrubyalignment/distributeletter](https://developer.apple.com/documentation/coretext/ctrubyalignment/distributeletter)

# CTRubyAlignment.distributeLetter (Swift)

**Framework:** Core Text  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Distributes the ruby text evenly over the width of the base text, aligning the first and last characters of the ruby text with the first and last characters of the base text.

## Declaration

```swift
case distributeLetter
```

<a id="Discussion"></a>

## Discussion

If the width of the ruby text is less than the width of the base text, Core Text evenly distributes the ruby text over the width of the base text. The first character of the ruby text aligns with the first character of the base text, and the last character of the ruby text aligns with the last character of the base text.

If the width of the base text is less than the width of the ruby text, Core Text evenly distributes the base text over the width of the ruby text.

## See Also

### Constants

- [CTRubyAlignment.auto](auto.md): Core Text automatically determines the alignment.
- [CTRubyAlignment.start](start.md): Aligns the ruby text with the starting edge of the base text.
- [CTRubyAlignment.center](center.md): Centers the ruby text within the width of the base text.
- [CTRubyAlignment.end](end.md): Aligns the ruby text with the ending edge of the base text.
- [CTRubyAlignment.distributeSpace](distributespace.md): Distributes the ruby text evenly over the width of the base text, adding space before the first and after the last character.
- [CTRubyAlignment.lineEdge](lineedge.md): Aligns the ruby text to an adjacent line edge.
- [CTRubyAlignment.invalid](invalid.md): The alignment is invalid.

# kCTRubyAlignmentDistributeLetter (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Distributes the ruby text evenly over the width of the base text, aligning the first and last characters of the ruby text with the first and last characters of the base text.

## Declaration

```objectivec
kCTRubyAlignmentDistributeLetter
```

<a id="Discussion"></a>

## Discussion

If the width of the ruby text is less than the width of the base text, Core Text evenly distributes the ruby text over the width of the base text. The first character of the ruby text aligns with the first character of the base text, and the last character of the ruby text aligns with the last character of the base text.

If the width of the base text is less than the width of the ruby text, Core Text evenly distributes the base text over the width of the ruby text.

## See Also

### Constants

- [kCTRubyAlignmentAuto](auto.md): Core Text automatically determines the alignment.
- [kCTRubyAlignmentStart](start.md): Aligns the ruby text with the starting edge of the base text.
- [kCTRubyAlignmentCenter](center.md): Centers the ruby text within the width of the base text.
- [kCTRubyAlignmentEnd](end.md): Aligns the ruby text with the ending edge of the base text.
- [kCTRubyAlignmentDistributeSpace](distributespace.md): Distributes the ruby text evenly over the width of the base text, adding space before the first and after the last character.
- [kCTRubyAlignmentLineEdge](lineedge.md): Aligns the ruby text to an adjacent line edge.
- [kCTRubyAlignmentInvalid](invalid.md): The alignment is invalid.
