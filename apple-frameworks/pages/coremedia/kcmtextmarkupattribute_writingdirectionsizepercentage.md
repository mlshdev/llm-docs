> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextmarkupattribute_writingdirectionsizepercentage](https://developer.apple.com/documentation/coremedia/kcmtextmarkupattribute_writingdirectionsizepercentage)

# kCMTextMarkupAttribute_WritingDirectionSizePercentage (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The width or height as a percentage of the bounding box that contains the text.

## Declaration

```swift
let kCMTextMarkupAttribute_WritingDirectionSizePercentage: CFString
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber` that expresses the width of the bounding box for text layout as a percentage of the video frame’s dimension in the writing direction. For a horizontal writing direction, it’s the width. For a vertical writing direction, it’s the height.

If you use this attribute, apply it to the entire attributed string.

## See Also

### Layout

- [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md): The vertical layout of a text block.
- [kCMTextMarkupAttribute_Alignment](kcmtextmarkupattribute_alignment.md): The text alignment in the writing direction of the first line of text.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.

# kCMTextMarkupAttribute_WritingDirectionSizePercentage (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The width or height as a percentage of the bounding box that contains the text.

## Declaration

```objectivec
extern CFStringRef const kCMTextMarkupAttribute_WritingDirectionSizePercentage;
```

<a id="Discussion"></a>

## Discussion

This attribute’s value must be a non-negative `CFNumber` that expresses the width of the bounding box for text layout as a percentage of the video frame’s dimension in the writing direction. For a horizontal writing direction, it’s the width. For a vertical writing direction, it’s the height.

If you use this attribute, apply it to the entire attributed string.

## See Also

### Layout

- [kCMTextMarkupAttribute_VerticalLayout](kcmtextmarkupattribute_verticallayout.md): The vertical layout of a text block.
- [kCMTextMarkupAttribute_Alignment](kcmtextmarkupattribute_alignment.md): The text alignment in the writing direction of the first line of text.
- [kCMTextMarkupAttribute_TextPositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_textpositionpercentagerelativetowritingdirection.md): The placement of the block of text as a percentage in the writing direction.
- [kCMTextMarkupAttribute_OrthogonalLinePositionPercentageRelativeToWritingDirection](kcmtextmarkupattribute_orthogonallinepositionpercentagerelativetowritingdirection.md): The placement of the first line in a block of text as a percentage in the direction orthogonal to the writing direction.
