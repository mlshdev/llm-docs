> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/begin(withdelegate:didend:contextinfo:)](https://developer.apple.com/documentation/quartz/ikpicturetaker/begin(withdelegate:didend:contextinfo:))

# begin(withDelegate:didEnd:contextInfo:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a picture taker pane.

## Declaration

```swift
func begin(withDelegate delegate: Any!, didEnd didEndSelector: Selector!, contextInfo: UnsafeMutableRawPointer!)
```

## Parameters

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
- [beginSheet(for:withDelegate:didEnd:contextInfo:)](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:)](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal()](runmodal%28%29.md): Opens a modal picture taker dialog.

# beginPictureTakerWithDelegate:didEndSelector:contextInfo: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a picture taker pane.

## Declaration

```objectivec
- (void) beginPictureTakerWithDelegate:(id) delegate didEndSelector:(SEL) didEndSelector contextInfo:(void *) contextInfo;
```

## Parameters

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
- [beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal](runmodal%28%29.md): Opens a modal picture taker dialog.
