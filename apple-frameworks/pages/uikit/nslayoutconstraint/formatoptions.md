> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/formatoptions](https://developer.apple.com/documentation/uikit/nslayoutconstraint/formatoptions)

# NSLayoutConstraint.FormatOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
- [alignmentMask](formatoptions/alignmentmask.md): Bit mask that can be combined with a [NSLayoutConstraint.FormatOptions](formatoptions.md) variable to yield only the alignment portion of the format options.
- [directionLeadingToTrailing](formatoptions/directionleadingtotrailing.md): Arrange objects in order based on the normal text flow for the current user interface language. In left-to-right languages (like English), this arrangement results in the first object being placed farthest to the left, the next one to its right, and so on. In right-to-left languages (like Arabic or Hebrew), the ordering is reversed.
- [directionLeftToRight](formatoptions/directionlefttoright.md): Arrange objects in order from left to right.
- [directionRightToLeft](formatoptions/directionrighttoleft.md): Arrange objects in order from right to left.
- [directionMask](formatoptions/directionmask.md): A bit mask that can be combined with an [NSLayoutConstraint.FormatOptions](formatoptions.md) variable to yield only the direction portion of the format options.
- [spacingBaselineToBaseline](formatoptions/spacingbaselinetobaseline.md): Align elements vertically according to their baseline positions.
- [spacingMask](formatoptions/spacingmask.md): A bit mask that can be combined with an [NSLayoutConstraint.FormatOptions](formatoptions.md) variable to yield only the spacing baseline spacing portion of the format options.

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
- [NSLayoutConstraint.Orientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [NSLayoutConstraint.Axis](axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)

# NSLayoutFormatOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

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
- [NSLayoutFormatAlignAllBaseline](../nslayoutformatoptions/nslayoutformatalignallbaseline.md): Align all specified interface elements using [NSLayoutAttributeBaseline](../nslayoutattribute/nslayoutattributebaseline.md) on each.
- [NSLayoutFormatAlignAllLastBaseline](formatoptions/alignalllastbaseline.md): Align all specified interface elements using the last baseline of each one.
- [NSLayoutFormatAlignAllFirstBaseline](formatoptions/alignallfirstbaseline.md): Align all specified interface elements using the first baseline of each one.
- [NSLayoutFormatAlignmentMask](formatoptions/alignmentmask.md): Bit mask that can be combined with a [NSLayoutFormatOptions](formatoptions.md) variable to yield only the alignment portion of the format options.
- [NSLayoutFormatDirectionLeadingToTrailing](formatoptions/directionleadingtotrailing.md): Arrange objects in order based on the normal text flow for the current user interface language. In left-to-right languages (like English), this arrangement results in the first object being placed farthest to the left, the next one to its right, and so on. In right-to-left languages (like Arabic or Hebrew), the ordering is reversed.
- [NSLayoutFormatDirectionLeftToRight](formatoptions/directionlefttoright.md): Arrange objects in order from left to right.
- [NSLayoutFormatDirectionRightToLeft](formatoptions/directionrighttoleft.md): Arrange objects in order from right to left.
- [NSLayoutFormatDirectionMask](formatoptions/directionmask.md): A bit mask that can be combined with an [NSLayoutFormatOptions](formatoptions.md) variable to yield only the direction portion of the format options.
- [NSLayoutFormatSpacingEdgeToEdge](../nslayoutformatoptions/nslayoutformatspacingedgetoedge.md): Align the elements using their edges instead of using their baselines.
- [NSLayoutFormatSpacingBaselineToBaseline](formatoptions/spacingbaselinetobaseline.md): Align elements vertically according to their baseline positions.
- [NSLayoutFormatSpacingMask](formatoptions/spacingmask.md): A bit mask that can be combined with an [NSLayoutFormatOptions](formatoptions.md) variable to yield only the spacing baseline spacing portion of the format options.

## See Also

### Constants

- [NSLayoutRelation](relation-swift.enum.md): The relation between the first attribute and the modified second attribute in a constraint.
- [NSLayoutAttribute](attribute.md): The part of the object’s visual representation that should be used to get the value for the constraint.
- [NSLayoutConstraintOrientation](https://developer.apple.com/documentation/appkit/nslayoutconstraint/orientation): The layout constraint orientation, either horizontal or vertical, that the constraint uses to enforce layout between objects.
- [UILayoutConstraintAxis](axis.md): Keys that specify a horizontal or vertical layout constraint between objects.
- [NSEdgeInsets](../../foundation/nsedgeinsets.md): A description of the distance between the edges of two rectangles.
- [NSLAYOUTCONSTRAINT_H](../nslayoutconstraint_h.md)
