> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/localizationoptions](https://developer.apple.com/documentation/swift/string/localizationoptions)

# String.LocalizationOptions

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Options to apply when initializing a localized string.

## Declaration

```swift
struct LocalizationOptions
```

<a id="overview"></a>

## Overview

Use this type to configure how the system localizes strings. You can use the [replacements](localizationoptions/replacements.md) property to provide replacement values for localizable strings that use the `\(placeholder:)` syntax.

## Topics

### Specifying localization behavior

- [replacements](localizationoptions/replacements.md): An array of replacement options.

### Initializers

- [init()](localizationoptions/init%28%29.md)

## See Also

### Creating a Localized String

- [init(localized:table:bundle:locale:comment:)](init%28localized_table_bundle_locale_comment_%29.md): Creates a localized string from an interpolated string.
- [init(localized:options:table:bundle:locale:comment:)](init%28localized_options_table_bundle_locale_comment_%29.md): Creates a localized string from an interpolated string, applying the specified options.
- [String.LocalizationValue](localizationvalue.md): A reference to a localizable string, with optional string interpolation.
- [init(localized:defaultValue:table:bundle:locale:comment:)](init%28localized_defaultvalue_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key.
- [init(localized:defaultValue:options:table:bundle:locale:comment:)](init%28localized_defaultvalue_options_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key, applying the specified options.
- [init(localized:)](init%28localized_%29.md): Creates a localized string from a localized string resource.
- [init(localized:options:)](init%28localized_options_%29.md): Creates a localized string from a localized string resource, applying the specified options.
