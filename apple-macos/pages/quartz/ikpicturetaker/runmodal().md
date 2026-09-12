> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/runmodal()](https://developer.apple.com/documentation/quartz/ikpicturetaker/runmodal())

# runModal() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a modal picture taker dialog.

## Declaration

```swift
func runModal() -> Int
```

<a id="return-value"></a>

## Return Value

Returns `NSOKButton` if the user edits or chooses an image; `NSCancelButton` if the user cancels or does not change the default image.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker()](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginSheet(for:withDelegate:didEnd:contextInfo:)](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [begin(withDelegate:didEnd:contextInfo:)](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:)](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.

# runModal (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Opens a modal picture taker dialog.

## Declaration

```objectivec
- (NSInteger) runModal;
```

<a id="return-value"></a>

## Return Value

Returns `NSOKButton` if the user edits or chooses an image; `NSCancelButton` if the user cancels or does not change the default image.

## See Also

### Creating And Displaying The Picture Taker

- [pictureTaker](picturetaker%28%29.md): Returns a shared `IKPictureTaker` instance, creating it if necessary.
- [beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [beginPictureTakerWithDelegate:didEndSelector:contextInfo:](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
