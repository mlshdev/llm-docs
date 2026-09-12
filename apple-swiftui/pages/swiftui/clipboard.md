> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/clipboard](https://developer.apple.com/documentation/swiftui/clipboard)

# Clipboard

**Framework:** SwiftUI  
**Kind:** API Collection

Enable people to move or duplicate items by issuing Copy and Paste commands.

<a id="Overview"></a>

## Overview

When people issue standard Copy and Cut commands, they expect to move items to the system’s Clipboard, from which they can paste the items into another place in the same app or into another app. Your app can participate in this activity if you add view modifiers that indicate how to respond to the standard commands.

![](https://developer.apple.com/images/com.apple.SwiftUI/clipboard-hero@2x.png)

In your copy and paste modifiers, provide or accept types that conform to the [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) protocol, or that inherit from the [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) class. When possible, prefer using transferable items.

## Topics

### Copying transferable items

- [copyable(\_:)](view/copyable%28__%29.md): Specifies a list of items to copy in response to the system’s Copy command.
- [cuttable(for:action:)](view/cuttable%28for_action_%29.md): Specifies an action that moves items to the Clipboard in response to the system’s Cut command.
- [pasteDestination(for:action:validator:)](view/pastedestination%28for_action_validator_%29.md): Specifies an action that adds validated items to a view in response to the system’s Paste command.

### Copying items using item providers

- [onCopyCommand(perform:)](view/oncopycommand%28perform_%29.md): Adds an action to perform in response to the system’s Copy command.
- [onCutCommand(perform:)](view/oncutcommand%28perform_%29.md): Adds an action to perform in response to the system’s Cut command.
- [onPasteCommand(of:perform:)](view/onpastecommand%28of_perform_%29.md): Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](view/onpastecommand%28of_validator_perform_%29.md): Adds an action to perform in response to the system’s Paste command with items that you validate.

## See Also

### Event handling

- [Gestures](gestures.md): Define interactions from taps, clicks, and swipes to fine-grained gestures.
- [Input events](input-events.md): Respond to input from a hardware device, like a keyboard or a Touch Bar.
- [Drag and drop](drag-and-drop.md): Enable people to move or duplicate items by dragging them from one location to another.
- [Focus](focus.md): Identify and control which visible object responds to user interaction.
- [System events](system-events.md): React to system events, like opening a URL.
