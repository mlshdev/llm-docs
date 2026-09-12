> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection/islogical](https://developer.apple.com/documentation/appkit/nstextselection/islogical)

# isLogical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the framework interprets the selection as logical or visual.

## Declaration

```swift
var isLogical: Bool { get set }
```

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelection.Affinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelection.Granularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [isTransient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

# logical (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether the framework interprets the selection as logical or visual.

## Declaration

```objectivec
@property (getter=isLogical) BOOL logical;
```

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelectionAffinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelectionGranularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [transient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.
