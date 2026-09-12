> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stylemask/pushincellmask](https://developer.apple.com/documentation/appkit/nscell/stylemask/pushincellmask)

# pushInCellMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The button cell “pushes in” if it has a border.

## Declaration

```swift
static var pushInCellMask: NSCell.StyleMask { get }
```

## See Also

### Constants

- [contentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [changeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [changeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.

# NSPushInCellMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The button cell “pushes in” if it has a border.

## Declaration

```objectivec
NSPushInCellMask
```

## See Also

### Constants

- [NSNoCellMask](../../nscellstylemask/nsnocellmask.md): The button cell doesn’t change.
- [NSContentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [NSChangeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [NSChangeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.
