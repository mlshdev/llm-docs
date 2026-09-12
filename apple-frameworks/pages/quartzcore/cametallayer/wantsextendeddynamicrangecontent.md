> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/wantsextendeddynamicrangecontent](https://developer.apple.com/documentation/quartzcore/cametallayer/wantsextendeddynamicrangecontent)

# wantsExtendedDynamicRangeContent (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.11+ · visionOS 1.0+

Enables extended dynamic range values onscreen.

## Declaration

```swift
var wantsExtendedDynamicRangeContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If any onscreen layer has this property set to [true](https://developer.apple.com/documentation/swift/true), all rendered content is clamped to the screen’s [maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue) value rather than `1.0`.

## See Also

### Related Documentation

- [maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue): The current maximum color component value for the screen.

### Configuring Extended Dynamic Range Behavior

- [edrMetadata](edrmetadata.md): Metadata describing the tone mapping to apply to the extended dynamic range (EDR) values in the layer.

# wantsExtendedDynamicRangeContent (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.11+ · visionOS 1.0+

Enables extended dynamic range values onscreen.

## Declaration

```objectivec
@property BOOL wantsExtendedDynamicRangeContent;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). If any onscreen layer has this property set to [true](https://developer.apple.com/documentation/swift/true), all rendered content is clamped to the screen’s [maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue) value rather than `1.0`.

## See Also

### Related Documentation

- [maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue): The current maximum color component value for the screen.

### Configuring Extended Dynamic Range Behavior

- [EDRMetadata](edrmetadata.md): Metadata describing the tone mapping to apply to the extended dynamic range (EDR) values in the layer.
