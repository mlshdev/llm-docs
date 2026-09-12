> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/templatewithgaugeprovider:bottomtextprovider:centertextprovider:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularopengaugesimpletext/templatewithgaugeprovider:bottomtextprovider:centertextprovider:)

# templateWithGaugeProvider:bottomTextProvider:centerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider bottomTextProvider:(CLKTextProvider *) bottomTextProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `bottomTextProvider`: The text provider for the bottom text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:bottomTextProvider:centerTextProvider:](init%28gaugeprovider_bottomtextprovider_centertextprovider_%29.md): Deprecated. Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.
