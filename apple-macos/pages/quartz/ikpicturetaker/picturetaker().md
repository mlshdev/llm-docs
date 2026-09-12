> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/picturetaker()](https://developer.apple.com/documentation/quartz/ikpicturetaker/picturetaker())

# pictureTaker() (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns a shared `IKPictureTaker` instance, creating it if necessary.

## Declaration

```swift
class func pictureTaker() -> IKPictureTaker!
```

<a id="return-value"></a>

## Return Value

An `IKPictureTaker` object.

## See Also

### Creating And Displaying The Picture Taker

- [beginSheet(for:withDelegate:didEnd:contextInfo:)](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [begin(withDelegate:didEnd:contextInfo:)](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenu(for:withDelegate:didEnd:contextInfo:)](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal()](runmodal%28%29.md): Opens a modal picture taker dialog.

# pictureTaker (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns a shared `IKPictureTaker` instance, creating it if necessary.

## Declaration

```objectivec
+ (IKPictureTaker *) pictureTaker;
```

<a id="return-value"></a>

## Return Value

An `IKPictureTaker` object.

## See Also

### Creating And Displaying The Picture Taker

- [beginPictureTakerSheetForWindow:withDelegate:didEndSelector:contextInfo:](beginsheet%28for_withdelegate_didend_contextinfo_%29.md): Opens a picture taker as a sheet whose parent is the specified window.
- [beginPictureTakerWithDelegate:didEndSelector:contextInfo:](begin%28withdelegate_didend_contextinfo_%29.md): Opens a picture taker pane.
- [popUpRecentsMenuForView:withDelegate:didEndSelector:contextInfo:](popuprecentsmenu%28for_withdelegate_didend_contextinfo_%29.md): Displays the Open Recent popup menu associated with the picture taker.
- [runModal](runmodal%28%29.md): Opens a modal picture taker dialog.
