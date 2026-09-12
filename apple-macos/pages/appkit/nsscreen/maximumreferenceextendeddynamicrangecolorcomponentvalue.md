> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/maximumreferenceextendeddynamicrangecolorcomponentvalue](https://developer.apple.com/documentation/appkit/nsscreen/maximumreferenceextendeddynamicrangecolorcomponentvalue)

# maximumReferenceExtendedDynamicRangeColorComponentValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The current maximum color component value for reference rendering to the screen.

## Declaration

```swift
var maximumReferenceExtendedDynamicRangeColorComponentValue: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Reference displays are calibrated to provide accurate color and lighting information that helps to optimize video content. Not all displays support reference rendering. If the display hardware doesn’t support reference rendering, the value of this property is `0`.

On reference displays, if you constrain pixel component values to values between `0` and [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md), the display hardware doesn’t apply any additional tone mapping to the pixels before rendering them. If you use values above this range, display hardware may adjust content to fit into its dynamic range.

## See Also

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.

# maximumReferenceExtendedDynamicRangeColorComponentValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The current maximum color component value for reference rendering to the screen.

## Declaration

```objectivec
@property (readonly) CGFloat maximumReferenceExtendedDynamicRangeColorComponentValue;
```

<a id="Discussion"></a>

## Discussion

Reference displays are calibrated to provide accurate color and lighting information that helps to optimize video content. Not all displays support reference rendering. If the display hardware doesn’t support reference rendering, the value of this property is `0`.

On reference displays, if you constrain pixel component values to values between `0` and [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md), the display hardware doesn’t apply any additional tone mapping to the pixels before rendering them. If you use values above this range, display hardware may adjust content to fit into its dynamic range.

## See Also

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
