> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/textprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/textprovider)

# textProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display along the bezel.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
@NSCopying var textProvider: CLKTextProvider? { get set }
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the bezel text as white.

## See Also

### Setting the Complication Data

- [circularTemplate](circulartemplate.md): Deprecated. The circular template to display.

# textProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

The text to display along the bezel.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLKTextProvider * textProvider;
```

<a id="Discussion"></a>

## Discussion

The complication ignores the text provider’s tint color. It always displays the bezel text as white.

## See Also

### Setting the Complication Data

- [circularTemplate](circulartemplate.md): Deprecated. The circular template to display.
