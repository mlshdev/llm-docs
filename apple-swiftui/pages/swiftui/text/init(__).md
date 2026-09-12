> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(_:)](https://developer.apple.com/documentation/swiftui/text/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a text view that displays styled attributed content.

## Declaration

```swift
init(_ attributedContent: AttributedString)
```

## Parameters

- `attributedContent`: An attributed string to style and display, in accordance with its attributes.

<a id="Format-text-by-combining-attributes-and-view-modifiers"></a>

### Format text by combining attributes and view modifiers

Use this initializer to style text according to attributes found in the specified [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring). Attributes in the attributed string take precedence over styles added by view modifiers. For example, the attributed text in the following example appears in blue, despite the use of the [foregroundColor(\_:)](../view/foregroundcolor%28__%29.md) modifier to use red throughout the enclosing [VStack](../vstack.md):

```swift
var content: AttributedString {
    var attributedString = AttributedString("Blue text")
    attributedString.foregroundColor = .blue
    return attributedString
}

var body: some View {
    VStack {
        Text(content)
        Text("Red text")
    }
    .foregroundColor(.red)
}
```

![A vertical stack of two text views, the top labeled Blue Text with a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-init-attributed@2x.png)

SwiftUI combines text attributes with SwiftUI modifiers whenever possible. For example, the following listing creates text that is both bold and red:

```swift
var content: AttributedString {
    var content = AttributedString("Some text")
    content.inlinePresentationIntent = .stronglyEmphasized
    return content
}

var body: some View {
    Text(content).foregroundColor(Color.red)
}
```

<a id="Supported-Foundation-attributes"></a>

### Supported Foundation attributes

A SwiftUI [Text](../text.md) view renders most of the styles defined by the Foundation attribute [inlinePresentationIntent](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/inlinepresentationintent), like the [stronglyEmphasized](https://developer.apple.com/documentation/foundation/inlinepresentationintent/stronglyemphasized) value, which SwiftUI presents as bold text.

> **Important**

> [Text](../text.md) uses only a subset of the attributes defined in [AttributeScopes.FoundationAttributes](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes). `Text` renders all [InlinePresentationIntent](https://developer.apple.com/documentation/foundation/inlinepresentationintent) attributes except for [lineBreak](https://developer.apple.com/documentation/foundation/inlinepresentationintent/linebreak) and [softBreak](https://developer.apple.com/documentation/foundation/inlinepresentationintent/softbreak). It also respects [writingDirection](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/writingdirection) and renders the [link](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/link) attribute as a clickable link. `Text` ignores any other Foundation-defined attributes in an attributed string.

<a id="SwiftUI-attributes"></a>

### SwiftUI attributes

SwiftUI also defines additional attributes in the attribute scope [AttributeScopes.SwiftUIAttributes](https://developer.apple.com/documentation/foundation/attributescopes/swiftuiattributes) which you can access from an attributed string’s [swiftUI](https://developer.apple.com/documentation/foundation/attributescopes/swiftui) property. SwiftUI attributes take precedence over equivalent attributes from other frameworks, such as [AttributeScopes.UIKitAttributes](https://developer.apple.com/documentation/foundation/attributescopes/uikitattributes) and [AttributeScopes.AppKitAttributes](https://developer.apple.com/documentation/foundation/attributescopes/appkitattributes).

<a id="Markdown-support"></a>

### Markdown support

You can create an `AttributedString` with Markdown syntax, which allows you to style distinct runs within a `Text` view:

```swift
let content = try! AttributedString(
    markdown: "**Thank You!** Please visit our [website](http://example.com).")

var body: some View {
    Text(content)
}
```

The `**` syntax around “Thank You!” applies an [inlinePresentationIntent](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/inlinepresentationintent) attribute with the value [stronglyEmphasized](https://developer.apple.com/documentation/foundation/inlinepresentationintent/stronglyemphasized). SwiftUI renders this as bold text, as described earlier. The link syntax around “website” creates a [link](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/link) attribute, which `Text` styles to indicate it’s a link; by default, clicking or tapping the link opens the linked URL in the user’s default browser. Alternatively, you can perform custom link handling by putting an [OpenURLAction](../openurlaction.md) in the text view’s environment.

![A text view that says Thank you. Please visit our website. The text](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-init-markdown@2x.png)

You can also use Markdown syntax in localized string keys, which means you can write the above example without needing to explicitly create an `AttributedString`:

```swift
var body: some View {
    Text("**Thank You!** Please visit our [website](https://example.com).")
}
```

In your app’s strings files, use Markdown syntax to apply styling to the app’s localized strings. You also use this approach when you want to perform automatic grammar agreement on localized strings, with the `^[text](inflect:true)` syntax.

For details about Markdown syntax support in SwiftUI, see [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md).

<a id="Applying-a-custom-text-formatting-definition"></a>

### Applying a custom text formatting definition

Use the [attributedTextFormattingDefinition(\_:)](https://developer.apple.com/documentation/swiftui/view/attributedtextformattingdefinition%28_:%29-81jn6) modifier to apply a custom [AttributedTextFormattingDefinition](../attributedtextformattingdefinition.md) to text created using this initializer. This will result in the text only applying attributes in the definition’s attribute scope and constraining attributes according to the definition’s value constraints prior to display.

Custom attributes listed in the definition’s [Scope](../attributedtextformattingdefinition/scope.md), where the [Value](https://developer.apple.com/documentation/foundation/attributedstringkey/value) conforms to the [TextAttribute](../textattribute.md) protocol, can be read when observing the text’s layout using `Text/Layout/Run/subscript(key:)->T?`, just as text attributes applied using the [customAttribute(\_:)](customattribute%28__%29.md) modifier.

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
