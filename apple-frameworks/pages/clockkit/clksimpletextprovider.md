> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clksimpletextprovider](https://developer.apple.com/documentation/clockkit/clksimpletextprovider)

# CLKSimpleTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A single line of text to display in your complication interface.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKSimpleTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use a simple text provider to specify strings for your complications. The simple text object handles the formatting of that string in your complication, which may include tinting it to match the color of the clock face.

When creating a simple text provider, you can specify both a long version and a short version of your text. Providing both strings gives you more control over the text displayed by your complication. When the long string doesn’t fit in the available space, the text provider tries to display the value in the [shortText](clksimpletextprovider/shorttext.md) property instead. If the shorter version is still too long, it displays a truncated version of the longer text.

## Topics

### Creating a Text Provider

- [init(text:)](clksimpletextprovider/init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [init(text:shortText:)](clksimpletextprovider/init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [init(text:shortText:accessibilityLabel:)](clksimpletextprovider/init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.

### Getting the Text

- [text](clksimpletextprovider/text.md): Deprecated. The long version of text that you want to display.
- [shortText](clksimpletextprovider/shorttext.md): Deprecated. A shorter version of the text.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Text providers

- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.

# CLKSimpleTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

A single line of text to display in your complication interface.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKSimpleTextProvider : CLKTextProvider
```

## Mentioned In

- [Creating a timeline entry](creating-a-timeline-entry.md)

<a id="overview"></a>

## Overview

Use a simple text provider to specify strings for your complications. The simple text object handles the formatting of that string in your complication, which may include tinting it to match the color of the clock face.

When creating a simple text provider, you can specify both a long version and a short version of your text. Providing both strings gives you more control over the text displayed by your complication. When the long string doesn’t fit in the available space, the text provider tries to display the value in the [shortText](clksimpletextprovider/shorttext.md) property instead. If the shorter version is still too long, it displays a truncated version of the longer text.

## Topics

### Creating a Text Provider

- [textProviderWithText:](clksimpletextprovider/init%28text_%29.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [initWithText:](clksimpletextprovider/initwithtext_.md): Deprecated. Creates and returns a text provider with the specified long form text.
- [textProviderWithText:shortText:](clksimpletextprovider/init%28text_shorttext_%29.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [initWithText:shortText:](clksimpletextprovider/initwithtext_shorttext_.md): Deprecated. Creates and returns a text provider with both long and short versions of the text.
- [textProviderWithText:shortText:accessibilityLabel:](clksimpletextprovider/init%28text_shorttext_accessibilitylabel_%29.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.
- [initWithText:shortText:accessibilityLabel:](clksimpletextprovider/initwithtext_shorttext_accessibilitylabel_.md): Deprecated. Creates and returns a text provider with the text strings and an accessible string.

### Getting the Text

- [text](clksimpletextprovider/text.md): Deprecated. The long version of text that you want to display.
- [shortText](clksimpletextprovider/shorttext.md): Deprecated. A shorter version of the text.

## Relationships

### Inherits From

- [CLKTextProvider](clktextprovider.md)

## See Also

### Text providers

- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
- [CLKTextProvider](clktextprovider.md): Deprecated. The common behavior for displaying text-based data in a complication.
