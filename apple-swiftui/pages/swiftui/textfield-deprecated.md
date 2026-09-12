> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfield-deprecated](https://developer.apple.com/documentation/swiftui/textfield-deprecated)

# Deprecated initializers

**Framework:** SwiftUI  
**Kind:** API Collection

Review deprecated text field initializers.

<a id="Overview"></a>

## Overview

Use view modifiers to specify change and commit behaviors for a text field when replacing these initializers. Use the [onSubmit(of:\_:)](view/onsubmit%28of___%29.md) view modifier to get the behavior provided by the `onCommit` parameter. Use [focused(\_:equals:)](view/focused%28__equals_%29.md) and [FocusState](focusstate.md) to get the behavior provided by the `onEditingChanged` parameter.

## Topics

### Creating a text field with a string

- [init(\_:text:onEditingChanged:onCommit:)](textfield/init%28__text_oneditingchanged_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(\_:text:onCommit:)](textfield/init%28__text_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.
- [init(\_:text:onEditingChanged:)](textfield/init%28__text_oneditingchanged_%29.md): Deprecated. Conforms when `Label` is `Text`. Creates a text field with a text label generated from a localized title string.

### Creating a text field with a value

- [init(\_:value:formatter:onEditingChanged:onCommit:)](textfield/init%28__value_formatter_oneditingchanged_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
- [init(\_:value:formatter:onCommit:)](textfield/init%28__value_formatter_oncommit_%29.md): Deprecated. Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
- [init(\_:value:formatter:onEditingChanged:)](textfield/init%28__value_formatter_oneditingchanged_%29.md): Deprecated. Conforms when `Label` is `Text`. Create an instance which binds over an arbitrary type, `V`.
