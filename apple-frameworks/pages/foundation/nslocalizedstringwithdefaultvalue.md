> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocalizedstringwithdefaultvalue](https://developer.apple.com/documentation/foundation/nslocalizedstringwithdefaultvalue)

# NSLocalizedStringWithDefaultValue

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized version of a string identified by a key in the table that you specify, which Xcode autogenerates when exporting localizations.

## Declaration

```objectivec
#define NSLocalizedStringWithDefaultValue(key, tbl, bundle, val, comment)
```

## Parameters

- `key`: The key for a string in the specified table.

  > **Note**

  >  Xcode can’t export localizations for strings whose `key` is a string variable, `nil`, or an empty string.
- `tbl`: The name of the table containing the key-value pairs. Also, the suffix for the strings file (a file with the `.strings` extension) to store the localized string. The default table in `Localizable.strings` is used when `tableName` is `nil` or an empty string.
- `bundle`: The bundle containing the table’s strings file. The main bundle is used when `bundle` is `nil`.
- `val`: The localized string for the development locale. For other locales, return this value if `key` is `nil` or if a localized string for `key` isn’t found in the table.
- `comment`: The comment to place above the key-value pair in the strings file. This parameter provides the translator with some context about the localized string’s presentation to the user.

<a id="return-value"></a>

## Return Value

The result of sending [localizedStringForKey:value:table:](bundle/localizedstring%28forkey_value_table_%29.md) to `bundle`, passing the specified `key`, `value`, and `tableName`.

<a id="Discussion"></a>

## Discussion

Use this macro to automatically generate a strings file named `[tableName].strings` located in `bundle` from your code when exporting localizations from Xcode or the `genstrings` utility. The initial value for `key` in the strings file is `value`. You can specify Unicode characters in `key` using `\\Uxxxx`—see the `-u` option for the `genstrings` utility.

For information about inserting plural nouns and units into localized strings, see [Localizing strings that contain plurals](https://developer.apple.com/documentation/xcode/localizing-strings-that-contain-plurals).

As of OS X 10.11 and iOS 9, [NSBundle](bundle.md) is thread-safe. As such, you can safely call [NSLocalizedStringWithDefaultValue](nslocalizedstringwithdefaultvalue.md) from any execution context.

> **Important**

>  The values for `key`, `tableName`, `value` and `comment` must be string literal values. Xcode can read these values from source code to automatically create localization tables when exporting localizations, but it doesn’t resolve string variables. If you want to use string variables, manually create a strings file and use [localizedStringForKey:value:table:](bundle/localizedstring%28forkey_value_table_%29.md) instead. For more information on strings files, see [String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6).

> **Tip**

>  Break up long string values into consecutive string literals.

```objc
NSLocalizedStringFromTableInBundle(
    @"loading-screen.venus-flytrap-fact", 
    @"Localized",
    [NSBundle mainBundle],
    @"Did you know that venus flytraps have flowers"
        @" atop very long stems?\nThe long stem keeps"
        @" insects a safe distance away from their"
        @" digestive leaves below.",
    @"An interesting fact about venus flytraps shown"
        @" on the loading screen.");
```

<a id="Choose-Meaningful-Keys"></a>

### Choose Meaningful Keys

Words can often have multiple different meanings depending on the context in which they’re used. For example, the word “Book” can be a noun referring to a printed literary work or a verb for the action of making a reservation. Words with different meanings that share the same spelling are heteronyms.

Different languages often have different heteronyms. “Book” in English is a heteronym, but it isn’t in French, where the noun translates to “Livre,” whereas the verb translates to “Réserver.” For this reason, it’s important to translate each phrase appropriately for its semantics and not its phrasing. Assign unique keys to each string, and add a comment describing the context where it’s visible to the user.

```objc
NSLocalizedStringWithDefaultValue(
    @"book-tag-title", nil, nil, @"Book",
    @"noun: A label attached to literary items in the library.");

NSLocalizedStringWithDefaultValue(
    @"book-button-title", nil, nil, @"Book",
    @"verb: Title of the button that makes a reservation.");
```

For the previous example, the table for the French locale in `fr.lproj/Localized.strings` includes the following lines:

```other
/* noun: A label attached to literary items in the library. */
"book-tag-title" = "Livre";

/* verb: Title of the button that makes a reservation. */
"book-button-title" = "Réserver";
```

## See Also

### Related Documentation

- [Exporting localizations](https://developer.apple.com/documentation/xcode/exporting-localizations): Provide the localizable files from your project to localizers.
- [Importing localizations](https://developer.apple.com/documentation/xcode/importing-localizations): Import the files that you translate or adapt for a language and region into your project.

### Localization

- [NSLocale](nslocale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString](nslocalizedstring.md): Returns a localized version of a string from the default table, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTable](nslocalizedstringfromtable.md): Returns a localized version of a string from the table that you specify, which Xcode autogenerates when exporting localizations.
- [NSLocalizedStringFromTableInBundle](nslocalizedstringfromtableinbundle.md): Returns a localized version of a string from the table and bundle that you specify, which Xcode autogenerates when exporting localizations.
