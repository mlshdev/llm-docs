> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgauge/templatewithheaderimageprovider:headertextprovider:body1textprovider:gaugeprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgauge/templatewithheaderimageprovider:headertextprovider:body1textprovider:gaugeprovider:)

# templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:gaugeProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template that has a header row with an image and text, body text, and a gauge.

## Declaration

```objectivec
+ (instancetype) templateWithHeaderImageProvider:(CLKFullColorImageProvider *) headerImageProvider headerTextProvider:(CLKTextProvider *) headerTextProvider body1TextProvider:(CLKTextProvider *) body1TextProvider gaugeProvider:(CLKGaugeProvider *) gaugeProvider;
```

## Parameters

- `headerImageProvider`: A full-color image provider.
- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the body text. The template supports multicolored text from this text provider.
- `gaugeProvider`: The gauge provider for the template.

## See Also

### Creating the Template

- [initWithHeaderTextProvider:body1TextProvider:gaugeProvider:](init%28headertextprovider_body1textprovider_gaugeprovider_%29.md): Deprecated. Creates a new template that has header text, body text, and a gauge.
- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:gaugeProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_gaugeprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, body text, and a gauge.
- [templateWithHeaderTextProvider:body1TextProvider:gaugeProvider:](templatewithheadertextprovider_body1textprovider_gaugeprovider_.md): Deprecated. Returns a new template that has header text, body text, and a gauge.
