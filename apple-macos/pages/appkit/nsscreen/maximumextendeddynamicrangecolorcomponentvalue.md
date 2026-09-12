> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue)

# maximumExtendedDynamicRangeColorComponentValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The current maximum color component value for the screen.

## Declaration

```swift
var maximumExtendedDynamicRangeColorComponentValue: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If no content on screen provides extended dynamic range (EDR) values, the value of this property is `1.0`. If any content onscreen has requested EDR, the value may be greater than `1.0`, depending on the capabilities of the display hardware and other conditions. Only rendering contexts that support EDR can use values greater than `1.0`.

When the value changes, [didChangeScreenParametersNotification](../nsapplication/didchangescreenparametersnotification.md) is posted.

## See Also

### Related Documentation

- [wantsExtendedDynamicRangeContent](https://developer.apple.com/documentation/quartzcore/cametallayer/wantsextendeddynamicrangecontent): Enables extended dynamic range values onscreen.

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.

# maximumExtendedDynamicRangeColorComponentValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The current maximum color component value for the screen.

## Declaration

```objectivec
@property (readonly) CGFloat maximumExtendedDynamicRangeColorComponentValue;
```

<a id="Discussion"></a>

## Discussion

If no content on screen provides extended dynamic range (EDR) values, the value of this property is `1.0`. If any content onscreen has requested EDR, the value may be greater than `1.0`, depending on the capabilities of the display hardware and other conditions. Only rendering contexts that support EDR can use values greater than `1.0`.

When the value changes, [NSApplicationDidChangeScreenParametersNotification](../nsapplication/didchangescreenparametersnotification.md) is posted.

## See Also

### Related Documentation

- [wantsExtendedDynamicRangeContent](https://developer.apple.com/documentation/quartzcore/cametallayer/wantsextendeddynamicrangecontent): Enables extended dynamic range values onscreen.

### Getting Extended Dynamic Range Details

- [maximumPotentialExtendedDynamicRangeColorComponentValue](maximumpotentialextendeddynamicrangecolorcomponentvalue.md): The maximum possible color component value for the screen when it’s in extended dynamic range (EDR) mode.
- [maximumReferenceExtendedDynamicRangeColorComponentValue](maximumreferenceextendeddynamicrangecolorcomponentvalue.md): The current maximum color component value for reference rendering to the screen.
