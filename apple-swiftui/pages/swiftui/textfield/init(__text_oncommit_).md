> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:text:oncommit:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:text:oncommit:))

# init(\_:text:onCommit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates a text field with a text label generated from a localized title string.

> Renamed TextField.init(\_:text:onEditingChanged:). Use View.onSubmit(of:\_:) for functionality previously provided by the onCommit parameter. Use FocusState\<T\> and View.focused(\_:equals:) for functionality previously provided by the onEditingChanged parameter.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>, onCommit: @escaping () -> Void)
```

## Parameters

- `titleKey`: The key for the localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `onCommit`: An action to perform when the user performs an action (for example, when the user presses the Return key) while the text field has focus.

## See Also

### Creating a text field with a string

- [init(\_:text:onEditingChanged:onCommit:)](init%28__text_oneditingchanged_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(\_:text:onEditingChanged:)](init%28__text_oneditingchanged_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
