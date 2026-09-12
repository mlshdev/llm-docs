> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncopycommand(perform:)](https://developer.apple.com/documentation/swiftui/view/oncopycommand(perform:))

# onCopyCommand(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds an action to perform in response to the system’s Copy command.

## Declaration

```swift
nonisolated func onCopyCommand(perform payloadAction: (() -> [NSItemProvider])?) -> some View

```

## Parameters

- `payloadAction`: An action closure returning the [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) items that should be copied to the Clipboard when the Copy command is triggered. If `action` is `nil`, the Copy command is considered disabled.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when a system Copy command occurs.

## See Also

### Copying items using item providers

- [onCutCommand(perform:)](oncutcommand%28perform_%29.md): Adds an action to perform in response to the system’s Cut command.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29.md): Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](onpastecommand%28of_validator_perform_%29.md): Adds an action to perform in response to the system’s Paste command with items that you validate.
