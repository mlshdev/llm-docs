> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext/bottomtextprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularopengaugesimpletext/bottomtextprovider)

# bottomTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display at the bottom of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var bottomTextProvider: CLKTextProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.

# bottomTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display at the bottom of the gauge.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKTextProvider * bottomTextProvider;
```

<a id="Discussion"></a>

## Discussion

This property supports multicolor text.

## See Also

### Setting the Complication Data

- [centerTextProvider](centertextprovider.md): Deprecated. The text to display in the center of the gauge.
- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
