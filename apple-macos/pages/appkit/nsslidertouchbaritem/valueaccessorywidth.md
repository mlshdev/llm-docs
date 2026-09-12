> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidertouchbaritem/valueaccessorywidth](https://developer.apple.com/documentation/appkit/nsslidertouchbaritem/valueaccessorywidth)

# valueAccessoryWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The width of the value accessories that appear at either end of the slider.

## Declaration

```swift
var valueAccessoryWidth: NSSliderAccessory.Width { get set }
```

<a id="Discussion"></a>

## Discussion

You can provide your own custom width, or use the system-provided [default](../nsslideraccessory/width/default.md) or [wide](../nsslideraccessory/width/wide.md) options.

The default value is [default](../nsslideraccessory/width/default.md).

## See Also

### Configuring slider accessories

- [minimumValueAccessory](minimumvalueaccessory.md): The accessory that appears at the end of the slider with the minimum value.
- [maximumValueAccessory](maximumvalueaccessory.md): The accessory that appears at the end of the slider with the maximum value.

# valueAccessoryWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The width of the value accessories that appear at either end of the slider.

## Declaration

```objectivec
@property NSSliderAccessoryWidth valueAccessoryWidth;
```

<a id="Discussion"></a>

## Discussion

You can provide your own custom width, or use the system-provided [NSSliderAccessoryWidthDefault](../nsslideraccessory/width/default.md) or [NSSliderAccessoryWidthWide](../nsslideraccessory/width/wide.md) options.

The default value is [NSSliderAccessoryWidthDefault](../nsslideraccessory/width/default.md).

## See Also

### Configuring slider accessories

- [minimumValueAccessory](minimumvalueaccessory.md): The accessory that appears at the end of the slider with the minimum value.
- [maximumValueAccessory](maximumvalueaccessory.md): The accessory that appears at the end of the slider with the maximum value.
