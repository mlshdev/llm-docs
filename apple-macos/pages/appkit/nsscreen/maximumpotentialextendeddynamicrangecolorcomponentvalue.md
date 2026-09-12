> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/maximumpotentialextendeddynamicrangecolorcomponentvalue](https://developer.apple.com/documentation/appkit/nsscreen/maximumpotentialextendeddynamicrangecolorcomponentvalue)

# maximumPotentialExtendedDynamicRangeColorComponentValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.

## Declaration

```swift
var maximumPotentialExtendedDynamicRangeColorComponentValue: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is determined when you create the [NSScreen](../nsscreen.md) object, and doesn’t change afterwards. If this property is greater than `1.0`, the screen supports EDR values. If the screen doesn’t support EDR values, the value is `1.0`.

The actual maximum value might be lower than this property’s value, and can change dynamically, depending on the capabilities of the display hardware and other conditions. See [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md).

## See Also

### Getting Extended Dynamic Range Details

- [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.

# maximumPotentialExtendedDynamicRangeColorComponentValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.

## Declaration

```objectivec
@property (readonly) CGFloat maximumPotentialExtendedDynamicRangeColorComponentValue;
```

<a id="Discussion"></a>

## Discussion

The value of this property is determined when you create the [NSScreen](../nsscreen.md) object, and doesn’t change afterwards. If this property is greater than `1.0`, the screen supports EDR values. If the screen doesn’t support EDR values, the value is `1.0`.

The actual maximum value might be lower than this property’s value, and can change dynamically, depending on the capabilities of the display hardware and other conditions. See [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md).

## See Also

### Getting Extended Dynamic Range Details

- [maximumExtendedDynamicRangeColorComponentValue](maximumextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for the screen.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.
