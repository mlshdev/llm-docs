> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatecircularsmallsimpletext](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatecircularsmallsimpletext)

# CLKComplicationTemplateCircularSmallSimpleText (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a short text string.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateCircularSmallSimpleText
```

<a id="overview"></a>

## Overview

This template belongs to the circularSmall family.

![A diagram showing the layout of the circular small simple text complication. The diagram shows three examples, each with a single line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933738@2x.png)

## Topics

### Creating the Template

- [init(textProvider:)](clkcomplicationtemplatecircularsmallsimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatecircularsmallsimpletext/textprovider.md): Deprecated. The text to display in the complication.

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
- [CLKComplicationTemplateCircularSmallStackText](clkcomplicationtemplatecircularsmallstacktext.md): Deprecated. A template for displaying two text strings stacked on top of each other.

# CLKComplicationTemplateCircularSmallSimpleText (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a short text string.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateCircularSmallSimpleText : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the circularSmall family.

![A diagram showing the layout of the circular small simple text complication. The diagram shows three examples, each with a single line of text.](https://developer.apple.com/images/com.apple.clockkit/media-2933738@2x.png)

## Topics

### Creating the Template

- [initWithTextProvider:](clkcomplicationtemplatecircularsmallsimpletext/init%28textprovider_%29.md): Deprecated. Creates a new template from the provided text.
- [templateWithTextProvider:](clkcomplicationtemplatecircularsmallsimpletext/templatewithtextprovider_.md): Deprecated. Returns a new template from the provided text.

### Setting the Complication Data

- [textProvider](clkcomplicationtemplatecircularsmallsimpletext/textprovider.md): Deprecated. The text to display in the complication.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Text templates

- [CLKComplicationTemplateCircularSmallRingText](clkcomplicationtemplatecircularsmallringtext.md): Deprecated. A template for displaying a short text string encircled by a configurable progress ring.
- [CLKComplicationTemplateCircularSmallStackText](clkcomplicationtemplatecircularsmallstacktext.md): Deprecated. A template for displaying two text strings stacked on top of each other.
