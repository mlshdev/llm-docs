> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/affinity-swift.enum](https://developer.apple.com/documentation/appkit/nstextselection/affinity-swift.enum)

# NSTextSelection.Affinity (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.

## Declaration

```swift
enum Affinity
```

## Topics

### Affinities

- [NSTextSelection.Affinity.downstream](affinity-swift.enum/downstream.md): The value that defines the visual location of the text cursor between the head of line that contains the selection location.
- [NSTextSelection.Affinity.upstream](affinity-swift.enum/upstream.md): The value that defines the visual location of the text cursor to the tail of the previous line.

### Initializers

- [init(rawValue:)](affinity-swift.enum/init%28rawvalue_%29.md)

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
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelection.Granularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [isLogical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [isTransient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

# NSTextSelectionAffinity (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.

## Declaration

```objectivec
enum NSTextSelectionAffinity : NSInteger;
```

## Topics

### Affinities

- [NSTextSelectionAffinityDownstream](affinity-swift.enum/downstream.md): The value that defines the visual location of the text cursor between the head of line that contains the selection location.
- [NSTextSelectionAffinityUpstream](affinity-swift.enum/upstream.md): The value that defines the visual location of the text cursor to the tail of the previous line.

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelectionGranularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [logical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [transient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.
