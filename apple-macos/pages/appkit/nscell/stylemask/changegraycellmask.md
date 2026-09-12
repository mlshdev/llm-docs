> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stylemask/changegraycellmask](https://developer.apple.com/documentation/appkit/nscell/stylemask/changegraycellmask)

# changeGrayCellMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.

## Declaration

```swift
static var changeGrayCellMask: NSCell.StyleMask { get }
```

## See Also

### Constants

- [pushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [contentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [changeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.

# NSChangeGrayCellMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The button cell swaps the “control color” (the [controlColor](../../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.

## Declaration

```objectivec
NSChangeGrayCellMask
```

## See Also

### Constants

- [NSNoCellMask](../../nscellstylemask/nsnocellmask.md): The button cell doesn’t change.
- [NSPushInCellMask](pushincellmask.md): The button cell “pushes in” if it has a border.
- [NSContentsCellMask](contentscellmask.md): The button cell displays its alternate icon and/or title.
- [NSChangeBackgroundCellMask](changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.
