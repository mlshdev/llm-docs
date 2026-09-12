> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatstyleconfiguration](https://developer.apple.com/documentation/foundation/numberformatstyleconfiguration)

# NumberFormatStyleConfiguration

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Configuration settings for formatting numbers of different types.

## Declaration

```swift
enum NumberFormatStyleConfiguration
```

<a id="overview"></a>

## Overview

This type is effectively a namespace to collect types that configure parts of a formatted number, such as grouping, precision, and separator and sign characters.

## Topics

### Specifying Configuration

- [NumberFormatStyleConfiguration.DecimalSeparatorDisplayStrategy](numberformatstyleconfiguration/decimalseparatordisplaystrategy.md): A structure that an integer format style uses to configure a decimal separator display strategy.
- [NumberFormatStyleConfiguration.Grouping](numberformatstyleconfiguration/grouping.md): A structure that an integer format style uses to configure grouping.
- [NumberFormatStyleConfiguration.Precision](numberformatstyleconfiguration/precision.md): A structure that an integer format style uses to configure precision.
- [NumberFormatStyleConfiguration.RoundingRule](numberformatstyleconfiguration/roundingrule.md): The type used for rounding rule values.
- [NumberFormatStyleConfiguration.SignDisplayStrategy](numberformatstyleconfiguration/signdisplaystrategy.md): A structure that an integer format style uses to configure a sign display strategy.
- [NumberFormatStyleConfiguration.Notation](numberformatstyleconfiguration/notation.md): A structure that an integer format style uses to configure notation.

## See Also

### Customizing style behavior

- [decimalSeparator(strategy:)](decimal/formatstyle/decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](decimal/formatstyle/grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](decimal/formatstyle/locale%28__%29.md): Modifies the format style to use the specified locale.
- [notation(\_:)](decimal/formatstyle/notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](decimal/formatstyle/precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](decimal/formatstyle/rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](decimal/formatstyle/scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](decimal/formatstyle/sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [Decimal.FormatStyle.Configuration](decimal/formatstyle/configuration.md): The type the format style uses for configuration settings.
