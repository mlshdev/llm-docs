> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargesimpletext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargesimpletext)

# CLKComplicationTemplateExtraLargeSimpleText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying a small amount of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateExtraLargeSimpleText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.extraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large text complication. The diagram shows a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880722@2x.png)

## Topics

### Creating the Template

- [init(textProvider:)](clkcomplicationtemplateextralargesimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplateextralargesimpletext/textprovider.md): Deprecated. The text to display in the complication.

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

### Text templates

- [CLKComplicationTemplateExtraLargeColumnsText](clkcomplicationtemplateextralargecolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.

# CLKComplicationTemplateExtraLargeSimpleText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

A template for displaying a small amount of text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateExtraLargeSimpleText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyExtraLarge](clkcomplicationfamily/extralarge.md) family.

![A diagram showing the layout of the extra large text complication. The diagram shows a small amount of text.](https://developer.apple.com/images/com.apple.clockkit/media-2880722@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:](clkcomplicationtemplateextralargesimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.
- [templateWithTextProvider:](clkcomplicationtemplateextralargesimpletext/templatewithtextprovider_.md): Deprecated. Returns a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplateextralargesimpletext/textprovider.md): Deprecated. The text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateExtraLargeColumnsText](clkcomplicationtemplateextralargecolumnstext.md): Deprecated. A template for displaying two rows and two columns of text.
- [CLKComplicationTemplateExtraLargeRingText](clkcomplicationtemplateextralargeringtext.md): Deprecated. A template for displaying text encircled by a configurable progress ring.
- [CLKComplicationTemplateExtraLargeStackText](clkcomplicationtemplateextralargestacktext.md): Deprecated. A template for displaying two strings stacked one on top of the other.
