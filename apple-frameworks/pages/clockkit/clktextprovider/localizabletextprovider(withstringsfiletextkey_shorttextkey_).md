> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktextprovider/localizabletextprovider(withstringsfiletextkey:shorttextkey:)](https://developer.apple.com/documentation/clockkit/clktextprovider/localizabletextprovider(withstringsfiletextkey:shorttextkey:))

# localizableTextProvider(withStringsFileTextKey:shortTextKey:) (Swift)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.

## Declaration

```swift
class func localizableTextProvider(withStringsFileTextKey textKey: String, shortTextKey: String?) -> Self
```

## Parameters

- `textKey`: The key for the desired text. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.
- `shortTextKey`: The key for the desired fallback text. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a text provider that returns localized strings with a shorter fallback string.

## See Also

### Creating Localized Text Providers

- [localizableTextProvider(withStringsFileTextKey:)](localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProvider(withStringsFileFormatKey:textProviders:)](localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.

# localizableTextProviderWithStringsFileTextKey:shortTextKey: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

Creates a localizable simple text provider using strings file keys for both the regular text and the shorter fallback text.

## Declaration

```objectivec
+ (instancetype) localizableTextProviderWithStringsFileTextKey:(NSString *) textKey shortTextKey:(NSString *) shortTextKey;
```

## Parameters

- `textKey`: The key for the desired text. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.
- `shortTextKey`: The key for the desired fallback text. This key must appear in the localized string files named `ckcomplication.strings` in the WatchKit extension target.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a text provider that returns localized strings with a shorter fallback string.

## See Also

### Creating Localized Text Providers

- [localizableTextProviderWithStringsFileTextKey:](localizabletextprovider%28withstringsfiletextkey_%29.md): Deprecated. Creates a localizable simple text provider using the strings file key for the text.
- [localizableTextProviderWithStringsFileFormatKey:textProviders:](localizabletextprovider%28withstringsfileformatkey_textproviders_%29.md): Deprecated. Creates a localizable text provider with a strings file key that resolves to a format string, and with text providers for the replacement arguments.
