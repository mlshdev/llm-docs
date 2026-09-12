> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stylemask/changebackgroundcellmask](https://developer.apple.com/documentation/appkit/nscell/stylemask/changebackgroundcellmask)

# changeBackgroundCellMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Same as `NSChangeGrayCellMask`, but only background pixels are changed.

## Declaration

```swift
static var changeBackgroundCellMask: NSCell.StyleMask { get }
```

## See Also

### Constants

- [pushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [contentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [changeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.

# NSChangeBackgroundCellMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Same as `NSChangeGrayCellMask`, but only background pixels are changed.

## Declaration

```objectivec
NSChangeBackgroundCellMask
```

## See Also

### Constants

- [NSNoCellMask](../../nscellstylemask/nsnocellmask.md): The button cell doesn’t change.
- [NSPushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [NSContentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [NSChangeGrayCellMask](changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
