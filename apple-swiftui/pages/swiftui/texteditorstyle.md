> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/texteditorstyle](https://developer.apple.com/documentation/swiftui/texteditorstyle)

# TextEditorStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A specification for the appearance and interaction of a text editor.

## Declaration

```swift
@MainActor @preconcurrency protocol TextEditorStyle
```

<a id="overview"></a>

## Overview

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Getting built-in styles

- [automatic](texteditorstyle/automatic.md): Conforms when `Self` is `AutomaticTextEditorStyle`. The default text editor style, based on the text editor’s context.
- [plain](texteditorstyle/plain.md): Conforms when `Self` is `PlainTextEditorStyle`. A text editor style with no decoration.
- [roundedBorder](texteditorstyle/roundedborder.md): Conforms when `Self` is `RoundedBorderTextEditorStyle`. A text editor style with a system-defined rounded border.

### Creating custom styles

- [makeBody(configuration:)](texteditorstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a text editor.
- [TextEditorStyle.Configuration](texteditorstyle/configuration.md): The properties of a text editor.
- [Body](texteditorstyle/body.md): A view that represents the body of a text editor.

### Supporting types

- [AutomaticTextEditorStyle](automatictexteditorstyle.md): The default text editor style, based on the text editor’s context.
- [PlainTextEditorStyle](plaintexteditorstyle.md): A text editor style with no decoration.
- [RoundedBorderTextEditorStyle](roundedbordertexteditorstyle.md): A text editor style with a system-defined rounded border.

## Relationships

### Conforming Types

- [AutomaticTextEditorStyle](automatictexteditorstyle.md)
- [PlainTextEditorStyle](plaintexteditorstyle.md)
- [RoundedBorderTextEditorStyle](roundedbordertexteditorstyle.md)

## See Also

### Styling views that display text

- [labelStyle(\_:)](view/labelstyle%28__%29.md): Sets the style for labels within this view.
- [LabelStyle](labelstyle.md): A type that applies a custom appearance to all labels within a view.
- [LabelStyleConfiguration](labelstyleconfiguration.md): The properties of a label.
- [textFieldStyle(\_:)](view/textfieldstyle%28__%29.md): Sets the style for text fields within this view.
- [TextFieldStyle](textfieldstyle.md): A specification for the appearance and interaction of a text field.
- [textEditorStyle(\_:)](view/texteditorstyle%28__%29.md): Sets the style for text editors within this view.
- [TextEditorStyleConfiguration](texteditorstyleconfiguration.md): The properties of a text editor.
