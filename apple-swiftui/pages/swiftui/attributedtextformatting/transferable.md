> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/attributedtextformatting/transferable](https://developer.apple.com/documentation/swiftui/attributedtextformatting/transferable)

# AttributedTextFormatting.Transferable

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A transferable representation of an attributed string interpreted in a SwiftUI environment.

## Declaration

```swift
struct Transferable
```

<a id="overview"></a>

## Overview

Use this type e.g. with drag and drop APIs or to create a [fileExporter(isPresented:item:contentTypes:defaultFilename:onCompletion:onCancellation:)](../view/fileexporter%28ispresented_item_contenttypes_defaultfilename_oncompletion_oncancellation_%29.md).

```swift
struct RichTextEditorView: View {
    @State private var text: AttributedString = ""
    @Environment(\.self) private var environment
    @State var fileExporterIsPresented: Bool = false

    var body: some View {
        TextEditor(text: $text)
            .toolbar {
                Button("Save") {
                    fileExporterIsPresented = true
                }
            }
            .fileExporter(
                isPresented: $fileExporterIsPresented,
                item: AttributedTextFormatting.Transferable(text: text, in: environment)
            ) { result in
                handleResult(result)
            }
            .dropDestination(
                for: AttributedTextFormatting.Transferable.self
            ) { transferables, _ in
                text.replaceSelection(
                    &selection,
                    with: transferables.map {
                        AttributedString(transferable: $0, in: environment)
                    }.joined(separator: AttributedString("\n")))
                return true
            }
    }
}
```

To extract text the text after importing, use attributed string’s `Foundation/AttributedString/init(transferable:in:)`.

Supported content types include:

- [rtfd](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/rtfd)
- [rtf](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/rtf)

## Topics

### Initializers

- [init(text:in:)](transferable/init%28text_in_%29.md): Create a transferable representation of an attributed string as interpreted in a SwiftUI environment.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
