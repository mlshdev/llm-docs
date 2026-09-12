> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/templatewithheadertextprovider:body1textprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangularstandardbody/templatewithheadertextprovider:body1textprovider:)

# templateWithHeaderTextProvider:body1TextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has a row of header text and a row of body text.

## Declaration

```objectivec
+ (instancetype) templateWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider body1TextProvider:(CLKTextProvider *) body1TextProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the body text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:](init%28headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and a row of body text.
- [initWithHeaderTextProvider:body1TextProvider:body2TextProvider:](init%28headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a row of header text and two rows of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and a row of body text.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_body2textprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, and two rows of body text.
- [templateWithHeaderTextProvider:body1TextProvider:body2TextProvider:](templatewithheadertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a row of header text and two rows of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and a row of body text.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:body2TextProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_body2textprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, and two rows of body text.
