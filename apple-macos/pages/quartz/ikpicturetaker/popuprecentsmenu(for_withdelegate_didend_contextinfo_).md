> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/popuprecentsmenu(for:withdelegate:didend:contextinfo:)](https://developer.apple.com/documentation/quartz/ikpicturetaker/popuprecentsmenu(for:withdelegate:didend:contextinfo:))

# popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the Open Recent popup menu associated with the  picture taker.

## Declaration

```swift
func popUpRecentsMenu(for aView: NSView!, withDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

- `aView`: The object that will invoke the selector  `didEndSelector` when the picture taker session terminates.
- `delegate`: The selector to invoke when the picture taker session terminates.
- `didEndSelector`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the picture taker session terminates.
- `contextInfo`: An optional context object available to delegates when called.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` method should have the following signature:

`- (void)pictureTakerDidEnd:(IKPictureTaker *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;`

The `returnCode` value is set to `NSOKButton` if the user validates, or to `NSCancelButton` if the user cancels.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker()](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginSheet(for:withDelegate:didEnd:contextInfo:)](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [begin(withDelegate:didEnd:contextInfo:)](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [runModal()](runmodal%28%29.md): Opens a modal picture taker dialog.

# popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays the Open Recent popup menu associated with the  picture taker.

## Declaration

```objectivec
- (void) popUpRecentsMenuForView:(NSView *) aView withDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

- `aView`: The object that will invoke the selector  `didEndSelector` when the picture taker session terminates.
- `delegate`: The selector to invoke when the picture taker session terminates.
- `didEndSelector`: Any data that must be passed as an argument to the delegate through `didEndSelector` after the picture taker session terminates.
- `contextInfo`: An optional context object available to delegates when called.

<a id="Discussion"></a>

## Discussion

The `didEndSelector` method should have the following signature:

`- (void)pictureTakerDidEnd:(IKPictureTaker *)sheet returnCode:(NSInteger)returnCode contextInfo:(void *)contextInfo;`

The `returnCode` value is set to `NSOKButton` if the user validates, or to `NSCancelButton` if the user cancels.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [beginPictureTakerWithDelegate:didEndSelector:contextInfo:](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [runModal](runmodal%28%29.md): Opens a modal picture taker dialog.
