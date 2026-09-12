> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizedstringresource/locale](https://developer.apple.com/documentation/foundation/localizedstringresource/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The locale to use to look up the localized string from the string resource.

## Declaration

```swift
var locale: Locale
```

<a id="Discussion"></a>

## Discussion

To perform localization in a different locale, change this value before passing it to a [String](https://developer.apple.com/documentation/swift/string) or [AttributedString](../attributedstring.md) initializer that takes a [LocalizedStringResource](../localizedstringresource.md).

## See Also

### Accessing resource properties

- [key](key.md): The key to use to look up a localized string.
- [defaultValue](defaultvalue.md): The resource’s default value.
- [table](table.md): The name of the table containing the key-value pairs.
- [bundle](bundle.md): The bundle containing the table’s strings file.
- [LocalizedStringResource.BundleDescription](bundledescription.md): The location of a bundle to use for looking up localized strings, such as the main bundle, or a bundle at a specific file URL.
