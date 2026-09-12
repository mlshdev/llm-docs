> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/hitresult](https://developer.apple.com/documentation/appkit/nscell/hitresult)

# NSCell.HitResult (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.5+

Constants used by the [hitTest(for:in:of:)](hittest%28for_in_of_%29.md) method to determine the effect of an event.

## Declaration

```swift
struct HitResult
```

## Topics

### Constants

- [contentArea](hitresult/contentarea.md): A content area in the cell.
- [editableTextArea](hitresult/editabletextarea.md): An editable text area of the cell.
- [trackableArea](hitresult/trackablearea.md): A trackable area in the cell.

### Initializers

- [init(rawValue:)](hitresult/init%28rawvalue_%29.md)

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
- [NSCell.StyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.

# NSCellHitResult (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants used by the [hitTestForEvent:inRect:ofView:](hittest%28for_in_of_%29.md) method to determine the effect of an event.

## Declaration

```objectivec
enum NSCellHitResult : NSUInteger;
```

## Topics

### Constants

- [NSCellHitContentArea](hitresult/contentarea.md): A content area in the cell.
- [NSCellHitEditableTextArea](hitresult/editabletextarea.md): An editable text area of the cell.
- [NSCellHitTrackableArea](hitresult/trackablearea.md): A trackable area in the cell.
- [NSCellHitNone](../nscellhitresult/nscellhitnone.md): An empty area, or did not hit in the cell.

## See Also

### Constants

- [NSCellType](celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](../nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStateValue](statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCellStyleMask](stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](../nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.
