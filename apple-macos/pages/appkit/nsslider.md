> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider](https://developer.apple.com/documentation/appkit/nsslider)

# NSSlider (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of a bar representing a continuous range of numerical values and a knob representing the currently selected value.

## Declaration

```swift
class NSSlider
```

<a id="overview"></a>

## Overview

A slider is a UI element that displays a range of values in the app. Sliders can be vertical or horizontal bars or circular dials. An indicator, or knob, notes the current setting. The user can move the knob in the slider’s bar—or rotate the knob in a circular slider—to change the setting.

The `NSSlider` class uses the [NSSliderCell](nsslidercell.md) class to implement its user interface.

## Topics

### Creating sliders

- [init(target:action:)](nsslider/init%28target_action_%29.md): Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.
- [init(value:minValue:maxValue:target:action:)](nsslider/init%28value_minvalue_maxvalue_target_action_%29.md): Creates a continuous horizontal slider that represents values over the specified range.

### Managing the slider’s appearance

- [sliderType](nsslider/slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSlider.SliderType](nsslider/slidertype-swift.enum.md): The types of sliders, used by [sliderType](nsslidercell/slidertype.md).
- [altIncrementValue](nsslider/altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](nsslider/knobthickness.md): The knob’s thickness, in pixels.
- [isVertical](nsslider/isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](nsslider/trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](nsslider/tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](nstintprominence.md) for a list of possible values.
- [NSTintProminence](nstintprominence.md): Controls how strongly the tint color applies in a view.

### Asking about the value limits

- [maxValue](nsslider/maxvalue.md): The maximum value the slider can send to its target.
- [minValue](nsslider/minvalue.md): The minimum value the slider can send to its target.

### Handling mouse-down events

- [acceptsFirstMouse(for:)](nsslider/acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether a mouse-down event both activates the window and starts dragging the slider’s knob.

### Managing tick marks

- [allowsTickMarkValuesOnly](nsslider/allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValue(toValue:)](nsslider/closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMark(at:)](nsslider/indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](nsslider/numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMark(at:)](nsslider/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](nsslider/tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSSlider.TickMarkPosition](nsslider/tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValue(at:)](nsslider/tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

### Instance Properties

- [neutralValue](nsslider/neutralvalue.md): The value this slider will be filled from. This slider will be filled from its `neutralValue` to its current value. If `neutralValue` has not been explicitly set before, access to `neutralValue` will return `minValue`.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAccessibilitySlider](nsaccessibilityslider.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSlider (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of a bar representing a continuous range of numerical values and a knob representing the currently selected value.

## Declaration

```objectivec
@interface NSSlider : NSControl
```

<a id="overview"></a>

## Overview

A slider is a UI element that displays a range of values in the app. Sliders can be vertical or horizontal bars or circular dials. An indicator, or knob, notes the current setting. The user can move the knob in the slider’s bar—or rotate the knob in a circular slider—to change the setting.

The `NSSlider` class uses the [NSSliderCell](nsslidercell.md) class to implement its user interface.

## Topics

### Creating sliders

- [sliderWithTarget:action:](nsslider/init%28target_action_%29.md): Creates a continuous horizontal slider whose values range from `0.0` to `1.0`.
- [sliderWithValue:minValue:maxValue:target:action:](nsslider/init%28value_minvalue_maxvalue_target_action_%29.md): Creates a continuous horizontal slider that represents values over the specified range.

### Managing the slider’s appearance

- [sliderType](nsslider/slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSliderType](nsslider/slidertype-swift.enum.md): The types of sliders, used by [sliderType](nsslidercell/slidertype.md).
- [altIncrementValue](nsslider/altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](nsslider/knobthickness.md): The knob’s thickness, in pixels.
- [setKnobThickness:](nsslider/setknobthickness_.md): Deprecated.
- [vertical](nsslider/isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](nsslider/trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](nsslider/tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](nstintprominence.md) for a list of possible values.
- [NSTintProminence](nstintprominence.md): Controls how strongly the tint color applies in a view.

### Asking about the value limits

- [maxValue](nsslider/maxvalue.md): The maximum value the slider can send to its target.
- [minValue](nsslider/minvalue.md): The minimum value the slider can send to its target.

### Handling mouse-down events

- [acceptsFirstMouse:](nsslider/acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether a mouse-down event both activates the window and starts dragging the slider’s knob.

### Managing tick marks

- [allowsTickMarkValuesOnly](nsslider/allowstickmarkvaluesonly.md): A Boolean value that indicates whether the slider fixes its values to those values represented by its tick marks.
- [closestTickMarkValueToValue:](nsslider/closesttickmarkvalue%28tovalue_%29.md): Returns the value of the tick mark closest to the specified value.
- [indexOfTickMarkAtPoint:](nsslider/indexoftickmark%28at_%29.md): Returns the index of the tick mark closest to the location of the slider represented by the given point.
- [numberOfTickMarks](nsslider/numberoftickmarks.md): The number of tick marks associated with the slider.
- [rectOfTickMarkAtIndex:](nsslider/rectoftickmark%28at_%29.md): Returns the bounding rectangle of the tick mark at the given index.
- [tickMarkPosition](nsslider/tickmarkposition-swift.property.md): Determines where the slider’s tick marks are displayed.
- [NSTickMarkPosition](nsslider/tickmarkposition-swift.enum.md): The position where a linear slider’s tick marks appear (above, below, leading, or trailing).
- [tickMarkValueAtIndex:](nsslider/tickmarkvalue%28at_%29.md): Returns the slider’s value represented by the tick mark at the specified index.

### Managing the slider’s image

- [setImage:](nsslider/setimage_.md): Deprecated. Sets the image the slider displays in the bar behind its knob.
- [image](nsslider/image.md): Deprecated. Returns `nil`.

### Managing the slider’s title

- [title](nsslider/title.md): Deprecated. Returns the slider’s title.
- [titleCell](nsslider/titlecell.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleColor](nsslider/titlecolor.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleFont](nsslider/titlefont.md): Deprecated. This method has been deprecated. Returns `nil`.
- [setTitle:](nsslider/settitle_.md): Deprecated. Sets the title the slider displays in the bar behind its knob.
- [setTitleCell:](nsslider/settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [setTitleColor:](nsslider/settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
- [setTitleFont:](nsslider/settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.

### Instance Properties

- [neutralValue](nsslider/neutralvalue.md): The value this slider will be filled from. This slider will be filled from its `neutralValue` to its current value. If `neutralValue` has not been explicitly set before, access to `neutralValue` will return `minValue`.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [NSAccessibilitySlider](nsaccessibilityslider.md)
