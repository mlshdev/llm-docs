> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/controlsize-swift.enum](https://developer.apple.com/documentation/appkit/nscontrol/controlsize-swift.enum)

# NSControl.ControlSize (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A constant for specifying a cell’s size.

## Declaration

```swift
enum ControlSize
```

<a id="overview"></a>

## Overview

These constants are used by the [controlSize](../nscell/controlsize.md) property.

## Topics

### Sizing Controls

- [NSControl.ControlSize.mini](controlsize-swift.enum/mini.md): The smallest control size.
- [NSControl.ControlSize.small](controlsize-swift.enum/small.md): A size smaller than the default control size.
- [NSControl.ControlSize.regular](controlsize-swift.enum/regular.md): The default control size.
- [NSControl.ControlSize.large](controlsize-swift.enum/large.md): A size larger than the default control size.

### Enumeration Cases

- [NSControl.ControlSize.extraLarge](controlsize-swift.enum/extralarge.md)

### Initializers

- [init(\_:)](controlsize-swift.enum/init%28__%29.md): Creates a control size from its ControlSize equivalent.
- [init(rawValue:)](controlsize-swift.enum/init%28rawvalue_%29.md)

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

- [NSCell.CellType](../nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCell.Attribute](../nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSControl.ImagePosition](imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCell.StateValue](../nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCell.StyleMask](../nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSCell.HitResult](../nscell/hitresult.md): Constants used by the [hitTest(for:in:of:)](../nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSView.BackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.

# NSControlSize (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A constant for specifying a cell’s size.

## Declaration

```objectivec
enum NSControlSize : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [controlSize](../nscell/controlsize.md) property.

## Topics

### Sizing Controls

- [NSControlSizeMini](controlsize-swift.enum/mini.md): The smallest control size.
- [NSControlSizeSmall](controlsize-swift.enum/small.md): A size smaller than the default control size.
- [NSControlSizeRegular](controlsize-swift.enum/regular.md): The default control size.
- [NSControlSizeLarge](controlsize-swift.enum/large.md): A size larger than the default control size.
- [NSRegularControlSize](../nsregularcontrolsize.md): Deprecated. The default control size.
- [NSSmallControlSize](../nssmallcontrolsize.md): Deprecated. A size that is smaller than the default control size.
- [NSMiniControlSize](../nsminicontrolsize.md): Deprecated. The control has a smaller size than `NSSmallControlSize`.

### Enumeration Cases

- [NSControlSizeExtraLarge](controlsize-swift.enum/extralarge.md)

## See Also

### Constants

- [NSCellType](../nscell/celltype.md): Constants for specifying how a cell represents its data (as text or as an image).
- [NSCellAttribute](../nscell/attribute.md): Constants for specifying how a button behaves when pressed and how it displays its state.
- [NSCellImagePosition](imageposition.md): A constant for specifying the position of a button’s image relative to its title.
- [NSImageScaling](../nsimagescaling.md): Constants that specify a cell’s image scaling behavior.
- [NSCellStateValue](../nscell/statevalue.md): Deprecated. Constants for specifying a cell’s state and are used mostly for buttons.
- [NSCellStyleMask](../nscell/stylemask.md): Constants for specifying what happens when a button is pressed or is displaying its alternate state.
- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
- [NSCellHitResult](../nscell/hitresult.md): Constants used by the [hitTestForEvent:inRect:ofView:](../nscell/hittest%28for_in_of_%29.md) method to determine the effect of an event.
- [NSBackgroundStyle](../nsview/backgroundstyle.md): Background styles to apply to a view’s cell.
- [Deprecated Scaling Constants](../deprecated-scaling-constants.md): These are deprecated scaling constants.
- [Data Entry Types](../data-entry-types.md): These constants specify how a cell formats numeric data.
