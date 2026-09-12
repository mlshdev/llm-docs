> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextselection/secondaryselectionlocation](https://developer.apple.com/documentation/uikit/nstextselection/secondaryselectionlocation)

# secondarySelectionLocation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Specifies the secondary character location when user taps or clicks at a directional boundary.

## Declaration

```swift
var secondarySelectionLocation: (any NSTextLocation)? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a non-`nil` location has a side effect of making `isLogical` to `false`.

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelection.Affinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelection.Granularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [isLogical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [isTransient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

# secondarySelectionLocation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Specifies the secondary character location when user taps or clicks at a directional boundary.

## Declaration

```objectivec
@property (strong, nullable) id<NSTextLocation> secondarySelectionLocation;
```

<a id="Discussion"></a>

## Discussion

Setting a non-`nil` location has a side effect of making `isLogical` to `false`.

## See Also

### Characteristics of a selection

- [affinity](affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelectionAffinity](affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](granularity-swift.property.md): The granularity of the selection.
- [NSTextSelectionGranularity](granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [logical](islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [transient](istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [NSTextLocation](../nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.
