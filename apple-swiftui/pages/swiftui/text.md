> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text](https://developer.apple.com/documentation/swiftui/text)

# Text

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A view that displays one or more lines of read-only text.

## Declaration

```swift
@frozen struct Text
```

## Mentioned In

- [Configuring views](configuring-views.md)
- [Building layouts with stack views](building-layouts-with-stack-views.md)
- [Declaring a custom view](declaring-a-custom-view.md)
- [Laying out a simple view](laying-out-a-simple-view.md)
- [Displaying data in lists](displaying-data-in-lists.md)
- [Performing a search operation](performing-a-search-operation.md)
- [Preparing views for localization](preparing-views-for-localization.md)
- [Adding a search interface to your app](adding-a-search-interface-to-your-app.md)
- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)
- [Populating SwiftUI menus with adaptive controls](populating-swiftui-menus-with-adaptive-controls.md)
- [Reducing view modifier maintenance](reducing-view-modifier-maintenance.md)
- [Suggesting search terms](suggesting-search-terms.md)

<a id="overview"></a>

## Overview

A text view draws a string in your app’s user interface using a [body](font/body.md) font that’s appropriate for the current platform. You can choose a different standard font, like [title](font/title.md) or [caption](font/caption.md), using the [font(\_:)](view/font%28__%29.md) view modifier.

```swift
Text("Hamlet")
    .font(.title)
```

![A text view showing the name “Hamlet” in a title](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-title@2x.png)

If you need finer control over the styling of the text, you can use the same modifier to configure a system font or choose a custom font. You can also apply view modifiers like [bold()](text/bold%28%29.md) or [italic()](text/italic%28%29.md) to further adjust the formatting.

```swift
Text("by William Shakespeare")
    .font(.system(size: 12, weight: .light, design: .serif))
    .italic()
```

![A text view showing by William Shakespeare in a 12 point, light, italic,](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-font@2x.png)

To apply styling within specific portions of the text, you can create the text view from an [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring), which in turn allows you to use Markdown to style runs of text. You can mix string attributes and SwiftUI modifiers, with the string attributes taking priority.

```swift
let attributedString = try! AttributedString(
    markdown: "_Hamlet_ by William Shakespeare")

var body: some View {
    Text(attributedString)
        .font(.system(size: 12, weight: .light, design: .serif))
}
```

![A text view showing Hamlet by William Shakespeare in a 12 point, light,](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-attributed@2x.png)

A text view always uses exactly the amount of space it needs to display its rendered contents, but you can affect the view’s layout. For example, you can use the [frame(width:height:alignment:)](view/frame%28width_height_alignment_%29.md) modifier to propose specific dimensions to the view. If the view accepts the proposal but the text doesn’t fit into the available space, the view uses a combination of wrapping, tightening, scaling, and truncation to make it fit. With a width of `100` points but no constraint on the height, a text view might wrap a long string:

```swift
Text("To be, or not to be, that is the question:")
    .frame(width: 100)
```

![A text view showing a quote from Hamlet split over three](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-split@2x.png)

Use modifiers like [lineLimit(\_:)](view/linelimit%28__%29.md), [allowsTightening(\_:)](view/allowstightening%28__%29.md), [minimumScaleFactor(\_:)](view/minimumscalefactor%28__%29.md), and [truncationMode(\_:)](view/truncationmode%28__%29.md) to configure how the view handles space constraints. For example, combining a fixed width and a line limit of `1` results in truncation for text that doesn’t fit in that space:

```swift
Text("Brevity is the soul of wit.")
    .frame(width: 100)
    .lineLimit(1)
```

![A text view showing a truncated quote from Hamlet starting Brevity is t](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-Text-truncated@2x.png)

<a id="Localizing-strings"></a>

### Localizing strings

If you initialize a text view with a string literal, the view uses the [init(\_:tableName:bundle:comment:)](text/init%28__tablename_bundle_comment_%29.md) initializer, which interprets the string as a localization key and searches for the key in the table you specify, or in the default table if you don’t specify one.

```swift
Text("pencil") // Searches the default table in the main bundle.
```

For an app localized in both English and Spanish, the above view displays “pencil” and “lápiz” for English and Spanish users, respectively. If the view can’t perform localization, it displays the key instead. For example, if the same app lacks Danish localization, the view displays “pencil” for users in that locale. Similarly, an app that lacks any localization information displays “pencil” in any locale.

To explicitly bypass localization for a string literal, use the [init(verbatim:)](text/init%28verbatim_%29.md) initializer.

```swift
Text(verbatim: "pencil") // Displays the string "pencil" in any locale.
```

If you initialize a text view with a variable value, the view uses the [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-9d1g4) initializer, which doesn’t localize the string. However, you can request localization by creating a [LocalizedStringKey](localizedstringkey.md) instance first, which triggers the [init(\_:tableName:bundle:comment:)](text/init%28__tablename_bundle_comment_%29.md) initializer instead:

```swift
// Don't localize a string variable...
Text(writingImplement)

// ...unless you explicitly convert it to a localized string key.
Text(LocalizedStringKey(writingImplement))
```

When localizing a string variable, you can use the default table by omitting the optional initialization parameters — as in the above example — just like you might for a string literal.

When composing a complex string, where there is a need to assemble multiple pieces of text, use string interpolation:

```swift
let name: String = //…
Text("Hello, \(name)")
```

This would look up the `"Hello, %@"` localization key in the localized string file and replace the format specifier `%@` with the value of `name` before rendering the text on screen.

Using string interpolation ensures that the text in your app can be localized correctly in all locales, especially in right-to-left languages.

If you desire to style only parts of interpolated text while ensuring that the content can still be localized correctly, interpolate `Text` or [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring):

