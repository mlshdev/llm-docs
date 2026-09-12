> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallstacktext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallstacktext)

# CLKComplicationTemplateCircularSmallStackText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying two text strings stacked on top of each other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallStackText
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.circularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small stack text complication. The diagram has two examples, each showing two small rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933743@2x.png)

## Topics

### Creating the Template

- [init(line1TextProvider:line2TextProvider:)](clkcomplicationtemplatecircularsmallstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two lines of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplatecircularsmallstacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatecircularsmallstacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

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

- [CLKComplicationTemplateCircularSmallRingText](clkcomplicationtemplatecircularsmallringtext.md): Deprecated. A template for displaying a short text string encircled by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallSimpleText](clkcomplicationtemplatecircularsmallsimpletext.md): Deprecated. A template for displaying a short text string.

# CLKComplicationTemplateCircularSmallStackText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying two text strings stacked on top of each other.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallStackText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyCircularSmall](clkcomplicationfamily/circularsmall.md) family.

![A diagram showing the layout of the circular small stack text complication. The diagram has two examples, each showing two small rows of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933743@2x.png)

## Topics

### Creating the Template

- [initWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplatecircularsmallstacktext/init%28line1textprovider_line2textprovider_%29.md): Deprecated. Creates a new template that has two lines of text.
- [templateWithLine1TextProvider:line2TextProvider:](clkcomplicationtemplatecircularsmallstacktext/templatewithline1textprovider_line2textprovider_.md): Deprecated. Returns a new template that has two lines of text.

### Setting the Complication Data

- [line1TextProvider](clkcomplicationtemplatecircularsmallstacktext/line1textprovider.md): Deprecated. The text to display on the top line of the complication.
- [line2TextProvider](clkcomplicationtemplatecircularsmallstacktext/line2textprovider.md): Deprecated. The text to display on the bottom line of the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateCircularSmallRingText](clkcomplicationtemplatecircularsmallringtext.md): Deprecated. A template for displaying a short text string encircled by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallSimpleText](clkcomplicationtemplatecircularsmallsimpletext.md): Deprecated. A template for displaying a short text string.
