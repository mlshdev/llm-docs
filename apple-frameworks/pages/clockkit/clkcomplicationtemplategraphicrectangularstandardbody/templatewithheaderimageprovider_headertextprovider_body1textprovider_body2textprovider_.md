> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/templatewithheaderimageprovider:headertextprovider:body1textprovider:body2textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/templatewithheaderimageprovider:headertextprovider:body1textprovider:body2textprovider:)

# templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has a header row with an image and text, and two rows of body text.

## Declaration

```objectivec
+ (instancetype) templateWithHeaderImageProvider:(CLKFullColorImageProvider *) headerImageProvider headerTextProvider:(CLKTextProvider *) headerTextProvider body1TextProvider:(CLKTextProvider *) body1TextProvider body2TextProvider:(CLKTextProvider *) body2TextProvider;
```

## Parameters

- `headerImageProvider`: A full-color image provider.
- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the first row of body text. The template supports multicolored text from this text provider.
- `body2TextProvider`: The text provider for the second row of body text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:](init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [initWithHeaderTextProvider:body1TextProvider:body2TextProvider:](init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.
- [templateWithHeaderTextProvider:body1TextProvider:](templatewithheadertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a row of header text and a row of body text.
- [templateWithHeaderTextProvider:body1TextProvider:body2TextProvider:](templatewithheadertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a row of header text and two rows of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and a row of body text.
