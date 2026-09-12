> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(localized:table:bundle:locale:comment:)](https://developer.apple.com/documentation/swift/string/init(localized:table:bundle:locale:comment:))

# init(localized:table:bundle:locale:comment:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a localized string from an interpolated string.

## Declaration

```swift
init(localized keyAndValue: String.LocalizationValue, table: String? = nil, bundle: Bundle? = nil, locale: Locale = .current, comment: StaticString? = nil)
```

## Parameters

- `keyAndValue`: A [String.LocalizationValue](localizationvalue.md) that provides the localization key to look up. This parameter also serves as the default value if the system can’t find a localized string.
- `table`: The bundle’s string table to search. If `table` is `nil` or is an empty string, the method attempts to use the table named `Localizable`. The default is `nil`.
- `bundle`: The bundle to use for looking up strings. If `nil`, an app searches its main bundle. The default is `nil`.
- `locale`: The locale to use when localizing interpolated values, such as numbers. This doesn’t change which locale the system uses to look up the localized string. If `nil`, this initializer uses the current locale. The default is `nil`.
- `comment`: The comment to place above the key-value pair in the strings file. This parameter provides the translator with some context about the localized string’s presentation to the user.

<a id="discussion"></a>

## Discussion

Use this initializer when the development-language string serves as your localization key. You can use a fixed string for the key or a string that the system interpolates from values you provide at runtime. For example, if your app’s strings catalog contains a localizable entry for ` “Hello, %@.”`, you create a localized string like the following:

```swift
// Assume the strings file or catalog contains "Hello, %@." for English
// and "Bonjour, %@." for French.
let userName = "Juan"
let greeting = String(localized: "Hello, \(userName).")
// greeting == "Hello, Juan." in en locale, "Bonjour, Juan." in fr locale.
```

If you prefer to use an arbitrary localization key rather than the localized string in the development language, use [init(localized:defaultValue:table:bundle:locale:comment:)](init%28localized_defaultvalue_table_bundle_locale_comment_%29.md). If you need to provide localized strings to another process that might be using a different locale, use [init(localized:)](init%28localized_%29.md).

## See Also

### Creating a Localized String

- [init(localized:options:table:bundle:locale:comment:)](init%28localized_options_table_bundle_locale_comment_%29.md): Creates a localized string from an interpolated string, applying the specified options.
- [String.LocalizationValue](localizationvalue.md): A reference to a localizable string, with optional string interpolation.
- [String.LocalizationOptions](localizationoptions.md): Options to apply when initializing a localized string.
- [init(localized:defaultValue:table:bundle:locale:comment:)](init%28localized_defaultvalue_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key.
- [init(localized:defaultValue:options:table:bundle:locale:comment:)](init%28localized_defaultvalue_options_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key, applying the specified options.
- [init(localized:)](init%28localized_%29.md): Creates a localized string from a localized string resource.
- [init(localized:options:)](init%28localized_options_%29.md): Creates a localized string from a localized string resource, applying the specified options.
