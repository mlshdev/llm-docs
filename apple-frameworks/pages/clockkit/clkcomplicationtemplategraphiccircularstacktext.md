> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccircularstacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccircularstacktext)

# CLKComplicationTemplateGraphicCircularStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

A template for displaying two rows of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCircularStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCircular](clkcomplicationfamily/graphiccircular.md) family.

![Diagram showing the layout of a circular template containing two rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-3262158@2x.png)

## Topics

### Creating the Template

- [init(line1TextProvider:line2TextProvider:)](clkcomplicationtemplategraphiccircularstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two small rows of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplategraphiccircularstacktext/line1textprovider.md): Deprecated. The text to display on the top row.
- [line2TextProvider](clkcomplicationtemplategraphiccircularstacktext/line2textprovider.md): Deprecated. The text to display on the bottom row.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicCircularImage](clkcomplicationtemplategraphiccircularimage.md): Deprecated. A template for displaying a full-color circular image.
- [CLKComplicationTemplateGraphicCircularView](clkcomplicationtemplategraphiccircularview.md): Deprecated. A template for displaying a circular view.
- [CLKComplicationTemplateGraphicCircularStackImage](clkcomplicationtemplategraphiccircularstackimage.md): Deprecated. A template for displaying a full-color circular image and text.
- [CLKComplicationTemplateGraphicCircularStackViewText](clkcomplicationtemplategraphiccircularstackviewtext.md): Deprecated. A template for displaying a SwiftUI view and text.

# CLKComplicationTemplateGraphicCircularStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

A template for displaying two rows of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCircularStackText : CLKComplicationTemplateGraphicCircular
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCircular](clkcomplicationfamily/graphiccircular.md) family.

![Diagram showing the layout of a circular template containing two rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-3262158@2x.png)

## Topics

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplategraphiccircularstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two small rows of text.
- [templateWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplategraphiccircularstacktext/templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template that has two small rows of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplategraphiccircularstacktext/line1textprovider.md): Deprecated. The text to display on the top row.
- [line2TextProvider](clkcomplicationtemplategraphiccircularstacktext/line2textprovider.md): Deprecated. The text to display on the bottom row.

## Relationships

### Inherits From

- [CLKComplicationTemplateGraphicCircular](clkcomplicationtemplategraphiccircular.md)

## See Also

### Text and images

- [CLKComplicationTemplateGraphicCircularImage](clkcomplicationtemplategraphiccircularimage.md): Deprecated. A template for displaying a full-color circular image.
- [CLKComplicationTemplateGraphicCircularStackImage](clkcomplicationtemplategraphiccircularstackimage.md): Deprecated. A template for displaying a full-color circular image and text.
