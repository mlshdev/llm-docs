> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/statevalue](https://developer.apple.com/documentation/appkit/nscell/statevalue)

# NSCell.StateValue (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants for specifying a cell’s state and are used mostly for buttons.

## Declaration

```swift
typealias StateValue = NSControl.StateValue
```

<a id="Discussion"></a>

## Discussion

These constants are described in [Cell States](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ControlCell/Concepts/CellStates.html#//apple_ref/doc/uid/20000069).

## See Also

### Constants

- [NSCell.CellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCell.Attribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSControl.ImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCell.StyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCell.HitResult](hitresult.md): Constants used by the [hitTest(for:in:of:)](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.

# NSCellStateValue (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Constants for specifying a cell’s state and are used mostly for buttons.

## Declaration

```objectivec
typedef NSControlStateValue NSCellStateValue;
```

<a id="Discussion"></a>

## Discussion

These constants are described in [Cell States](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ControlCell/Concepts/CellStates.html#//apple_ref/doc/uid/20000069).

## Topics

### Constants

- [NSMixedState](../nsmixedstate.md): Deprecated. The corresponding feature is in effect somewhere.
- [NSOffState](../nsoffstate.md): Deprecated. The corresponding feature is in effect nowhere.
- [NSOnState](../nsonstate.md): Deprecated. The corresponding feature is in effect everywhere.

## See Also

### Constants

- [NSCellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCellHitResult](hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.
