> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationfamily](https://developer.apple.com/documentation/clockkit/clkcomplicationfamily)

# CLKComplicationFamily (Swift)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the template groups.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
enum CLKComplicationFamily
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

## Topics

### Circular Small

- [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md): A small circular area that ClockKit displays on the Color watch face.

### Extra Large

- [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md): A large square area that ClockKit displays on the X-Large watch face.

### Modular

- [CLKComplicationFamily.modularSmall](clkcomplicationfamily/modularsmall.md): A small square area that ClockKit displays on the Modular watch face.
- [CLKComplicationFamily.modularLarge](clkcomplicationfamily/modularlarge.md): A large rectangular area that ClockKit displays on the Modular watch face.

### Utilitarian

- [CLKComplicationFamily.utilitarianSmall](clkcomplicationfamily/utilitariansmall.md): A small square or rectangular area that ClockKit Displays on the Utility, Mickey, Chronograph, and Simple watch faces.
- [CLKComplicationFamily.utilitarianSmallFlat](clkcomplicationfamily/utilitariansmallflat.md): A small rectangular area that ClockKit Displays on the Photos, Motion, and Timelapse watch faces.
- [CLKComplicationFamily.utilitarianLarge](clkcomplicationfamily/utilitarianlarge.md): A large rectangular area that spans the width of the screen in the Utility and Mickey watch faces.

### Graphic

- [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md): A curved area that fills the corners in the Infograph watch face.
- [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md): A circular area that ClockKit displays on the Infograph and Infograph Modular watch faces.
- [CLKComplicationFamily.graphicBezel](clkcomplicationfamily/graphicbezel.md): A circular area with optional curved text that ClockKit displays along the bezel of the Infograph watch face.
- [CLKComplicationFamily.graphicRectangular](clkcomplicationfamily/graphicrectangular.md): A large rectangular area that ClockKit displays in the center of the Infograph Modular watch face.
- [CLKComplicationFamily.graphicExtraLarge](clkcomplicationfamily/graphicextralarge.md): A large square area that ClockKit displays on the X-Large watch face.

### Initializers

- [init(rawValue:)](clkcomplicationfamily/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Templates

- [SwiftUI templates](swiftui-templates.md): Design complication templates using SwiftUI views.
- [ComplicationRenderingMode](complicationrenderingmode.md): Deprecated. The complication’s appearance, as specified by the watch face.
- [Data providers](data-providers.md): Feed data to a complication template.
- [Circular small](circular-small.md): Display small, circular content in the corners of the Color watch face.
- [Extra large](extra-large.md): Display content on the X-Large watch face.
- [Modular small](modular-small.md): Display content in the smaller spaces of the Modular watch face.
- [Modular large](modular-large.md): Display multiple rows of content in the large, central complication on the Modular watch face.
- [Utilitarian](utilitarian.md): Use the utilitarian templates to display content on a variety of watch faces, including the Utility, Chronograph, Simple, and character watch faces.
- [Graphic](graphic.md): Display visually rich content on watch faces.
- [CLKComplicationTemplate](clkcomplicationtemplate.md): Deprecated. An abstract class that defines the base behavior for all templates.
- [CLKComplicationSupportedFamilies](../bundleresources/information-property-list/clkcomplicationsupportedfamilies.md): Deprecated. The complication families for which the app can provide data.

# CLKComplicationFamily (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the template groups.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
enum CLKComplicationFamily : NSInteger;
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

## Topics

### Circular Small

- [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md): A small circular area that ClockKit displays on the Color watch face.

### Extra Large

- [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md): A large square area that ClockKit displays on the X-Large watch face.

### Modular

- [CLKComplicationFamilyModularSmall](clkcomplicationfamily/modularsmall.md): A small square area that ClockKit displays on the Modular watch face.
- [CLKComplicationFamilyModularLarge](clkcomplicationfamily/modularlarge.md): A large rectangular area that ClockKit displays on the Modular watch face.

### Utilitarian

- [CLKComplicationFamilyUtilitarianSmall](clkcomplicationfamily/utilitariansmall.md): A small square or rectangular area that ClockKit Displays on the Utility, Mickey, Chronograph, and Simple watch faces.
- [CLKComplicationFamilyUtilitarianSmallFlat](clkcomplicationfamily/utilitariansmallflat.md): A small rectangular area that ClockKit Displays on the Photos, Motion, and Timelapse watch faces.
- [CLKComplicationFamilyUtilitarianLarge](clkcomplicationfamily/utilitarianlarge.md): A large rectangular area that spans the width of the screen in the Utility and Mickey watch faces.

### Graphic

- [CLKComplicationFamilyGraphicCorner](clkcomplicationfamily/graphiccorner.md): A curved area that fills the corners in the Infograph watch face.
- [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md): A circular area that ClockKit displays on the Infograph and Infograph Modular watch faces.
- [CLKComplicationFamilyGraphicBezel](clkcomplicationfamily/graphicbezel.md): A circular area with optional curved text that ClockKit displays along the bezel of the Infograph watch face.
- [CLKComplicationFamilyGraphicRectangular](clkcomplicationfamily/graphicrectangular.md): A large rectangular area that ClockKit displays in the center of the Infograph Modular watch face.
- [CLKComplicationFamilyGraphicExtraLarge](clkcomplicationfamily/graphicextralarge.md): A large square area that ClockKit displays on the X-Large watch face.

## See Also

### Templates

- [SwiftUI templates](swiftui-templates.md): Design complication templates using SwiftUI views.
- [Data providers](data-providers.md): Feed data to a complication template.
- [Circular small](circular-small.md): Display small, circular content in the corners of the Color watch face.
- [Extra large](extra-large.md): Display content on the X-Large watch face.
- [Modular small](modular-small.md): Display content in the smaller spaces of the Modular watch face.
- [Modular large](modular-large.md): Display multiple rows of content in the large, central complication on the Modular watch face.
- [Utilitarian](utilitarian.md): Use the utilitarian templates to display content on a variety of watch faces, including the Utility, Chronograph, Simple, and character watch faces.
- [Graphic](graphic.md): Display visually rich content on watch faces.
- [CLKComplicationTemplate](clkcomplicationtemplate.md): Deprecated. An abstract class that defines the base behavior for all templates.
- [CLKComplicationSupportedFamilies](../bundleresources/information-property-list/clkcomplicationsupportedfamilies.md): Deprecated. The complication families for which the app can provide data.
