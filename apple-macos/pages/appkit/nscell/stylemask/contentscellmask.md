> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stylemask/contentscellmask](https://developer.apple.com/documentation/appkit/nscell/stylemask/contentscellmask)

# contentsCellMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The button cell displays its alternate icon and/or title.

## Declaration

```swift
static var contentsCellMask: NSCell.StyleMask { get }
```

## See Also

### Constants

- [pushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [changeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [changeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.

# NSContentsCellMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The button cell displays its alternate icon and/or title.

## Declaration

```objectivec
NSContentsCellMask
```

## See Also

### Constants

- [NSNoCellMask](../../nscellstylemask/nsnocellmask.md): The button cell doesn’t change.
- [NSPushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [NSChangeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [NSChangeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.
