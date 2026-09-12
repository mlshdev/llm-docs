> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentitypicker/runmodal(for:completionhandler:)](https://developer.apple.com/documentation/collaboration/cbidentitypicker/runmodal(for:completionhandler:))

# runModal(for:completionHandler:) (Swift)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Runs the identity picker modally as a sheet attached to a specified window.

## Declaration

```swift
func runModal(for window: NSWindow, completionHandler: (@Sendable (NSApplication.ModalResponse) -> Void)? = nil)
```

```swift
func runModal(for window: NSWindow) async -> NSApplication.ModalResponse
```

## Parameters

- `window`: The parent window for the sheet.
- `completionHandler`: The handler to run after the return value is known, but before the sheet is dismissed.

## See Also

### Running an Identity Picker

- [runModal(for:modalDelegate:didEnd:contextInfo:)](runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModal()](runmodal%28%29.md): Runs the receiver as an application-modal dialog.

# runModalForWindow:completionHandler: (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Runs the identity picker modally as a sheet attached to a specified window.

## Declaration

```objectivec
- (void) runModalForWindow:(NSWindow *) window completionHandler:(void (^)(NSModalResponse returnCode)) completionHandler;
```

## Parameters

- `window`: The parent window for the sheet.
- `completionHandler`: The handler to run after the return value is known, but before the sheet is dismissed.

## See Also

### Running an Identity Picker

- [runModalForWindow:modalDelegate:didEndSelector:contextInfo:](runmodal%28for_modaldelegate_didend_contextinfo_%29.md): Deprecated. Runs the receiver modally as a sheet attached to a specified window.
- [runModal](runmodal%28%29.md): Runs the receiver as an application-modal dialog.
