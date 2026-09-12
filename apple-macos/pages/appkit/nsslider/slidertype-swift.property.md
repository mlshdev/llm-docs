> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/slidertype-swift.property](https://developer.apple.com/documentation/appkit/nsslider/slidertype-swift.property)

# sliderType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The type of the slider, such as vertical or circular.

## Declaration

```swift
var sliderType: NSSlider.SliderType { get set }
```

<a id="Discussion"></a>

## Discussion

See [NSSlider.SliderType](slidertype-swift.enum.md) for possible values.

## See Also

### Managing the slider’s appearance

- [NSSlider.SliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [isVertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.

# sliderType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The type of the slider, such as vertical or circular.

## Declaration

```objectivec
@property NSSliderType sliderType;
```

<a id="Discussion"></a>

## Discussion

See [NSSliderType](slidertype-swift.enum.md) for possible values.

## See Also

### Managing the slider’s appearance

- [NSSliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [setKnobThickness:](setknobthickness_.md): Deprecated.
- [vertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
