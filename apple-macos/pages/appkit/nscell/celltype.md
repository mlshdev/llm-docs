> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/celltype](https://developer.apple.com/documentation/appkit/nscell/celltype)

# NSCell.CellType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for specifying how a cell represents its data (as text or as an image).

## Declaration

```swift
enum CellType
```

## Topics

### Constants

- [NSCell.CellType.nullCellType](celltype/nullcelltype.md): Cell displays nothing.
- [NSCell.CellType.textCellType](celltype/textcelltype.md): Cell displays text.
- [NSCell.CellType.imageCellType](celltype/imagecelltype.md): Cell displays images.

### Initializers

- [init(rawValue:)](celltype/init%28rawvalue_%29.md)

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

- [NSCell.Attribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
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

# NSCellType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants for specifying how a cell represents its data (as text or as an image).

## Declaration

```objectivec
enum NSCellType : NSUInteger;
```

## Topics

### Constants

- [NSNullCellType](celltype/nullcelltype.md): Cell displays nothing.
- [NSTextCellType](celltype/textcelltype.md): Cell displays text.
- [NSImageCellType](celltype/imagecelltype.md): Cell displays images.

## See Also

### Constants

- [NSCellAttribute](attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
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
