> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeimage/init(gaugeprovider:bottomimageprovider:centertextprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugeimage/init(gaugeprovider:bottomimageprovider:centertextprovider:))

# init(gaugeProvider:bottomImageProvider:centerTextProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.

## Declaration

```swift
init(gaugeProvider: CLKGaugeProvider, bottomImageProvider: CLKFullColorImageProvider, centerTextProvider: CLKTextProvider)
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `bottomImageProvider`: The image provider for a small image at the bottom of the template. This template uses a full-color image.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

# initWithGaugeProvider:bottomImageProvider:centerTextProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.

## Declaration

```objectivec
- (instancetype) initWithGaugeProvider:(CLKGaugeProvider *) gaugeProvider bottomImageProvider:(CLKFullColorImageProvider *) bottomImageProvider centerTextProvider:(CLKTextProvider *) centerTextProvider;
```

## Parameters

- `gaugeProvider`: The gauge provider for the template.
- `bottomImageProvider`: The image provider for a small image at the bottom of the template. This template uses a full-color image.
- `centerTextProvider`: The text provider for the center text. The template supports multicolored text from this text provider.

## See Also

### Creating the Template

- [templateWithGaugeProvider:bottomImageProvider:centerTextProvider:](templatewithgaugeprovider_bottomimageprovider_centertextprovider_.md): Deprecated. Returns a new template that has an open circular gauge, a small image at the bottom, and a small amount of text in the center.
