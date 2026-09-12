> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphiccornerstacktext)

# CLKComplicationTemplateGraphicCornerStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying stacked text in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateGraphicCornerStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.graphicCorner](clkcomplicationfamily/graphiccorner.md) family.  shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of the outer and inner text.](https://developer.apple.com/images/com.apple.clockkit/media-3030692@2x.png)

The system always displays the outer text as white. The inner text can be multicolored.

## Topics

### Creating the Template

- [init(innerTextProvider:outerTextProvider:)](clkcomplicationtemplategraphiccornerstacktext/init%28innertextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has an inner line of text and an outer text element.

### Setting the Complication Data

- [outerTextProvider](clkcomplicationtemplategraphiccornerstacktext/outertextprovider.md): Deprecated. The outer text to display in the complication.
- [innerTextProvider](clkcomplicationtemplategraphiccornerstacktext/innertextprovider.md): Deprecated. The inner text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text and image

- [CLKComplicationTemplateGraphicCornerCircularImage](clkcomplicationtemplategraphiccornercircularimage.md): Deprecated. A template for displaying an image in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerCircularView](clkcomplicationtemplategraphiccornercircularview.md): Deprecated. A template for displaying a SwiftUI view in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextImage](clkcomplicationtemplategraphiccornertextimage.md): Deprecated. A template for displaying an image and text in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextView](clkcomplicationtemplategraphiccornertextview.md): Deprecated. A template for displaying a SwiftUI view and text in the clock face’s corner.

# CLKComplicationTemplateGraphicCornerStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 5.0+ (deprecated in 27.0)

A template for displaying stacked text in the clock face’s corner.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateGraphicCornerStackText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyGraphicCorner](clkcomplicationfamily/graphiccorner.md) family.  shows the layout of the image and where the template might appear on the clock face.

![Diagram showing the layout of the outer and inner text.](https://developer.apple.com/images/com.apple.clockkit/media-3030692@2x.png)

The system always displays the outer text as white. The inner text can be multicolored.

## Topics

### Creating the Template

- [initWithInnerTextProvider:outerTextProvider:](clkcomplicationtemplategraphiccornerstacktext/init%28innertextprovider_outertextprovider_%29.md): Deprecated. Creates a template that has an inner line of text and an outer text element.
- [templateWithInnerTextProvider:outerTextProvider:](clkcomplicationtemplategraphiccornerstacktext/templatewithinnertextprovider_outertextprovider_.md): Deprecated. Returns a template that has an inner line of text and an outer text element.

### Setting the Complication Data

- [outerTextProvider](clkcomplicationtemplategraphiccornerstacktext/outertextprovider.md): Deprecated. The outer text to display in the complication.
- [innerTextProvider](clkcomplicationtemplategraphiccornerstacktext/innertextprovider.md): Deprecated. The inner text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text and image

- [CLKComplicationTemplateGraphicCornerCircularImage](clkcomplicationtemplategraphiccornercircularimage.md): Deprecated. A template for displaying an image in the clock face’s corner.
- [CLKComplicationTemplateGraphicCornerTextImage](clkcomplicationtemplategraphiccornertextimage.md): Deprecated. A template for displaying an image and text in the clock face’s corner.
