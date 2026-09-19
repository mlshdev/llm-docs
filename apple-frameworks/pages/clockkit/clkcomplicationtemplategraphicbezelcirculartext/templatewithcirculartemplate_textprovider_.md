> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/templatewithcirculartemplate:textprovider:

# templateWithCircularTemplate:textProvider:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns a circular template with text that wraps around the bezel.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
+ (instancetype) templateWithCircularTemplate:(CLKComplicationTemplateGraphicCircular *) circularTemplate textProvider:(CLKTextProvider *) textProvider;
```

## Parameters

- `circularTemplate`: A graphic circular template.
- `textProvider`: The text provider for the text element. The template ignores this text provider’s tint color, and always displays the text with a system color.

## See Also

### Creating the Template

- [initWithCircularTemplate:](init%28circulartemplate_%29.md): Deprecated. Creates a circular template.
- [initWithCircularTemplate:textProvider:](init%28circulartemplate_textprovider_%29.md): Deprecated. Creates a circular template with text that wraps around the bezel.
- [templateWithCircularTemplate:](templatewithcirculartemplate_.md): Deprecated. Returns a circular template.
