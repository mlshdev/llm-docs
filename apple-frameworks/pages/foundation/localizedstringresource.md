> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizedstringresource](https://developer.apple.com/documentation/foundation/localizedstringresource)

# LocalizedStringResource

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reference to a localizable string, accessible from another process.

## Declaration

```swift
struct LocalizedStringResource
```

<a id="overview"></a>

## Overview

Use [LocalizedStringResource](localizedstringresource.md) to provide localizable strings with lookups you defer to a later time.

When you create a localized string or a localized attributed string with an initializer that takes [String.LocalizationValue](https://developer.apple.com/documentation/swift/string/localizationvalue), those initializers lookup the localized string immediately. If you want to perform the lookup at a later time, use this [LocalizedStringResource](localizedstringresource.md) type to refer to the localizable strings. Then, when you need to perform localization, create a [String](https://developer.apple.com/documentation/swift/string) or [AttributedString](attributedstring.md) from an initializer that takes a [LocalizedStringResource](localizedstringresource.md) parameter, such as:

- [String](https://developer.apple.com/documentation/swift/string): [init(localized:)](https://developer.apple.com/documentation/swift/string/init%28localized:%29) or [init(localized:options:)](https://developer.apple.com/documentation/swift/string/init%28localized:options:%29).
- [AttributedString](attributedstring.md): [init(localized:)](attributedstring/init%28localized_%29.md), [init(localized:including:)](attributedstring/init%28localized_including_%29-2xebo.md), or [init(localized:including:)](attributedstring/init%28localized_including_%29-15xc5.md).

This approach allows you to provide localizable strings to an entirely separate process, which may use a different locale. For example, consider an app with a data model type called `UserAction` that uses [LocalizedStringResource](localizedstringresource.md) rather than strings for its `title` and `description` properties.

```swift
public protocol UserAction {
    static var title: LocalizedStringResource { get }
    static var description: LocalizedStringResource { get }
}
```

This app (or one of its embedded frameworks) then uses these [LocalizedStringResource](localizedstringresource.md) members to defer looking up localized strings. Typically, this happens when calling out to another process over XPC.

```swift
public func perform(action: UserAction) {
    ...
    // Send text to another process via XPC or similar.
    performActionOutOfProcess(title: action.title, description: action.description)
}
```

Then, when the other process receives the call, it can alter the [locale](localizedstringresource/locale.md) in the [LocalizedStringResource](localizedstringresource.md), prior to resolving the localized strings.

```swift
func performActionOutOfProcess(title: LocalizedStringResource,
                               description: LocalizedStringResource) {
    // Set resource locales to match the current locale
    // of the separate process.
    var fixedTitle = title
    fixedTitle.locale = .current
    var fixedDescription = description
    fixedDescription.locale = .current
    
    // Look up localized strings.
    let titleString = String(localized: fixedTitle)
    let descriptionString = String(localized: fixedDescription)
        
    // Use a correctly localized title/description.
}
```

The [App Intents](../appintents.md) framework uses [LocalizedStringResource](localizedstringresource.md) to perform a late resolution of localized strings. This allows the Siri UI to potentially use different localization preferences than the app providing the intent.

## Topics

### Creating a localized string resource from literal values

- [init(stringLiteral:)](localizedstringresource/init%28stringliteral_%29.md): Creates a localized string resource from the specified string literal.
- [init(stringInterpolation:)](localizedstringresource/init%28stringinterpolation_%29.md): Creates a localized string resource from the given string interpolation.

### Accessing resource properties

- [key](localizedstringresource/key.md): The key to use to look up a localized string.
- [defaultValue](localizedstringresource/defaultvalue.md): The resource’s default value.
- [table](localizedstringresource/table.md): The name of the table containing the key-value pairs.
- [bundle](localizedstringresource/bundle.md): The bundle containing the table’s strings file.
- [LocalizedStringResource.BundleDescription](localizedstringresource/bundledescription.md): The location of a bundle to use for looking up localized strings, such as the main bundle, or a bundle at a specific file URL.
- [locale](localizedstringresource/locale.md): The locale to use to look up the localized string from the string resource.

### Describing a resource

- [localizedStringResource](localizedstringresource/localizedstringresource.md): A resource that helps provide a description of the instance.

### Initializers

- [init(\_:defaultValue:table:locale:bundle:comment:)](localizedstringresource/init%28__defaultvalue_table_locale_bundle_comment_%29-1apqa.md): Creates a localized string resource from a static string and its bundle properties.
- [init(\_:defaultValue:table:locale:bundle:comment:)](localizedstringresource/init%28__defaultvalue_table_locale_bundle_comment_%29-8jyvr.md)
- [init(\_:table:locale:bundle:comment:)](localizedstringresource/init%28__table_locale_bundle_comment_%29-69k32.md): Creates a localized string resource from a localization key and its bundle properties.
- [init(\_:table:locale:bundle:comment:)](localizedstringresource/init%28__table_locale_bundle_comment_%29-8o153.md)

## Relationships

### Conforms To

- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Localization

- [Locale](locale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString(\_:tableName:bundle:value:comment:)](nslocalizedstring%28__tablename_bundle_value_comment_%29.md): Returns a localized string from a table that Xcode generates for you when exporting localizations.
- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md): A type that provides an out-of-process localizable description.
- [URLResource](urlresource.md): A resource located at a particular file URL within a bundle.
