> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext/init(gaugeprovider:bottomtextprovider:centertextprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext/init(gaugeprovider:bottomtextprovider:centertextprovider:))

# init(gaugeProvider:bottomTextProvider:centerTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, bottomTextProvider: CLKTextProvider, centerTextProvider: CLKTextProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `bottomTextProvider`: The text provider for the bottom text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the central text. The template supports multicolored text from this text provider.

# initWithGaugeProvider:bottomTextProvider:centerTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider bottomTextProvider:(CLKTextProvider *) bottomTextProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `bottomTextProvider`: The text provider for the bottom text. The template supports multicolored text from this text provider.
- `centerTextProvider`: The text provider for the central text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [templateWithGaugeProvider:bottomTextProvider:centerTextProvider:](templatewithgaugeprovider_bottomtextprovider_centertextprovider_.md): Deprecated. Returns a new template with an open circular gauge, a small text element at the bottom, and a larger text element in the center.
