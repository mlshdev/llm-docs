> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textfield/init(_:text:oneditingchanged:)

# init(\_:text:onEditingChanged:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Creates a text field with a text label generated from a localized title string.

> Renamed TextField.init(\_:text:onEditingChanged:). Use View.onSubmit(of:\_:) for functionality previously provided by the onCommit parameter. Use FocusState\<T\> and View.focused(\_:equals:) for functionality previously provided by the onEditingChanged parameter.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>, onEditingChanged: @escaping (Bool) -> Void)
```

## Parameters

- `titleKey`: The key for the localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `onEditingChanged`: The action to perform when the user begins editing `text` and after the user finishes editing `text`. The closure receives a Boolean value that indicates the editing status: `true` when the user begins editing, `false` when they finish.

## See Also

### Creating a text field with a string

- [init(\_:text:onEditingChanged:onCommit:)](init%28__text_oneditingchanged_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(\_:text:onCommit:)](init%28__text_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
