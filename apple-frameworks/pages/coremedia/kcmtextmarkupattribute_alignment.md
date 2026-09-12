> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_alignment](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_alignment)

# kCMTextMarkupAttribute_Alignment (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The text alignment in the writing direction of the first line of text.

## Declaration

```swift
let kCMTextMarkupAttribute_Alignment: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be one of the constants listed below that indicate the alignment in the writing direction of the first line of text of the cue. The value (or absence) of the [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md) attribute indicates the writing direction. The default value of this attribute is [kCMTextMarkupAlignmentType_Middle](kcmtextmarkupalignmenttype_middle.md).

If you use this attribute, apply it to the entire attributed string.

## Topics

### Alignment Types

- [kCMTextMarkupAlignmentType_Start](kcmtextmarkupalignmenttype_start.md): An alignment type that visually aligns the text at its starting side.
- [kCMTextMarkupAlignmentType_Middle](kcmtextmarkupalignmenttype_middle.md): An alignment type that visually aligns text in the center between its starting and ending sides.
- [kCMTextMarkupAlignmentType_End](kcmtextmarkupalignmenttype_end.md): An alignment type that visually aligns the text at its ending side.
- [kCMTextMarkupAlignmentType_Left](kcmtextmarkupalignmenttype_left.md): An alignment type that visually aligns text from left-to-right.
- [kCMTextMarkupAlignmentType_Right](kcmtextmarkupalignmenttype_right.md): An alignment type that visually aligns text from right-to-left.

## See Also

### Layout

- [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md): The vertical layout of a text block.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
- [kCMTextMarkupAttribute_WritingDirectionSizePercentage](kcmtextmarkupattribute_writingdirectionsizepercentage.md): The width or height as a percentage of the bounding box that contains the text.

# kCMTextMarkupAttribute_Alignment (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The text alignment in the writing direction of the first line of text.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_Alignment;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be one of the constants listed below that indicate the alignment in the writing direction of the first line of text of the cue. The value (or absence) of the [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md) attribute indicates the writing direction. The default value of this attribute is [kCMTextMarkupAlignmentType_Middle](kcmtextmarkupalignmenttype_middle.md).

If you use this attribute, apply it to the entire attributed string.

## Topics

### Alignment Types

- [kCMTextMarkupAlignmentType_Start](kcmtextmarkupalignmenttype_start.md): An alignment type that visually aligns the text at its starting side.
- [kCMTextMarkupAlignmentType_Middle](kcmtextmarkupalignmenttype_middle.md): An alignment type that visually aligns text in the center between its starting and ending sides.
- [kCMTextMarkupAlignmentType_End](kcmtextmarkupalignmenttype_end.md): An alignment type that visually aligns the text at its ending side.
- [kCMTextMarkupAlignmentType_Left](kcmtextmarkupalignmenttype_left.md): An alignment type that visually aligns text from left-to-right.
- [kCMTextMarkupAlignmentType_Right](kcmtextmarkupalignmenttype_right.md): An alignment type that visually aligns text from right-to-left.

## See Also

### Layout

- [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md): The vertical layout of a text block.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
- [kCMTextMarkupAttribute_WritingDirectionSizePercentage](kcmtextmarkupattribute_writingdirectionsizepercentage.md): The width or height as a percentage of the bounding box that contains the text.