```swift
let name = Text(person.name).bold()
Text("Hello, \(name)")
```

The example above uses [appendInterpolation(\_:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation%28_:%29-4qyfo) and will look up the `"Hello, %@"` in the localized string file and interpolate a bold text rendering the value of  `name`.

Using [appendInterpolation(\_:)](https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation%28_:%29-5m52e) you can interpolate [Image](image.md) in text.

## Topics

### Creating a text view

- [init(\_:tableName:bundle:comment:)](text/init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](text/init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](text/init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](text/init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](text/init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](text/init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](text/init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.

### Choosing a font

- [font(\_:)](text/font%28__%29.md): Sets the default font for text in the view.
- [fontWeight(\_:)](text/fontweight%28__%29.md): Sets the font weight of the text.
- [fontDesign(\_:)](text/fontdesign%28__%29.md): Sets the font design of the text.
- [fontWidth(\_:)](text/fontwidth%28__%29.md): Sets the font width of the text.

### Styling the view’s text

- [foregroundStyle(\_:)](text/foregroundstyle%28__%29.md): Sets the style of the text displayed by this view.
- [bold()](text/bold%28%29.md): Applies a bold or emphasized treatment to the fonts of the text.
- [bold(\_:)](text/bold%28__%29.md): Applies a bold font weight to the text.
- [italic()](text/italic%28%29.md): Applies italics to the text.
- [italic(\_:)](text/italic%28__%29.md): Applies italics to the text.
- [strikethrough(\_:color:)](text/strikethrough%28__color_%29.md): Applies a strikethrough to the text.
- [strikethrough(\_:pattern:color:)](text/strikethrough%28__pattern_color_%29.md): Applies a strikethrough to the text.
- [underline(\_:color:)](text/underline%28__color_%29.md): Applies an underline to the text.
- [underline(\_:pattern:color:)](text/underline%28__pattern_color_%29.md): Applies an underline to the text.
- [monospaced(\_:)](text/monospaced%28__%29.md): Modifies the font of the text to use the fixed-width variant of the current font, if possible.
- [monospacedDigit()](text/monospaceddigit%28%29.md): Modifies the text view’s font to use fixed-width digits, while leaving other characters proportionally spaced.
- [kerning(\_:)](text/kerning%28__%29.md): Sets the spacing, or kerning, between characters.
- [tracking(\_:)](text/tracking%28__%29.md): Sets the tracking for the text.
- [baselineOffset(\_:)](text/baselineoffset%28__%29.md): Sets the vertical offset for the text relative to its baseline.
- [Text.Case](text/case.md): A scheme for transforming the capitalization of characters within text.
- [Text.DateStyle](text/datestyle.md): A predefined style used to display a `Date`.
- [Text.LineStyle](text/linestyle.md): Description of the style used to draw the line for `StrikethroughStyleAttribute` and `UnderlineStyleAttribute`.

### Fitting text into available space

- [textScale(\_:isEnabled:)](text/textscale%28__isenabled_%29.md): Applies a text scale to the text.
- [Text.Scale](text/scale.md): Defines text scales
- [Text.TruncationMode](text/truncationmode.md): The type of truncation to apply to a line of text when it’s too long to fit in the available space.

### Localizing text

- [typesettingLanguage(\_:isEnabled:)](text/typesettinglanguage%28__isenabled_%29.md): Specifies the language for typesetting.

### Configuring voiceover

- [speechAdjustedPitch(\_:)](text/speechadjustedpitch%28__%29.md): Raises or lowers the pitch of spoken text.
- [speechAlwaysIncludesPunctuation(\_:)](text/speechalwaysincludespunctuation%28__%29.md): Sets whether VoiceOver should always speak all punctuation in the text view.
- [speechAnnouncementsQueued(\_:)](text/speechannouncementsqueued%28__%29.md): Controls whether to queue pending announcements behind existing speech rather than interrupting speech in progress.
- [speechSpellsOutCharacters(\_:)](text/speechspellsoutcharacters%28__%29.md): Sets whether VoiceOver should speak the contents of the text view character by character.

### Providing accessibility information

- [accessibilityHeading(\_:)](text/accessibilityheading%28__%29.md): Sets the accessibility level of this heading.
- [accessibilityLabel(\_:)](text/accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityTextContentType(\_:)](text/accessibilitytextcontenttype%28__%29.md): Sets an accessibility text content type.

### Combining text views

- [+(\_:\_:)](text/+%28____%29.md): Deprecated. Concatenates the text in two text views in a new text view.

### Deprecated symbols

- [foregroundColor(\_:)](text/foregroundcolor%28__%29.md): Deprecated. Sets the color of the text displayed by this view.

### Structures

- [Text.AlignmentStrategy](text/alignmentstrategy.md): The way SwiftUI infers the appropriate text alignment if no value is explicitly provided.
- [Text.Layout](text/layout.md): A value describing the layout and custom attributes of a tree of `Text` views.
- [Text.LayoutKey](text/layoutkey.md): A preference key that provides the `Text.Layout` values for all text views in the queried subtree.
- [Text.WritingDirectionStrategy](text/writingdirectionstrategy.md): The way SwiftUI infers the appropriate writing direction if no value is explicitly provided.

### Instance Methods

- [customAttribute(\_:)](text/customattribute%28__%29.md): Adds a custom attribute to the text view.
- [textVariant(\_:)](text/textvariant%28__%29.md): Controls the way text size variants are chosen.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](view.md)

## See Also

### Displaying text

- [Label](label.md): A standard label for user interface items, consisting of an icon with a title.
- [labelStyle(\_:)](view/labelstyle%28__%29.md): Sets the style for labels within this view.
