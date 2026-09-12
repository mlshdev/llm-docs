> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktextprovider/localizabletextprovider(withstringsfileformatkey:textproviders:)](https://developer.apple.com/documentation/clockkit/clktextprovider/localizabletextprovider(withstringsfileformatkey:textproviders:))

# localizableTextProvider(withStringsFileFormatKey:textProviders:) (Swift)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.

## Declaration

```swift
class func localizableTextProvider(withStringsFileFormatKey formatKey: String, textProviders: [CLKTextProvider]) -> Self
```

## Parameters

- `formatKey`: The key for the localized format string. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.

  Since the format string’s replacement arguments come from other text providers, the only allowable format specifiers are `%@` and variants (for example, reordering specifiers like `%1@` are also supported).
- `textProviders`: The text providers that produce the format string’s replacement arguments.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a compound text provider using a format string, with other text providers to provide the replacement arguments.

## See Also

### Creating Localized Text Providers

- [localizableTextProvider(withStringsFileTextKey:)](localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProvider(withStringsFileTextKey:shortTextKey:)](localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.

# localizableTextProviderWithStringsFileFormatKey:textProviders: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.

## Declaration

```objectivec
+ (instancetype) localizableTextProviderWithStringsFileFormatKey:(NSString *) formatKey textProviders:(NSArray<CLKTextProvider *> *) textProviders;
```

## Parameters

- `formatKey`: The key for the localized format string. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.

  Since the format string’s replacement arguments come from other text providers, the only allowable format specifiers are `%@` and variants (for example, reordering specifiers like `%1@` are also supported).
- `textProviders`: The text providers that produce the format string’s replacement arguments.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a compound text provider using a format string, with other text providers to provide the replacement arguments.

## See Also

### Creating Localized Text Providers

- [localizableTextProviderWithStringsFileTextKey:](localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProviderWithStringsFileTextKey:shortTextKey:](localizabletextprovider%28withstringsfiletextkey_shorttextkey_%29.md): Deprecated. Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.
