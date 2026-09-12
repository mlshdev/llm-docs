> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textfieldlink](https://developer.apple.com/documentation/swiftui/textfieldlink)

# TextFieldLink

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 9.0+

A control that requests text input from the user when pressed.

## Declaration

```swift
nonisolated struct TextFieldLink<Label> where Label : View
```

<a id="overview"></a>

## Overview

A `TextFieldLink` should be used to request text input from the user through a button interface.

## Topics

### Creating a text field link

- [init(\_:prompt:onSubmit:)](textfieldlink/init%28__prompt_onsubmit_%29.md): Conforms when `Label` is `Text`. Creates a TextFieldLink which when pressed will request text input from the user.
- [init(prompt:label:onSubmit:)](textfieldlink/init%28prompt_label_onsubmit_%29.md): Conforms when `Label` conforms to `View`. Creates a TextFieldLink which when pressed will request text input from the user.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Linking to other content

- [Link](link.md): A control for navigating to a URL.
- [ShareLink](sharelink.md): A view that controls a sharing presentation.
- [SharePreview](sharepreview.md): A representation of a type to display in a share preview.
- [HelpLink](helplink.md): A button with a standard appearance that opens app-specific help documentation.
