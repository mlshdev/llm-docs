> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(_:tablename:bundle:comment:)](https://developer.apple.com/documentation/swiftui/text/init(_:tablename:bundle:comment:))

# init(\_:tableName:bundle:comment:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a text view that displays localized content identified by a key.

## Declaration

```swift
init(_ key: LocalizedStringKey, tableName: String? = nil, bundle: Bundle? = nil, comment: StaticString? = nil)
```

## Parameters

- `key`: The key for a string in the table identified by `tableName`.
- `tableName`: The name of the string table to search. If `nil`, use the table in the `Localizable.strings` file.
- `bundle`: The bundle containing the strings file. If `nil`, use the main bundle.
- `comment`: Contextual information about this key-value pair.

## Mentioned In

- [Preparing views for localization](../preparing-views-for-localization.md)

<a id="discussion"></a>

## Discussion

Use this initializer to look for the `key` parameter in a localization table and display the associated string value in the initialized text view. If the initializer can’t find the key in the table, or if no table exists, the text view displays the string representation of the key instead.

```swift
Text("pencil") // Localizes the key if possible, or displays "pencil" if not.
```

When you initialize a text view with a string literal, the view triggers this initializer because it assumes you want the string localized, even when you don’t explicitly specify a table, as in the above example. If you haven’t provided localization for a particular string, you still get reasonable behavior, because the initializer displays the key, which typically contains the unlocalized string.

If you initialize a text view with a string variable rather than a string literal, the view triggers the [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-9d1g4) initializer instead, because it assumes that you don’t want localization in that case. If you do want to localize the value stored in a string variable, you can choose to call the `init(_:tableName:bundle:comment:)` initializer by first creating a [LocalizedStringKey](../localizedstringkey.md) instance from the string variable:

```swift
Text(LocalizedStringKey(someString)) // Localizes the contents of `someString`.
```

If you have a string literal that you don’t want to localize, use the [init(verbatim:)](init%28verbatim_%29.md) initializer instead.

<a id="Styling-localized-strings-with-markdown"></a>

### Styling localized strings with markdown

If the localized string or the fallback key contains Markdown, the view displays the text with appropriate styling. For example, consider an app with the following entry in its Spanish localization file:

```swift
"_Please visit our [website](https://www.example.com)._" = "_Visita nuestro [sitio web](https://www.example.com)._";
```

You can create a `Text` view with the Markdown-formatted base language version of the string as the localization key, like this:

```swift
Text("_Please visit our [website](https://www.example.com)._")
```

When viewed in a Spanish locale, the view uses the Spanish text from the strings file, applying the Markdown styling.

![A text view that says Visita nuestro sitio web, with all text](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-init-localized@2x.png)

> **Important**

> `Text` doesn’t render all styling possible in Markdown. It doesn’t support line breaks, soft breaks, or any style of paragraph- or block-based formatting like lists, block quotes, code blocks, or tables. It also doesn’t support the [imageURL](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/imageurl) attribute. Parsing with SwiftUI treats any whitespace in the Markdown string as described by the [AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnlyPreservingWhitespace](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.enum/inlineonlypreservingwhitespace) parsing option.

## See Also

### Creating a text view

- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
