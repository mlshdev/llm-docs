> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/formatoptions](https://developer.apple.com/documentation/appkit/nslayoutconstraint/formatoptions)

# NSLayoutConstraint.FormatOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.

## Declaration

```swift
struct FormatOptions
```

## Topics

### Constants

- [alignAllLeft](formatoptions/alignallleft.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.left](attribute/left.md) on each.
- [alignAllRight](formatoptions/alignallright.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.right](attribute/right.md) on each.
- [alignAllTop](formatoptions/alignalltop.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.top](attribute/top.md) on each.
- [alignAllBottom](formatoptions/alignallbottom.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.bottom](attribute/bottom.md) on each.
- [alignAllLeading](formatoptions/alignallleading.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.leading](attribute/leading.md) on each.
- [alignAllTrailing](formatoptions/alignalltrailing.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.trailing](attribute/trailing.md) on each.
- [alignAllCenterX](formatoptions/alignallcenterx.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.centerX](attribute/centerx.md) on each.
- [alignAllCenterY](formatoptions/alignallcentery.md): Align all specified interface elements using [NSLayoutConstraint.Attribute.centerY](attribute/centery.md) on each.
- [alignAllLastBaseline](formatoptions/alignalllastbaseline.md): Align all specified interface elements using the last baseline of each one.
- [alignAllFirstBaseline](formatoptions/alignallfirstbaseline.md): Align all specified interface elements using the first baseline of each one.
- [alignmentMask](formatoptions/alignmentmask.md): Bit mask that can be combined with an [NSLayoutConstraint.FormatOptions](formatoptions.md) variable to yield only the alignment portion of the format options.
- [directionLeadingToTrailing](formatoptions/directionleadingtotrailing.md): Arrange objects in order based on the normal text flow for the current user interface language. In left-to-right languages (like English), this arrangement results in the first object being placed farthest to the left, the next one to its right, and so on. In right-to-left languages (like Arabic or Hebrew), the ordering is reversed.
- [directionLeftToRight](formatoptions/directionlefttoright.md): Arrange objects in order from left to right.
- [directionRightToLeft](formatoptions/directionrighttoleft.md): Arrange objects in order from right to left.
- [directionMask](formatoptions/directionmask.md): A bit mask that can be combined with an [NSLayoutConstraint.FormatOptions](formatoptions.md) variable to yield only the direction portion of the format options.

### Initializers

- [init(rawValue:)](formatoptions/init%28rawvalue_%29.md): Creates a formatting-options structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSLayoutConstraint.Relation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutConstraint.Attribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraint.Orientation](orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.

# NSLayoutFormatOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A bit mask that specifies both a part of an interface element to align and a direction for the alignment between two interface elements.

## Declaration

```objectivec
enum NSLayoutFormatOptions : NSUInteger;
```

## Topics

### Constants

- [NSLayoutFormatAlignAllLeft](formatoptions/alignallleft.md): Align all specified interface elements using [NSLayoutAttributeLeft](attribute/left.md) on each.
- [NSLayoutFormatAlignAllRight](formatoptions/alignallright.md): Align all specified interface elements using [NSLayoutAttributeRight](attribute/right.md) on each.
- [NSLayoutFormatAlignAllTop](formatoptions/alignalltop.md): Align all specified interface elements using [NSLayoutAttributeTop](attribute/top.md) on each.
- [NSLayoutFormatAlignAllBottom](formatoptions/alignallbottom.md): Align all specified interface elements using [NSLayoutAttributeBottom](attribute/bottom.md) on each.
- [NSLayoutFormatAlignAllLeading](formatoptions/alignallleading.md): Align all specified interface elements using [NSLayoutAttributeLeading](attribute/leading.md) on each.
- [NSLayoutFormatAlignAllTrailing](formatoptions/alignalltrailing.md): Align all specified interface elements using [NSLayoutAttributeTrailing](attribute/trailing.md) on each.
- [NSLayoutFormatAlignAllCenterX](formatoptions/alignallcenterx.md): Align all specified interface elements using [NSLayoutAttributeCenterX](attribute/centerx.md) on each.
- [NSLayoutFormatAlignAllCenterY](formatoptions/alignallcentery.md): Align all specified interface elements using [NSLayoutAttributeCenterY](attribute/centery.md) on each.
- [NSLayoutFormatAlignAllLastBaseline](formatoptions/alignalllastbaseline.md): Align all specified interface elements using the last baseline of each one.
- [NSLayoutFormatAlignAllFirstBaseline](formatoptions/alignallfirstbaseline.md): Align all specified interface elements using the first baseline of each one.
- [NSLayoutFormatAlignmentMask](formatoptions/alignmentmask.md): Bit mask that can be combined with an [NSLayoutFormatOptions](formatoptions.md) variable to yield only the alignment portion of the format options.
- [NSLayoutFormatDirectionLeadingToTrailing](formatoptions/directionleadingtotrailing.md): Arrange objects in order based on the normal text flow for the current user interface language. In left-to-right languages (like English), this arrangement results in the first object being placed farthest to the left, the next one to its right, and so on. In right-to-left languages (like Arabic or Hebrew), the ordering is reversed.
- [NSLayoutFormatDirectionLeftToRight](formatoptions/directionlefttoright.md): Arrange objects in order from left to right.
- [NSLayoutFormatDirectionRightToLeft](formatoptions/directionrighttoleft.md): Arrange objects in order from right to left.
- [NSLayoutFormatDirectionMask](formatoptions/directionmask.md): A bit mask that can be combined with an [NSLayoutFormatOptions](formatoptions.md) variable to yield only the direction portion of the format options.

### Enumeration Cases

- [NSLayoutFormatAlignAllBaseline](../nslayoutformatoptions/nslayoutformatalignallbaseline.md)

## See Also

### Constants

- [NSLayoutRelation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutAttribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraintOrientation](orientation.md): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSEdgeInsets](https://developer.apple.com/documentation/foundation/nsedgeinsets): A description of the distance between the edges of two rectangles.
