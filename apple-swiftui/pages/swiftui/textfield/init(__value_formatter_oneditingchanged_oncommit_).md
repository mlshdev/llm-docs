> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield/init(_:value:formatter:oneditingchanged:oncommit:)](https://developer.apple.com/documentation/swiftui/textfield/init(_:value:formatter:oneditingchanged:oncommit:))

# init(\_:value:formatter:onEditingChanged:onCommit:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ · watchOS 6.0+ (deprecated in 27.0)

Create an instance which binds over an arbitrary type, `V`.

> Renamed TextField.init(\_:value:formatter:onEditingChanged:). Use View.onSubmit(of:\_:) for functionality previously provided by the onCommit parameter. Use FocusState\<T\> and View.focused(\_:equals:) for functionality previously provided by the onEditingChanged parameter.

## Declaration

```swift
nonisolated init<S, V>(_ title: S, value: Binding<V>, formatter: Formatter, onEditingChanged: @escaping (Bool) -> Void, onCommit: @escaping () -> Void) where S : StringProtocol
```

## Parameters

- `title`: The title of the text field, describing its purpose.
- `value`: The underlying value to be edited.
- `formatter`: A formatter to use when converting between the string the user edits and the underlying value of type `V`. In the event that `formatter` is unable to perform the conversion, `binding.value` isn’t modified.
- `onEditingChanged`: The action to perform when the user begins editing `text` and after the user finishes editing `text`. The closure receives a Boolean value that indicates the editing status: `true` when the user begins editing, `false` when they finish.
- `onCommit`: An action to perform when the user performs an action (for example, when the user presses the Return key) while the text field has focus.

## See Also

### Creating a text field with a value

- [init(\_:value:formatter:onCommit:)](init%28__value_formatter_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
- [init(\_:value:formatter:onEditingChanged:)](init%28__value_formatter_oneditingchanged_%29.md): Deprecated. Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
