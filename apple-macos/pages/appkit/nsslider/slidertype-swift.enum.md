> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/slidertype-swift.enum](https://developer.apple.com/documentation/appkit/nsslider/slidertype-swift.enum)

# NSSlider.SliderType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).

## Declaration

```swift
enum SliderType
```

## Topics

### Enumeration Cases

- [NSSlider.SliderType.circular](slidertype-swift.enum/circular.md): A dial representing an angular range.
- [NSSlider.SliderType.linear](slidertype-swift.enum/linear.md): A bar representing a range, and a knob indicating the currently selected value.

### Initializers

- [init(rawValue:)](slidertype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [isVertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.

# NSSliderType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The types of sliders, used by [sliderType](../nsslidercell/slidertype.md).

## Declaration

```objectivec
enum NSSliderType : NSUInteger;
```

## Topics

### Enumeration Cases

- [NSSliderTypeCircular](slidertype-swift.enum/circular.md): A dial representing an angular range.
- [NSSliderTypeLinear](slidertype-swift.enum/linear.md): A bar representing a range, and a knob indicating the currently selected value.
- [NSLinearSlider](../nslinearslider.md): Deprecated.
- [NSCircularSlider](../nscircularslider.md): Deprecated.

## See Also

### Managing the slider’s appearance

- [sliderType](slidertype-swift.property.md): The type of the slider, such as vertical or circular.
- [altIncrementValue](altincrementvalue.md): The amount by which the slider changes its value when the user Option-drags the slider knob.
- [knobThickness](knobthickness.md): The knob’s thickness, in pixels.
- [setKnobThickness:](setknobthickness_.md): Deprecated.
- [vertical](isvertical.md): An integer indicating the orientation (horizontal or vertical) of the slider.
- [trackFillColor](trackfillcolor.md): The color of the filled portion of the slider track, in appearances that support it.
- [tintProminence](tintprominence.md): The tint prominence of the slider. The automatic behavior for a regular slider tints its track fill, while a slider with tick marks is untinted. Setting the tint prominence will override this default behavior and choose an explicit track fill tint behavior. See [NSTintProminence](../nstintprominence.md) for a list of possible values.
- [NSTintProminence](../nstintprominence.md): Controls how strongly the tint color applies in a view.
