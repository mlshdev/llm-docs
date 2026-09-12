> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/init(circulartemplate:textprovider:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/init(circulartemplate:textprovider:))

# init(circularTemplate:textProvider:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a circular template with text that wraps around the bezel.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```swift
init(circularTemplate: CLKComplicationTemplateGraphicCircular, textProvider: CLKTextProvider?)
```

## Parameters

- `circularTemplate`: A graphic circular template.
- `textProvider`: The text provider for the text element. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [init(circularTemplate:)](init%28circulartemplate_%29.md): Deprecated. Creates a circular template.

# initWithCircularTemplate:textProvider: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Creates a circular template with text that wraps around the bezel.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
- (instancetype) initWithCircularTemplate:(CLKComplicationTemplateGraphicCircular *) circularTemplate textProvider:(CLKTextProvider *) textProvider;
```

## Parameters

- `circularTemplate`: A graphic circular template.
- `textProvider`: The text provider for the text element. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithCircularTemplate:](init%28circulartemplate_%29.md): Deprecated. Creates a circular template.
- [templateWithCircularTemplate:](templatewithcirculartemplate_.md): Deprecated. Returns a circular template.
- [templateWithCircularTemplate:textProvider:](templatewithcirculartemplate_textprovider_.md): Deprecated. Returns a circular template with text that wraps around the bezel.
