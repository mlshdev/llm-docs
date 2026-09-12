> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselection](https://developer.apple.com/documentation/appkit/nstextselection)

# NSTextSelection (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a single logical selection context that corresponds to an insertion point.

## Declaration

```swift
class NSTextSelection
```

## Topics

### Creating a text selection

- [init(\_:affinity:)](nstextselection/init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [init(range:affinity:granularity:)](nstextselection/init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [init(\_:affinity:granularity:)](nstextselection/init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [init(coder:)](nstextselection/init%28coder_%29.md): Creates a test selection from data in an unarchiver.

### Characteristics of a selection

- [affinity](nstextselection/affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelection.Affinity](nstextselection/affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](nstextselection/anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](nstextselection/granularity-swift.property.md): The granularity of the selection.
- [NSTextSelection.Granularity](nstextselection/granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [isLogical](nstextselection/islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [isTransient](nstextselection/istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](nstextselection/secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](nstextselection/textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](nstextselection/typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

### Creating subselections

- [textSelection(\_:)](nstextselection/textselection%28__%29.md): Creates a subselection of the current text selection with the ranges you specify.

### Initializers

- [init(location:affinity:)](nstextselection/init%28location_affinity_%29.md)
- [init(ranges:affinity:granularity:)](nstextselection/init%28ranges_affinity_granularity_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextSelectionManager](nstextselectionmanager.md): An object that coordinates text selection behavior for custom text views.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.

# NSTextSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a single logical selection context that corresponds to an insertion point.

## Declaration

```objectivec
@interface NSTextSelection : NSObject
```

## Topics

### Creating a text selection

- [initWithLocation:affinity:](nstextselection/init%28__affinity_%29.md): Creates a new text selection with the location and selection affinity you provide.
- [initWithRange:affinity:granularity:](nstextselection/init%28range_affinity_granularity_%29.md): Creates a new text selection with the range, selection affinity, and granularity you provide.
- [initWithRanges:affinity:granularity:](nstextselection/init%28__affinity_granularity_%29.md): Creates a new text selection with the ranges, selection affinity, and granularity you provide.
- [initWithCoder:](nstextselection/init%28coder_%29.md): Creates a test selection from data in an unarchiver.

### Characteristics of a selection

- [affinity](nstextselection/affinity-swift.property.md): Returns the selection affinity of the text selection.
- [NSTextSelectionAffinity](nstextselection/affinity-swift.enum.md): Values that describe the visual location of the text cursor, or the direction of the non-anchored edge of the selection.
- [anchorPositionOffset](nstextselection/anchorpositionoffset.md): Represents the anchor position offset from the beginning of a line fragment in the visual order for the initial tap or click location.
- [granularity](nstextselection/granularity-swift.property.md): The granularity of the selection.
- [NSTextSelectionGranularity](nstextselection/granularity-swift.enum.md): Values that describe the different granularities available to make a selection.
- [logical](nstextselection/islogical.md): A Boolean value that indicates whether the framework interprets the selection as logical or visual.
- [transient](nstextselection/istransient.md): A Boolean value that indicates transient text selection during drag handling.
- [secondarySelectionLocation](nstextselection/secondaryselectionlocation.md): Specifies the secondary character location when user taps or clicks at a directional boundary.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
- [textRanges](nstextselection/textranges.md): Represents an array of noncontiguous logical ranges in the selection.
- [typingAttributes](nstextselection/typingattributes.md): The template attributes the framework uses for characters that replace the contents of this selection.

### Creating subselections

- [textSelectionWithTextRanges:](nstextselection/textselection%28__%29.md): Creates a subselection of the current text selection with the ranges you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Location and selection

- [NSTextRange](nstextrange.md): A class that represents a contiguous range between two locations inside document contents.
- [NSTextSelectionNavigation](nstextselectionnavigation.md): An interface you use to expose methods for obtaining results from actions performed on text selections.
- [NSTextSelectionManager](nstextselectionmanager.md): An object that coordinates text selection behavior for custom text views.
- [NSTextLocation](nstextlocation.md): An interface you implement that represents an abstract location inside your document’s content.
