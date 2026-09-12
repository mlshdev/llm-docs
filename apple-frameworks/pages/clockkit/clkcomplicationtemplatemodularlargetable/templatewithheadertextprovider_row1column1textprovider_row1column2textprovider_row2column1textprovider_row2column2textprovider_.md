> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetable/templatewithheadertextprovider:row1column1textprovider:row1column2textprovider:row2column1textprovider:row2column2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetable/templatewithheadertextprovider:row1column1textprovider:row1column2textprovider:row2column1textprovider:row2column2textprovider:)

# templateWithHeaderTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a template that has a header and two columns of text.

## Declaration

```objectivec
+ (instancetype) templateWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider row1Column1TextProvider:(CLKTextProvider *) row1Column1TextProvider row1Column2TextProvider:(CLKTextProvider *) row1Column2TextProvider row2Column1TextProvider:(CLKTextProvider *) row2Column1TextProvider row2Column2TextProvider:(CLKTextProvider *) row2Column2TextProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `row1Column1TextProvider`: The text provider for the first row of the first column. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `row1Column2TextProvider`: The text provider for the first row of the second column. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `row2Column1TextProvider`: The text provider for the second row of the first column. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.
- `row2Column2TextProvider`: The text provider for the second row of the second column. For multicolor faces, like the Utility face, the system uses the text provider’s tint color for the text. For other faces, the system ignores the provided tint color, and uses a system color instead.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](init%28headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header and two columns of text.
- [initWithHeaderImageProvider:headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](init%28headerimageprovider_headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_%29.md): Deprecated. Creates a template that has a header row with an image and text, and two columns of text.
- [templateWithHeaderImageProvider:headerTextProvider:row1Column1TextProvider:row1Column2TextProvider:row2Column1TextProvider:row2Column2TextProvider:](templatewithheaderimageprovider_headertextprovider_row1column1textprovider_row1column2textprovider_row2column1textprovider_row2column2textprovider_.md): Deprecated. Returns a template that has a header row with an image and text, and two columns of text.
