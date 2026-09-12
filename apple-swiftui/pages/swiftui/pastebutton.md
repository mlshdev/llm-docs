> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pastebutton](https://developer.apple.com/documentation/swiftui/pastebutton)

# PasteButton

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

A system button that reads items from the pasteboard and delivers it to a closure.

## Declaration

```swift
nonisolated struct PasteButton
```

<a id="overview"></a>

## Overview

Use a paste button when you want to provide a button for pasting items from the system pasteboard into your app. The system provides a button appearance and label appropriate to the current environment. However, you can use view modifiers like [buttonBorderShape(\_:)](view/buttonbordershape%28__%29.md), [labelStyle(\_:)](view/labelstyle%28__%29.md), and [tint(\_:)](view/tint%28__%29.md) to customize the button in some contexts.

You declare what type of items your app will accept; use a type that conforms to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol. When the user taps or clicks the button, your closure receives the pasteboard items in the specified type.

In the following example, a paste button declares that it accepts a string. When the user taps or clicks the button, the sample’s closure receives an array of strings and sets the first as the value of `pastedText`, which updates a nearby [Text](text.md) view.

```swift
@State private var pastedText: String = ""

var body: some View {
    HStack {
        PasteButton(payloadType: String.self) { strings in
            pastedText = strings[0]
        }
        Divider()
        Text(pastedText)
        Spacer()
    }
}
```

![macOS window titled PasteButton Demo showing (from left to right) a button](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-PasteButton-pastedText@2x.png)

A paste button automatically validates and invalidates based on changes to the pasteboard on iOS, but not on macOS.

## Topics

### Creating a paste button

- [init(supportedContentTypes:payloadAction:)](pastebutton/init%28supportedcontenttypes_payloadaction_%29.md): Creates a Paste button that accepts specific types of data from the pasteboard.
- [init(payloadType:onPaste:)](pastebutton/init%28payloadtype_onpaste_%29.md): Creates an instance that accepts values of the specified type.

### Deprecated initializers

- [init(supportedTypes:payloadAction:)](pastebutton/init%28supportedtypes_payloadaction_%29.md): Deprecated. Creates a Paste button that accepts specific types of data from the pasteboard.
- [init(supportedTypes:validator:payloadAction:)](pastebutton/init%28supportedtypes_validator_payloadaction_%29.md): Deprecated. Creates a Paste button that accepts specific types of data from the pasteboard, performing a custom validation of the data before sending it to your app.
- [init(supportedContentTypes:validator:payloadAction:)](pastebutton/init%28supportedcontenttypes_validator_payloadaction_%29.md): Deprecated. Creates a Paste button that accepts specific types of data from the pasteboard, performing a custom validation of the data before sending it to your app.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Creating special-purpose buttons

- [EditButton](editbutton.md): A button that toggles the edit mode environment value.
- [RenameButton](renamebutton.md): A button that triggers a standard rename action.
