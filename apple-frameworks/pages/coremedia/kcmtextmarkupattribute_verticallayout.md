> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_verticallayout](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_verticallayout)

# kCMTextMarkupAttribute_VerticalLayout (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The vertical layout of a text block.

## Declaration

```swift
let kCMTextMarkupAttribute_VerticalLayout: CFString
```

<a id="Discussion"></a>

## Discussion

Specifying this attribute indicates that the writing direction is vertical instead of horizontal. You can set the associated value to [kCMTextVerticalLayout_LeftToRight](kcmtextverticallayout_lefttoright.md) or [kCMTextVerticalLayout_RightToLeft](kcmtextverticallayout_righttoleft.md) to indicate the progression direction for new vertical lines of text.

## Topics

### Layouts

- [kCMTextVerticalLayout_LeftToRight](kcmtextverticallayout_lefttoright.md): Add new vertical lines from left to right.
- [kCMTextVerticalLayout_RightToLeft](kcmtextverticallayout_righttoleft.md): Add new vertical lines from right to left.

## See Also

### Layout

- [kCMTextMarkupAttribute_Alignment](kcmtextmarkupattribute_alignment.md): The text alignment in the writing direction of the first line of text.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
- [kCMTextMarkupAttribute_WritingDirectionSizePercentage](kcmtextmarkupattribute_writingdirectionsizepercentage.md): The width or height as a percentage of the bounding box that contains the text.

# kCMTextMarkupAttribute_VerticalLayout (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The vertical layout of a text block.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_VerticalLayout;
```

<a id="Discussion"></a>

## Discussion

Specifying this attribute indicates that the writing direction is vertical instead of horizontal. You can set the associated value to [kCMTextVerticalLayout_LeftToRight](kcmtextverticallayout_lefttoright.md) or [kCMTextVerticalLayout_RightToLeft](kcmtextverticallayout_righttoleft.md) to indicate the progression direction for new vertical lines of text.

## Topics

### Layouts

- [kCMTextVerticalLayout_LeftToRight](kcmtextverticallayout_lefttoright.md): Add new vertical lines from left to right.
- [kCMTextVerticalLayout_RightToLeft](kcmtextverticallayout_righttoleft.md): Add new vertical lines from right to left.

## See Also

### Layout

- [kCMTextMarkupAttribute_Alignment](kcmtextmarkupattribute_alignment.md): The text alignment in the writing direction of the first line of text.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
- [kCMTextMarkupAttribute_WritingDirectionSizePercentage](kcmtextmarkupattribute_writingdirectionsizepercentage.md): The width or height as a percentage of the bounding box that contains the text.
