> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgauge/init(headertextprovider:body1textprovider:gaugeprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgauge/init(headertextprovider:body1textprovider:gaugeprovider:))

# init(headerTextProvider:body1TextProvider:gaugeProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has header text, body text, and a gauge.

## Declaration

```swift
init(headerTextProvider: CLKTextProvider, body1TextProvider: CLKTextProvider, gaugeProvider: CLKGaugeProvider)
```

## Parameters

- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the body text. The template supports multicolored text from this text provider.
- `gaugeProvider`: The gauge provider for the template.

## See Also

### Creating the Template

- [init(headerImageProvider:headerTextProvider:body1TextProvider:gaugeProvider:)](init%28headerimageprovider_headertextprovider_body1textprovider_gaugeprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, body text, and a gauge.

# initWithHeaderTextProvider:body1TextProvider:gaugeProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has header text, body text, and a gauge.

## Declaration

```objectivec
- (instancetype) initWithHeaderTextProvider:(CLKTextProvider *) headerTextProvider body1TextProvider:(CLKTextProvider *) body1TextProvider gaugeProvider:(CLKGaugeProvider *) gaugeProvider;
```

## Parameters

- `headerTextProvider`: The text provider for the header text. The template supports multicolored text from this text provider.
- `body1TextProvider`: The text provider for the body text. The template supports multicolored text from this text provider.
- `gaugeProvider`: The gauge provider for the template.

## See Also

### Creating the Template

- [initWithHeaderImageProvider:headerTextProvider:body1TextProvider:gaugeProvider:](init%28headerimageprovider_headertextprovider_body1textprovider_gaugeprovider_%29.md): Deprecated. Creates a new template that has a header row with an image and text, body text, and a gauge.
- [templateWithHeaderTextProvider:body1TextProvider:gaugeProvider:](templatewithheadertextprovider_body1textprovider_gaugeprovider_.md): Deprecated. Returns a new template that has header text, body text, and a gauge.
- [templateWithHeaderImageProvider:headerTextProvider:body1TextProvider:gaugeProvider:](templatewithheaderimageprovider_headertextprovider_body1textprovider_gaugeprovider_.md): Deprecated. Returns a new template that has a header row with an image and text, body text, and a gauge.
