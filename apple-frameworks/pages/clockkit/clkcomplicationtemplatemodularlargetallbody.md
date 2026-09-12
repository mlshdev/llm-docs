> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplatemodularlargetallbody](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplatemodularlargetallbody)

# CLKComplicationTemplateModularLargeTallBody (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and row of tall body text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKComplicationTemplateModularLargeTallBody
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamily.modularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large tall body complication. The diagram shows  the header row above a single line of large body text.](https://developer.apple.com/images/com.apple.clockkit/media-2933748@2x.png)

## Topics

### Creating the Template

- [init(headerTextProvider:bodyTextProvider:)](clkcomplicationtemplatemodularlargetallbody/init%28headertextprovider_bodytextprovider_%29.md): Deprecated. Creates a template that has a header and a row of tall body text.

### Setting the Complication Data

- [headerTextProvider](clkcomplicationtemplatemodularlargetallbody/headertextprovider.md): Deprecated. The text to display in the header line.
- [bodyTextProvider](clkcomplicationtemplatemodularlargetallbody/bodytextprovider.md): Deprecated. The text to display in the body line.

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

### Body templates

- [CLKComplicationTemplateModularLargeStandardBody](clkcomplicationtemplatemodularlargestandardbody.md): Deprecated. A template for displaying a header row and two lines of text.

# CLKComplicationTemplateModularLargeTallBody (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A template for displaying a header row and row of tall body text.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKComplicationTemplateModularLargeTallBody : CLKComplicationTemplate
```

<a id="overview"></a>

## Overview

This template belongs to the [CLKComplicationFamilyModularLarge](clkcomplicationfamily/modularlarge.md) family.

![A diagram showing the layout of the modular large tall body complication. The diagram shows  the header row above a single line of large body text.](https://developer.apple.com/images/com.apple.clockkit/media-2933748@2x.png)

## Topics

### Creating the Template

- [initWithHeaderTextProvider:bodyTextProvider:](clkcomplicationtemplatemodularlargetallbody/init%28headertextprovider_bodytextprovider_%29.md): Deprecated. Creates a template that has a header and a row of tall body text.
- [templateWithHeaderTextProvider:bodyTextProvider:](clkcomplicationtemplatemodularlargetallbody/templatewithheadertextprovider_bodytextprovider_.md): Deprecated. Returns a template that has a header and a row of tall body text.

### Setting the Complication Data

- [headerTextProvider](clkcomplicationtemplatemodularlargetallbody/headertextprovider.md): Deprecated. The text to display in the header line.
- [bodyTextProvider](clkcomplicationtemplatemodularlargetallbody/bodytextprovider.md): Deprecated. The text to display in the body line.

## Relationships

### Inherits From

- [CLKComplicationTemplate](clkcomplicationtemplate.md)

## See Also

### Body templates

- [CLKComplicationTemplateModularLargeStandardBody](clkcomplicationtemplatemodularlargestandardbody.md): Deprecated. A template for displaying a header row and two lines of text.
