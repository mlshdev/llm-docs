> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktextprovider](https://developer.apple.com/documentation/clockkit/clktextprovider)

# CLKTextProvider (Swift)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The common behavior for displaying text-based data in a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```swift
class CLKTextProvider
```

<a id="overview"></a>

## Overview

Typically, you don’t create instances of this class yourself. Instead, you create instances of an appropriate subclass, based on the type of text data you’re trying to create. However, you can use the [init(format:\_:)](clktextprovider/init%28format___%29.md) initializer or [textProviderWithFormat:](clktextprovider/textproviderwithformat_.md) class method to create a compound text provider constructed from a format string and the data from other text providers.

## Topics

### Creating a Compound Text Provider

- [init(format:\_:)](clktextprovider/init%28format___%29.md): Deprecated. Creates and returns a text provider built from the specified format string.

### Creating Localized Text Providers

- [localizableTextProvider(withStringsFileTextKey:)](clktextprovider/localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProvider(withStringsFileTextKey:shortTextKey:)](clktextprovider/localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.
- [localizableTextProvider(withStringsFileFormatKey:textProviders:)](clktextprovider/localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.

### Setting the Tint Color

- [tintColor](clktextprovider/tintcolor.md): Deprecated. The tint color to use for text.

### Supporting Accessibility

- [accessibilityLabel](clktextprovider/accessibilitylabel.md): Deprecated. A localized string that describes the text.

### Creating Empty Text Providers

- [init()](clktextprovider/init%28%29.md): Deprecated. Creates an empty text provider.
- [new()](clktextprovider/new%28%29.md): Deprecated. Creates an empty text provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKDateTextProvider](clkdatetextprovider.md)
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md)
- [CLKSimpleTextProvider](clksimpletextprovider.md)
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md)
- [CLKTimeTextProvider](clktimetextprovider.md)

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

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.

# CLKTextProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Class  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The common behavior for displaying text-based data in a complication.

> Use [WidgetKit](../widgetkit.md) to create complications for watchOS 10 or later. For more information, see Migrating to WidgetKit.

## Declaration

```objectivec
@interface CLKTextProvider : NSObject
```

<a id="overview"></a>

## Overview

Typically, you don’t create instances of this class yourself. Instead, you create instances of an appropriate subclass, based on the type of text data you’re trying to create. However, you can use the [init(format:\_:)](clktextprovider/init%28format___%29.md) initializer or [textProviderWithFormat:](clktextprovider/textproviderwithformat_.md) class method to create a compound text provider constructed from a format string and the data from other text providers.

## Topics

### Creating a Compound Text Provider

- [textProviderWithFormat:](clktextprovider/textproviderwithformat_.md): Deprecated. Creates and returns a text provider built from the specified format string.

### Creating Localized Text Providers

- [localizableTextProviderWithStringsFileTextKey:](clktextprovider/localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProviderWithStringsFileTextKey:shortTextKey:](clktextprovider/localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.
- [localizableTextProviderWithStringsFileFormatKey:textProviders:](clktextprovider/localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.

### Setting the Tint Color

- [tintColor](clktextprovider/tintcolor.md): Deprecated. The tint color to use for text.

### Supporting Accessibility

- [accessibilityLabel](clktextprovider/accessibilitylabel.md): Deprecated. A localized string that describes the text.

### Creating Empty Text Providers

- [init](clktextprovider/init%28%29.md): Deprecated. Creates an empty text provider.
- [new](clktextprovider/new%28%29.md): Deprecated. Creates an empty text provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLKDateTextProvider](clkdatetextprovider.md)
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md)
- [CLKSimpleTextProvider](clksimpletextprovider.md)
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md)
- [CLKTimeTextProvider](clktimetextprovider.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Text providers

- [CLKSimpleTextProvider](clksimpletextprovider.md): Deprecated. A single line of text to display in your complication interface.
- [CLKDateTextProvider](clkdatetextprovider.md): Deprecated. A formatted string that conveys a date without any time information.
- [CLKRelativeDateTextProvider](clkrelativedatetextprovider.md): Deprecated. A formatted string that conveys the difference in time between the current date and a date that you specify.
- [CLKTimeIntervalTextProvider](clktimeintervaltextprovider.md): Deprecated. A formatted time range.
- [CLKTimeTextProvider](clktimetextprovider.md): Deprecated. A formatted time value.
