> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagescaling](https://developer.apple.com/documentation/appkit/nsimagescaling)

# NSImageScaling (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify a cell’s image scaling behavior.

## Declaration

```swift
enum NSImageScaling
```

## Topics

### Constants

- [NSImageScaling.scaleProportionallyDown](nsimagescaling/scaleproportionallydown.md): If it is too large for the destination, scale the image down while preserving the aspect ratio.
- [NSImageScaling.scaleAxesIndependently](nsimagescaling/scaleaxesindependently.md): Scale each dimension to exactly fit destination.
- [NSImageScaling.scaleNone](nsimagescaling/scalenone.md): Do not scale the image.
- [NSImageScaling.scaleProportionallyUpOrDown](nsimagescaling/scaleproportionallyupordown.md): Scale the image to its maximum possible dimensions while both staying within the destination area and preserving its aspect ratio.

### Type Properties

- [NSScaleNone](nsimagescaling/nsscalenone.md): Deprecated.
- [NSScaleProportionally](nsimagescaling/nsscaleproportionally.md): Deprecated.
- [NSScaleToFit](nsimagescaling/nsscaletofit.md): Deprecated.

### Initializers

- [init(rawValue:)](nsimagescaling/init%28rawvalue_%29.md)

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

- [NSCell.CellType](nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCell.Attribute](nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSControl.ImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSCell.StateValue](nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCell.StyleMask](nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControl.ControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCell.HitResult](nscell/hitresult.md): Constants used by the [hitTest(for:in:of:)](nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.

# NSImageScaling (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify a cell’s image scaling behavior.

## Declaration

```objectivec
enum NSImageScaling : NSUInteger;
```

## Topics

### Constants

- [NSImageScaleProportionallyDown](nsimagescaling/scaleproportionallydown.md): If it is too large for the destination, scale the image down while preserving the aspect ratio.
- [NSImageScaleAxesIndependently](nsimagescaling/scaleaxesindependently.md): Scale each dimension to exactly fit destination.
- [NSImageScaleNone](nsimagescaling/scalenone.md): Do not scale the image.
- [NSImageScaleProportionallyUpOrDown](nsimagescaling/scaleproportionallyupordown.md): Scale the image to its maximum possible dimensions while both staying within the destination area and preserving its aspect ratio.

### Type Properties

- [NSScaleNone](nsimagescaling/nsscalenone.md): Deprecated.
- [NSScaleProportionally](nsimagescaling/nsscaleproportionally.md): Deprecated.
- [NSScaleToFit](nsimagescaling/nsscaletofit.md): Deprecated.

## See Also

### Constants

- [NSCellType](nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](nscontrol/imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSCellStateValue](nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCellStyleMask](nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSControlSize](nscontrol/controlsize-swift.enum.md): A constant for specifying a cell’s size.
- [NSCellHitResult](nscell/hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](data-entry-types.md): These constants specify how a cell formats numeric data.
