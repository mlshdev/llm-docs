> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textfield/init(_:text:oneditingchanged:oncommit:)

# init(\_:text:onEditingChanged:onCommit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Creates a text field with a text label generated from a localized title string.

> Use [init(\_:text:prompt:)](https://developer.apple.com/documentation/swiftui/textfield/init%28_:text:prompt:%29-70zi2) instead. Add the [onSubmit(of:\_:)](../view/onsubmit%28of___%29.md) view modifier for the `onCommit` behavior. Use [FocusState](../focusstate.md) and [focused(\_:equals:)](../view/focused%28__equals_%29.md) for the `onEditingChanged` behavior.

## Declaration

```swift
nonisolated init(_ titleKey: LocalizedStringKey, text: Binding<String>, onEditingChanged: @escaping (Bool) -> Void, onCommit: @escaping () -> Void)
```

## Parameters

- `titleKey`: The key for the localized title of the text field, describing its purpose.
- `text`: The text to display and edit.
- `onEditingChanged`: The action to perform when the user begins editing `text` and after the user finishes editing `text`. The closure receives a Boolean value that indicates the editing status: `true` when the user begins editing, `false` when they finish.
- `onCommit`: An action to perform when the user performs an action (for example, when the user presses the Return key) while the text field has focus.

## See Also

### Creating a text field with a string

- [init(\_:text:onCommit:)](init%28__text_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(\_:text:onEditingChanged:)](init%28__text_oneditingchanged_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
