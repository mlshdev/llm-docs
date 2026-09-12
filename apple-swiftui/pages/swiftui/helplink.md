> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/helplink](https://developer.apple.com/documentation/swiftui/helplink)

# HelpLink

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 14.0+

A button with a standard appearance that opens app-specific help documentation.

## Declaration

```swift
@MainActor @preconcurrency struct HelpLink
```

<a id="overview"></a>

## Overview

A help link opens documentation relevant to the context where they are used. Typically this is by opening to an anchor in an Apple Help book, but can also perform an arbitrary action such as opening a URL or opening a window.

```swift
HelpLink(anchor: "accountSetupHelp")

HelpLink {
    openURL(onlineHelpURL)
}
```

Help links have a standard appearance, as well as conventional placement within a view. When used within an alert or confirmation dialog’s actions, the help link will automatically be placed in the top trailing corner. Or when used in a sheet toolbar, the help link is automatically placed in the lower leading corner.

```swift
struct SheetContentView: View {
    var body: some View {
        Form {
             ...
        }
        .toolbar {
            ToolbarItem(.confirmationAction) {
                Button("Save") { ... }
            }
            ToolbarItem(.cancellationAction) {
                Button("Cancel") { ... }
            }
            ToolbarItem {
                HelpLink(anchor: "sheetHelp")
            }
         }
    }
}
```

## Topics

### Creating a help link

- [init(action:)](helplink/init%28action_%29.md): Constructs a new help link with the specified action.
- [init(destination:)](helplink/init%28destination_%29.md): Constructs a new help link that opens the specified destination URL.
- [init(anchor:)](helplink/init%28anchor_%29.md): Constructs a new help link with the specified anchor in the main app bundle’s book.
- [init(anchor:book:)](helplink/init%28anchor_book_%29.md): Constructs a new help link with the specified anchor and book.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Linking to other content

- [Link](link.md): A control for navigating to a URL.
- [ShareLink](sharelink.md): A view that controls a sharing presentation.
- [SharePreview](sharepreview.md): A representation of a type to display in a share preview.
- [TextFieldLink](textfieldlink.md): A control that requests text input from the user when pressed.
