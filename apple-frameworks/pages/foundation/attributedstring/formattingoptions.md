> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/formattingoptions](https://developer.apple.com/documentation/foundation/attributedstring/formattingoptions)

# AttributedString.FormattingOptions

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that affect the handling of attributes.

## Declaration

```swift
struct FormattingOptions
```

## Topics

### Creating Formatting Options

- [init()](init%28%29.md): Creates an empty attributed string.
- [init(\_:)](init%28__%29-1fru0.md): Creates a value-type attributed string from a reference type.
- [init(\_:)](init%28__%29-8tnoq.md): Creates an attributed string from an attributed substring.

### Using Defined Formatting Options

- [applyReplacementIndexAttribute](formattingoptions/applyreplacementindexattribute.md): An option to add an attribute that marks replacements in localized strings.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Localized Attributed String

- [init(localized:options:table:bundle:locale:comment:)](init%28localized_options_table_bundle_locale_comment_%29-8dlnl.md): Creates an attributed string by looking up a localized string from the app’s bundle.
- [init(localized:options:table:bundle:locale:comment:including:)](init%28localized_options_table_bundle_locale_comment_including_%29-8uknv.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope.
- [init(localized:options:table:bundle:locale:comment:including:)](init%28localized_options_table_bundle_locale_comment_including_%29-5jzpg.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope that a key path identifies.
- [String.LocalizationValue](https://developer.apple.com/documentation/swift/string/localizationvalue): A reference to a localizable string, with optional string interpolation.
- [init(localized:)](init%28localized_%29.md): Creates a localized attributed string from a localized string resource.
- [init(localized:including:)](init%28localized_including_%29-2xebo.md): Creates a localized attributed string from a localized string resource, including an attribute scope.
- [init(localized:including:)](init%28localized_including_%29-15xc5.md): Creates a localized attributed string from a localized string resource, including an attribute scope that a key path identifies.
- [LocalizedStringResource](../localizedstringresource.md): A reference to a localizable string, accessible from another process.
