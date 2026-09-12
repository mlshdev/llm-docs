> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/trackfillcolor](https://developer.apple.com/documentation/appkit/nsslider/trackfillcolor)

# trackFillColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the filled portion of the slider track, in appearances that support it.

## Declaration

```swift
@NSCopying var trackFillColor: NSColor? { get set }
```

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSlider.SliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [isVertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.

# trackFillColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The color of the filled portion of the slider track, in appearances that support it.

## Declaration

```objectivec
@property (copy, nullable) NSColor * trackFillColor;
```

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [NSSliderType](slidertype-swift.enum.md): The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [setKnobThickness:](setknobthickness_.md): Deprecated.
- [vertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
