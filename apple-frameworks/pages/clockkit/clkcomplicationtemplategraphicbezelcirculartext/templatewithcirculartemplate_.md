> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/templatewithcirculartemplate:](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicbezelcirculartext/templatewithcirculartemplate:)

# templateWithCircularTemplate:

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Returns a circular template.

> Use [WidgetKit](../../widgetkit.md) to create complications. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
+ (instancetype) templateWithCircularTemplate:(CLKComplicationTemplateGraphicCircular *) circularTemplate;
```

## Parameters

- `circularTemplate`: A graphic circular template.

## See Also

### Creating the Template

- [initWithCircularTemplate:](init%28circulartemplate_%29.md): Deprecated. Creates a circular template.
- [initWithCircularTemplate:textProvider:](init%28circulartemplate_textprovider_%29.md): Deprecated. Creates a circular template with text that wraps around the bezel.
- [templateWithCircularTemplate:textProvider:](templatewithcirculartemplate_textprovider_.md): Deprecated. Returns a circular template with text that wraps around the bezel.
