> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularclosedgaugetext/templatewithgaugeprovider:centertextprovider:

# templateWithGaugeProvider:centerTextProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a new template that has a closed circular gauge with a small amount of text in the center.

## Declaration

```objectivec
+ (instancetype) templateWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [initWithGaugeProvider:centerTextProvider:](init%28gaugeprovider_centertextprovider_%29.md): Deprecated. Creates a new template that has a closed circular gauge with a small amount of text in the center.
