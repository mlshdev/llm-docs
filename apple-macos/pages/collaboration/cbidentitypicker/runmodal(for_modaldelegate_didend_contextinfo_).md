> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/collaboration/cbidentitypicker/runmodal(for:modaldelegate:didend:contextinfo:)](https://developer.apple.com/documentation/collaboration/cbidentitypicker/runmodal(for:modaldelegate:didend:contextinfo:))

# runModal(for:modalDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Runs the receiver modally as a sheet attached to a specified window.

> Use [runModal(for:completionHandler:)](runmodal%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func runModal(for window: NSWindow, modalDelegate delegate: Any?, didEnd didEndSelector: Selector?, contextInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `window`: The parent window for the sheet.
- `delegate`: The delegate for the modal session.
- `didEndSelector`: A message sent to the delegate after the user responds but before the sheet is dismissed.
- `contextInfo`: Contextual data passed to the delegate in the `didEndSelector` message.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` parameter is a selector that takes three arguments. The corresponding method should have a declaration modeled on the following example:

```objc
- (void)identityPickerDidEnd:(CBIdentityPicker *)identityPicker returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
```

where the `identityPicker` argument is the identity picker object, the `returnCode` argument  is the button the user clicked, and `contextInfo` is the same `contextInfo` argument that was passed in the original message.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Running an Identity Picker

- [runModal(for:completionHandler:)](runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.
- [runModal()](runmodal%28%29.md): Runs the receiver as an application-modal dialog.

# runModalForWindow:modalDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Collaboration  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.11)

Runs the receiver modally as a sheet attached to a specified window.

> Use [runModalForWindow:completionHandler:](runmodal%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) runModalForWindow:(NSWindow *) window modalDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `window`: The parent window for the sheet.
- `delegate`: The delegate for the modal session.
- `didEndSelector`: A message sent to the delegate after the user responds but before the sheet is dismissed.
- `contextInfo`: Contextual data passed to the delegate in the `didEndSelector` message.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` parameter is a selector that takes three arguments. The corresponding method should have a declaration modeled on the following example:

```objc
- (void)identityPickerDidEnd:(CBIdentityPicker *)identityPicker returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;
```

where the `identityPicker` argument is the identity picker object, the `returnCode` argument  is the button the user clicked, and `contextInfo` is the same `contextInfo` argument that was passed in the original message.

## See Also

### Related Documentation

- [Identity Services Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/IdentityServices_ProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004490)

### Running an Identity Picker

- [runModalForWindow:completionHandler:](runmodal%28for_completionhandler_%29.md): Runs the identity picker modally as a sheet attached to a specified window.
- [runModal](runmodal%28%29.md): Runs the receiver as an application-modal dialog.
