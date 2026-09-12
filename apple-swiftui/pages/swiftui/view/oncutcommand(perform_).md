> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/oncutcommand(perform:)](https://developer.apple.com/documentation/swiftui/view/oncutcommand(perform:))

# onCutCommand(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Adds an action to perform in response to the system’s Cut command.

## Declaration

```swift
nonisolated func onCutCommand(perform payloadAction: (() -> [NSItemProvider])?) -> some View

```

## Parameters

- `payloadAction`: An action closure that should delete the selected data and return [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) items corresponding to that data, which should be written to the Clipboard. If `action` is `nil`, the Cut command is considered disabled.

<a id="return-value"></a>

## Return Value

A view that triggers `action` when a system Cut command occurs.

## See Also

### Copying items using item providers

- [onCopyCommand(perform:)](oncopycommand%28perform_%29.md): Adds an action to perform in response to the system’s Copy command.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29.md): Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](onpastecommand%28of_validator_perform_%29.md): Adds an action to perform in response to the system’s Paste command with items that you validate.
