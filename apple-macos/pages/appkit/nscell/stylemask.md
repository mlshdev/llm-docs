> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/stylemask](https://developer.apple.com/documentation/appkit/nscell/stylemask)

# NSCell.StyleMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants for specifying what happens when a button is pressed or is displaying its alternate state.

## Declaration

```swift
struct StyleMask
```

<a id="overview"></a>

## Overview

These contents are used by the [highlightsBy](../nsbuttoncell/highlightsby.md) and [showsStateBy](../nsbuttoncell/showsstateby.md) methods of [NSButtonCell](../nsbuttoncell.md).

## Topics

### Constants

- [pushInCellMask](stylemask/pushincellmask.md): The button cell “pushes in” if it has a border.
- [contentsCellMask](stylemask/contentscellmask.md): The button cell displays its alternate icon and/or title.
- [changeGrayCellMask](stylemask/changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [changeBackgroundCellMask](stylemask/changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.

### Initializers

- [init(rawValue:)](stylemask/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSCell.CellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCell.Attribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCell.StateValue](statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCell.HitResult](hitresult.md): Constants used by the [hitTest(for:in:of:)](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.

# NSCellStyleMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for specifying what happens when a button is pressed or is displaying its alternate state.

## Declaration

```objectivec
enum NSCellStyleMask : NSUInteger;
```

<a id="overview"></a>

## Overview

These contents are used by the [highlightsBy](../nsbuttoncell/highlightsby.md) and [showsStateBy](../nsbuttoncell/showsstateby.md) methods of [NSButtonCell](../nsbuttoncell.md).

## Topics

### Constants

- [NSNoCellMask](../nscellstylemask/nsnocellmask.md): The button cell doesn’t change.
- [NSPushInCellMask](stylemask/pushincellmask.md): The button cell “pushes in” if it has a border.
- [NSContentsCellMask](stylemask/contentscellmask.md): The button cell displays its alternate icon and/or title.
- [NSChangeGrayCellMask](stylemask/changegraycellmask.md): The button cell swaps the “control color” (the [controlColor](../nscolor/controlcolor.md) method of `NSColor`) and white pixels on its background and icon.
- [NSChangeBackgroundCellMask](stylemask/changebackgroundcellmask.md): Same as `NSChangeGrayCellMask`, but only background pixels are changed.

## See Also

### Constants

- [NSCellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStateValue](statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCellHitResult](hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.
