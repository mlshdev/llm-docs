> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onpastecommand(of:validator:perform:)](https://developer.apple.com/documentation/swiftui/view/onpastecommand(of:validator:perform:))

# onPasteCommand(of:validator:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Adds an action to perform in response to the system’s Paste command with items that you validate.

## Declaration

```swift
nonisolated func onPasteCommand<Payload>(of supportedContentTypes: [UTType], validator: @escaping ([NSItemProvider]) -> Payload?, perform payloadAction: @escaping (Payload) -> Void) -> some View

```

## Parameters

- `supportedContentTypes`: The uniform type identifiers that describe the types of content this view can accept through a paste action. If the Clipboard doesn’t contain any of the supported types, the Paste command doesn’t trigger.
- `validator`: A handler that validates the command. This handler receives items from the Clipboard with the types you specify in the `supportedContentTypes`. Use this handler to decide whether the items are valid and preprocess them for the `action` closure. If you return `nil` instead, the Paste command doesn’t trigger.
- `payloadAction`: The action to perform when the Paste command triggers.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when the system Paste command is invoked, validating the Paste command with `validator`.

<a id="discussion"></a>

## Discussion

Pass an array of uniform type identifiers to the `supportedContentTypes` parameter. Place the higher priority types closer to the beginning of the array. The Clipboard items that the `validator` closure receives have the most preferred type out of all the types the source supports.

For example, if your app can handle plain text and rich text, but you prefer rich text, place the rich text type first in the array. If rich text is available when the paste action occurs, the `validator` closure passes that rich text along.

## See Also

### Copying items using item providers

- [onCopyCommand(perform:)](oncopycommand%28perform_%29.md): Adds an action to perform in response to the system’s Copy command.
- [onCutCommand(perform:)](oncutcommand%28perform_%29.md): Adds an action to perform in response to the system’s Cut command.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29.md): Adds an action to perform in response to the system’s Paste command.
