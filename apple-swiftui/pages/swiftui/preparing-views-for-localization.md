> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preparing-views-for-localization](https://developer.apple.com/documentation/swiftui/preparing-views-for-localization)

# Preparing views for localization

**Framework:** SwiftUI  
**Kind:** Article

Specify hints and add strings to localize your SwiftUI views.

<a id="Overview"></a>

## Overview

Localize SwiftUI views so users experience your app in their own native language, region, and culture. Xcode parses SwiftUI views for strings to localize when exporting a localization catalog. You can add hints so that Xcode generates correct, hinted strings to localize for your app.

For information about string catalogs, see [Localizing and varying text with a string catalog](https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog).

<a id="Add-comments-to-text-views"></a>

### Add comments to text views

To ease the translation process, provide hints to translators that share how and where your app displays the strings of a [Text](text.md) view. To add a hint, use the optional `comment` parameter to the text view initializer [init(\_:tableName:bundle:comment:)](text/init%28__tablename_bundle_comment_%29.md). When you localize your app with Xcode, it includes the comment string along with the string. For example, the following text view includes a comment:

```swift
Text("Explore",
     comment: "The title of the tab bar item that navigates to the Explore screen.")
```

Xcode creates the following entry in your string catalog file for this view:

![A screenshot that shows a string catalog in Xcode for a simple app. The catalog has a single key called Explore with an English value for the key that is also the word Explore. The key also has a comment that says The title of the tab bar item that navigates to the Explore screen.](https://developer.apple.com/images/com.apple.SwiftUI/Preparing-views-for-localization-1@2x.png)

<a id="Provide-additional-information-with-text-views"></a>

### Provide additional information with text views

You can localize many SwiftUI views that have a string label by providing a string that SwiftUI interprets as a [LocalizedStringKey](localizedstringkey.md). The system uses the key to retrieve a localized value from your string catalog at runtime, or uses the string directly if it can’t find the key in the catalog. For example, SwiftUI uses the string input to the following [Label](label.md) initializer as a localized string key:

```swift
Label("Message", image: "msgSymbol")
```

If you additionally want to provide a comment for localization, you can use an explicit [Text](text.md) view instead:

```swift
Label {
    Text("Message",
         comment: "A label that displays 'Message' and a corresponding image.")
} icon: {
    Image("msgSymbol")
}
```

Many SwiftUI controls have content builder initializers that enable you to follow this pattern. For more information on how to make your app’s text translatable, see [Preparing your app’s text for translation](https://developer.apple.com/documentation/xcode/preparing-your-apps-text-for-translation).

## See Also

### Localizing text

- [LocalizedStringKey](localizedstringkey.md): The key used to look up an entry in a strings file or strings dictionary file.
- [locale](environmentvalues/locale.md): The current locale that views should use.
- [typesettingLanguage(\_:isEnabled:)](view/typesettinglanguage%28__isenabled_%29.md): Specifies the language for typesetting.
- [TypesettingLanguage](typesettinglanguage.md): Defines how typesetting language is determined for text.
