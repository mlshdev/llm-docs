> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicrectangulartextgauge/headerimageprovider

# headerImageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The header image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var headerImageProvider: CLKFullColorImageProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [body1TextProvider](body1textprovider.md): Deprecated. The main body text to display in the complication.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.

# headerImageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.2)

The header image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKFullColorImageProvider * headerImageProvider;
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image.

## See Also

### Setting the Complication Data

- [headerTextProvider](headertextprovider.md): Deprecated. The header text to display in the complication.
- [body1TextProvider](body1textprovider.md): Deprecated. The main body text to display in the complication.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
