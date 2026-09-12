> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/granularity-swift.enum](https://developer.apple.com/documentation/appkit/nstextselection/granularity-swift.enum)

# NSTextSelection.Granularity (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the different granularities available to make a selection.

## Declaration

```swift
enum Granularity
```

## Topics

### Degrees of granularity

- [NSTextSelection.Granularity.character](granularity-swift.enum/character.md): A value that represents selection by character.
- [NSTextSelection.Granularity.word](granularity-swift.enum/word.md): A value that represents selection by word.
- [NSTextSelection.Granularity.paragraph](granularity-swift.enum/paragraph.md): A value that represents selection by paragraph.
- [NSTextSelection.Granularity.line](granularity-swift.enum/line.md): A value that represents selection by line.
- [NSTextSelection.Granularity.sentence](granularity-swift.enum/sentence.md): A value that represents selection by sentence.

### Initializers

- [init(rawValue:)](granularity-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelection.Affinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [isLogical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [isTransient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

# NSTextSelectionGranularity (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the different granularities available to make a selection.

## Declaration

```objectivec
enum NSTextSelectionGranularity : NSInteger;
```

## Topics

### Degrees of granularity

- [NSTextSelectionGranularityCharacter](granularity-swift.enum/character.md): A value that represents selection by character.
- [NSTextSelectionGranularityWord](granularity-swift.enum/word.md): A value that represents selection by word.
- [NSTextSelectionGranularityParagraph](granularity-swift.enum/paragraph.md): A value that represents selection by paragraph.
- [NSTextSelectionGranularityLine](granularity-swift.enum/line.md): A value that represents selection by line.
- [NSTextSelectionGranularitySentence](granularity-swift.enum/sentence.md): A value that represents selection by sentence.

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelectionAffinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [logical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [transient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.
