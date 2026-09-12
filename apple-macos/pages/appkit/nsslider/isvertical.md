> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/isvertical](https://developer.apple.com/documentation/appkit/nsslider/isvertical)

# isVertical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An integer indicating the orientation (horizontal or vertical) of the slider.

## Declaration

```swift
var isVertical: Bool { get set }
```

```swift
var vertical: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `1` if the slider is vertical, `0` if it’s horizontal, and `-1` if the orientation is unknown (for example, if the slider hasn’t been displayed yet). A slider is defined as vertical if its height is greater than its width.

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSlider.SliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.

# vertical (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

An integer indicating the orientation (horizontal or vertical) of the slider.

## Declaration

```objectivec
@property (readwrite, getter=isVertical) BOOL vertical;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `1` if the slider is vertical, `0` if it’s horizontal, and `-1` if the orientation is unknown (for example, if the slider hasn’t been displayed yet). A slider is defined as vertical if its height is greater than its width.

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [setKnobThickness:](setknobthickness_.md): Deprecated.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
