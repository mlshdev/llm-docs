> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/slidertype](https://developer.apple.com/documentation/appkit/nsslidercell/slidertype)

# sliderType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The slider type, either linear or circular.

## Declaration

```swift
var sliderType: NSSlider.SliderType { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant indicating the type of the slider. Possible values are described in [NSSlider.SliderType](../nsslider/slidertype-swift.enum.md).

When the value of this property is `NSCircularSlider`, then you get a fixed-size circular slider. The minimum value ([minValue](minvalue.md)) is at the top, and the value increases clockwise around the dial. The maximum selectable value is just below [maxValue](maxvalue.md); for example, if [maxValue](maxvalue.md) is 360, you can set the dial up to 359.999.

You can use the [numberOfTickMarks](numberoftickmarks.md) property to display tick marks, and you can use the [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md) property to specify that values are limited to those values represented by tick marks. You can set this control to regular or small sizes; the mini size is not supported.

# sliderType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The slider type, either linear or circular.

## Declaration

```objectivec
@property NSSliderType sliderType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a constant indicating the type of the slider. Possible values are described in [NSSliderType](../nsslider/slidertype-swift.enum.md).

When the value of this property is `NSCircularSlider`, then you get a fixed-size circular slider. The minimum value ([minValue](minvalue.md)) is at the top, and the value increases clockwise around the dial. The maximum selectable value is just below [maxValue](maxvalue.md); for example, if [maxValue](maxvalue.md) is 360, you can set the dial up to 359.999.

You can use the [numberOfTickMarks](numberoftickmarks.md) property to display tick marks, and you can use the [allowsTickMarkValuesOnly](allowstickmarkvaluesonly.md) property to specify that values are limited to those values represented by tick marks. You can set this control to regular or small sizes; the mini size is not supported.
