> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/attribute](https://developer.apple.com/documentation/appkit/nscell/attribute)

# NSCell.Attribute (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for specifying how a button behaves when pressed and how it displays its state.

## Declaration

```swift
enum Attribute
```

<a id="overview"></a>

## Overview

These constants are used by the [NSButton](../nsbutton.md) and [NSButtonCell](../nsbuttoncell.md) classes.

## Topics

### Constants

- [NSCell.Attribute.cellAllowsMixedState](attribute/cellallowsmixedstate.md): Lets the cell’s state be `NSMixedState`, as well as `NSOffState` and `NSOnState`.
- [NSCell.Attribute.changeBackgroundCell](attribute/changebackgroundcell.md): If the cell’s state is `NSMixedState` or `NSOnState`, changes the cell’s background color from gray to white.
- [NSCell.Attribute.cellChangesContents](attribute/cellchangescontents.md): If the cell’s state is `NSMixedState` or `NSOnState`, displays the cell’s alternate image.
- [NSCell.Attribute.changeGrayCell](attribute/changegraycell.md): If the cell’s state is `NSMixedState` or `NSOnState`, displays the cell’s image as darkened.
- [NSCell.Attribute.cellDisabled](attribute/celldisabled.md): Does not let the user manipulate the cell.
- [NSCell.Attribute.cellEditable](attribute/celleditable.md): Lets the user edit the cell’s contents.
- [NSCell.Attribute.cellHasImageHorizontal](attribute/cellhasimagehorizontal.md): Controls the position of the cell’s image: places the image on the right of any text in the cell.
- [NSCell.Attribute.cellHasImageOnLeftOrBottom](attribute/cellhasimageonleftorbottom.md): Controls the position of the cell’s image: places the image on the left of or below any text in the cell.
- [NSCell.Attribute.cellHasOverlappingImage](attribute/cellhasoverlappingimage.md): Controls the position of the cell’s image: places the image over any text in the cell.
- [NSCell.Attribute.cellHighlighted](attribute/cellhighlighted.md): Deprecated. Draws the cell with a highlighted appearance.
- [NSCell.Attribute.cellIsBordered](attribute/cellisbordered.md): Draws a border around the cell.
- [NSCell.Attribute.cellIsInsetButton](attribute/cellisinsetbutton.md): Insets the cell’s contents from the border.
- [NSCell.Attribute.cellLightsByBackground](attribute/celllightsbybackground.md): If the cell is pushed in, changes the cell’s background color from gray to white.
- [NSCell.Attribute.cellLightsByContents](attribute/celllightsbycontents.md): If the cell is pushed in, displays the cell’s alternate image.
- [NSCell.Attribute.cellLightsByGray](attribute/celllightsbygray.md): If the cell is pushed in, displays the cell’s image as darkened.
- [NSCell.Attribute.pushInCell](attribute/pushincell.md): Determines whether the cell’s image and text appear to be shifted down and to the right.
- [NSCell.Attribute.cellState](attribute/cellstate.md): The cell’s state.

### Initializers

- [init(rawValue:)](attribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSCell.CellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCell.StateValue](statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCell.StyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCell.HitResult](hitresult.md): Constants used by the [hitTest(for:in:of:)](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.

# NSCellAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for specifying how a button behaves when pressed and how it displays its state.

## Declaration

```objectivec
enum NSCellAttribute : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [NSButton](../nsbutton.md) and [NSButtonCell](../nsbuttoncell.md) classes.

## Topics

### Constants

- [NSCellAllowsMixedState](attribute/cellallowsmixedstate.md): Lets the cell’s state be `NSMixedState`, as well as `NSOffState` and `NSOnState`.
- [NSChangeBackgroundCell](attribute/changebackgroundcell.md): If the cell’s state is `NSMixedState` or `NSOnState`, changes the cell’s background color from gray to white.
- [NSCellChangesContents](attribute/cellchangescontents.md): If the cell’s state is `NSMixedState` or `NSOnState`, displays the cell’s alternate image.
- [NSChangeGrayCell](attribute/changegraycell.md): If the cell’s state is `NSMixedState` or `NSOnState`, displays the cell’s image as darkened.
- [NSCellDisabled](attribute/celldisabled.md): Does not let the user manipulate the cell.
- [NSCellEditable](attribute/celleditable.md): Lets the user edit the cell’s contents.
- [NSCellHasImageHorizontal](attribute/cellhasimagehorizontal.md): Controls the position of the cell’s image: places the image on the right of any text in the cell.
- [NSCellHasImageOnLeftOrBottom](attribute/cellhasimageonleftorbottom.md): Controls the position of the cell’s image: places the image on the left of or below any text in the cell.
- [NSCellHasOverlappingImage](attribute/cellhasoverlappingimage.md): Controls the position of the cell’s image: places the image over any text in the cell.
- [NSCellHighlighted](attribute/cellhighlighted.md): Deprecated. Draws the cell with a highlighted appearance.
- [NSCellIsBordered](attribute/cellisbordered.md): Draws a border around the cell.
- [NSCellIsInsetButton](attribute/cellisinsetbutton.md): Insets the cell’s contents from the border.
- [NSCellLightsByBackground](attribute/celllightsbybackground.md): If the cell is pushed in, changes the cell’s background color from gray to white.
- [NSCellLightsByContents](attribute/celllightsbycontents.md): If the cell is pushed in, displays the cell’s alternate image.
- [NSCellLightsByGray](attribute/celllightsbygray.md): If the cell is pushed in, displays the cell’s image as darkened.
- [NSPushInCell](attribute/pushincell.md): Determines whether the cell’s image and text appear to be shifted down and to the right.
- [NSCellState](attribute/cellstate.md): The cell’s state.

## See Also

### Constants

- [NSCellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStateValue](statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCellStyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCellHitResult](hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.
