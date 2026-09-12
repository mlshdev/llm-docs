> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell](https://developer.apple.com/documentation/appkit/nsslidercell)

# NSSliderCell (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The appearance and behavior of an [NSSlider](nsslider.md) object.

## Declaration

```swift
class NSSliderCell
```

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="overview"></a>

## Overview

You can customize an [NSSliderCell](nsslidercell.md) to a certain degree, using its properties. If this doesn’t give you sufficient flexibility, you can create a subclass. In that subclass, you can override any of the following methods: [knobRect(flipped:)](nsslidercell/knobrect%28flipped_%29.md), [drawBar(inside:flipped:)](nsslidercell/drawbar%28inside_flipped_%29.md), [drawKnob(\_:)](nsslidercell/drawknob%28__%29.md), and [prefersTrackingUntilMouseUp](nsslidercell/preferstrackinguntilmouseup.md).

## Topics

### Managing Cell Behavior

- [altIncrementValue](nsslidercell/altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [prefersTrackingUntilMouseUp](nsslidercell/preferstrackinguntilmouseup.md): Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.
- [trackRect](nsslidercell/trackrect.md): The rectangle within which the cell tracks the pointer while the mouse button is down.

### Managing the Slider Type

- [sliderType](nsslidercell/slidertype.md): The slider type, either linear or circular.

### Displaying the Cell

- [barRect(flipped:)](nsslidercell/barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks()](nsslidercell/drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRect(flipped:)](nsslidercell/knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBar(inside:flipped:)](nsslidercell/drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob()](nsslidercell/drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob(\_:)](nsslidercell/drawknob%28__%29.md) to actually draw the knob.
- [drawKnob(\_:)](nsslidercell/drawknob%28__%29.md): Draws the slider knob in the given rectangle.

### Managing Cell Appearance

- [knobThickness](nsslidercell/knobthickness.md): The thickness of the slider knob, in pixels.
- [isVertical](nsslidercell/isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.

### Managing Value Limits

- [maxValue](nsslidercell/maxvalue.md): The maximum value the slider can send to its target.
- [minValue](nsslidercell/minvalue.md): The minimum value the slider can send to its target.

### Managing Tick Marks

- [allowsTickMarkValuesOnly](nsslidercell/allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](nsslidercell/closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](nsslidercell/indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](nsslidercell/numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMark(at:)](nsslidercell/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](nsslidercell/tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValue(at:)](nsslidercell/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

### Constants

- [NSSlider.TickMarkPosition](nsslider/tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [NSSlider.SliderType](nsslider/slidertype-swift.enum.md): The types of sliders, used by [sliderType](nsslidercell/slidertype.md).

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSliderCell (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

The appearance and behavior of an [NSSlider](nsslider.md) object.

## Declaration

```objectivec
@interface NSSliderCell : NSActionCell
```

## Mentioned In

- [Updating views automatically with observation tracking in AppKit](updating-views-automatically-with-observation-tracking-in-appkit.md)

<a id="overview"></a>

## Overview

You can customize an [NSSliderCell](nsslidercell.md) to a certain degree, using its properties. If this doesn’t give you sufficient flexibility, you can create a subclass. In that subclass, you can override any of the following methods: [knobRectFlipped:](nsslidercell/knobrect%28flipped_%29.md), [drawBarInside:flipped:](nsslidercell/drawbar%28inside_flipped_%29.md), [drawKnob:](nsslidercell/drawknob%28__%29.md), and [prefersTrackingUntilMouseUp](nsslidercell/preferstrackinguntilmouseup.md).

## Topics

### Managing Cell Behavior

- [altIncrementValue](nsslidercell/altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the knob.
- [prefersTrackingUntilMouseUp](nsslidercell/preferstrackinguntilmouseup.md): Returns a Boolean value indicating whether the `NSSliderCell` continues to track the pointer until the next mouse up.
- [trackRect](nsslidercell/trackrect.md): The rectangle within which the cell tracks the pointer while the mouse button is down.

### Managing the Slider Type

- [sliderType](nsslidercell/slidertype.md): The slider type, either linear or circular.

### Displaying the Cell

- [barRectFlipped:](nsslidercell/barrect%28flipped_%29.md): Returns the rectangle in which the bar is drawn.
- [drawTickMarks](nsslidercell/drawtickmarks%28%29.md): Draws the slider’s tick marks.
- [knobRectFlipped:](nsslidercell/knobrect%28flipped_%29.md): Returns the rectangle in which the slider knob is drawn.
- [drawBarInside:flipped:](nsslidercell/drawbar%28inside_flipped_%29.md): Draws the slider’s bar—but not its bezel or knob—inside the specified rectangle.
- [drawKnob](nsslidercell/drawknob%28%29.md): Calculates the rectangle in which the knob should be drawn, then calls [drawKnob:](nsslidercell/drawknob%28__%29.md) to actually draw the knob.
- [drawKnob:](nsslidercell/drawknob%28__%29.md): Draws the slider knob in the given rectangle.

### Managing Cell Appearance

- [knobThickness](nsslidercell/knobthickness.md): The thickness of the slider knob, in pixels.
- [vertical](nsslidercell/isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.
- [title](nsslidercell/title.md): Deprecated. Returns the slider’s title.
- [setTitle:](nsslidercell/settitle_.md): Deprecated. Sets the title in the bar behind the slider’s knob.
- [titleCell](nsslidercell/titlecell.md): Deprecated. Returns `nil`.
- [setTitleCell:](nsslidercell/settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [titleFont](nsslidercell/titlefont.md): Deprecated. Returns `nil`.
- [titleColor](nsslidercell/titlecolor.md): Deprecated. Returns `nil`.
- [setTitleFont:](nsslidercell/settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
- [setTitleColor:](nsslidercell/settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.

### Managing Value Limits

- [maxValue](nsslidercell/maxvalue.md): The maximum value the slider can send to its target.
- [minValue](nsslidercell/minvalue.md): The minimum value the slider can send to its target.

### Managing Tick Marks

- [allowsTickMarkValuesOnly](nsslidercell/allowstickmarkvaluesonly.md): A Boolean value indicating whether the receiver fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](nsslidercell/closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](nsslidercell/indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the specified point.
- [numberOfTickMarks](nsslidercell/numberoftickmarks.md): The number of tick marks associated with the slider, including the tick marks assigned to the minimum and maximum values.
- [rectOfTickMarkAtIndex:](nsslidercell/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the specified index.
- [tickMarkPosition](nsslidercell/tickmarkposition.md): The position of the tick marks relative to the receiver.
- [tickMarkValueAtIndex:](nsslidercell/tickmarkvalue%28at_%29.md): Returns the receiver’s value represented by the tick mark at the specified index.

### Constants

- [NSTickMarkPosition](nsslider/tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [NSSliderType](nsslider/slidertype-swift.enum.md): The types of sliders, used by [sliderType](nsslidercell/slidertype.md).

### Instance Methods

- [image](nsslidercell/image.md): Deprecated.
- [setImage:](nsslidercell/setimage_.md): Deprecated.
- [setKnobThickness:](nsslidercell/setknobthickness_.md): Deprecated. The thickness of the slider knob, in pixels.

## Relationships

### Inherits From

- [NSActionCell](nsactioncell.md)
