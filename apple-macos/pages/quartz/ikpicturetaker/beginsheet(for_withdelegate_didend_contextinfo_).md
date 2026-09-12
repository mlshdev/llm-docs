> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/beginsheet(for:withdelegate:didend:contextinfo:)](https://developer.apple.com/documentation/quartz/ikpicturetaker/beginsheet(for:withdelegate:didend:contextinfo:))

# beginSheet(for:withDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a picture taker as a sheet whose parent is the specified window.

## Declaration

```swift
func beginSheet(for aWindow: NSWindow!, withDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `aWindow`: The parent window of the picture taker sheet.
- `delegate`: The object that will invoke the selector  `didEndSelector` when the picture taker session terminates.
- `didEndSelector`: The selector to invoke when the picture taker session terminates.
- `contextInfo`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the picture taker session terminates.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` method should have the following signature:

`- (void)pictureTakerDidEnd:(IKPictureTaker *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;`

The `returnCode` value is set to `NSOKButton` if the user validates, or to `NSCancelButton` if the user cancels.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker()](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [begin(withDelegate:didEnd:contextInfo:)](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:)](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal()](runmodal%28%29.md): Opens a modal picture taker dialog.

# beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a picture taker as a sheet whose parent is the specified window.

## Declaration

```objectivec
- (void) beginPictureTakerSheetForWindow:(NSWindow *) aWindow withDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `aWindow`: The parent window of the picture taker sheet.
- `delegate`: The object that will invoke the selector  `didEndSelector` when the picture taker session terminates.
- `didEndSelector`: The selector to invoke when the picture taker session terminates.
- `contextInfo`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the picture taker session terminates.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` method should have the following signature:

`- (void)pictureTakerDidEnd:(IKPictureTaker *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;`

The `returnCode` value is set to `NSOKButton` if the user validates, or to `NSCancelButton` if the user cancels.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginPictureTakerWithDelegate:didEndSelector:contextInfo:](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal](runmodal%28%29.md): Opens a modal picture taker dialog.
