> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/currentedrheadroom](https://developer.apple.com/documentation/uikit/uiscreen/currentedrheadroom)

# currentEDRHeadroom (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

The screen’s current headroom when displaying extended dynamic range content.

## Declaration

```swift
var currentEDRHeadroom: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

*Headroom* is the ratio of the luminance of the screen’s brightest white to the luminance of standard dynamic range (SDR) white, in the screen’s native color space. The screen’s current headroom limits all rendered content, and can change depending on its configuration and whether it’s displaying extended dynamic range (EDR) content.

To display EDR content in a [CAMetalLayer](../../quartzcore/cametallayer.md), set the layer’s [wantsExtendedDynamicRangeContent](../../quartzcore/cametallayer/wantsextendeddynamicrangecontent.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreen.ReferenceDisplayModeStatus](referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [potentialEDRHeadroom](potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.

# currentEDRHeadroom (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

The screen’s current headroom when displaying extended dynamic range content.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat currentEDRHeadroom;
```

<a id="Discussion"></a>

## Discussion

*Headroom* is the ratio of the luminance of the screen’s brightest white to the luminance of standard dynamic range (SDR) white, in the screen’s native color space. The screen’s current headroom limits all rendered content, and can change depending on its configuration and whether it’s displaying extended dynamic range (EDR) content.

To display EDR content in a [CAMetalLayer](../../quartzcore/cametallayer.md), set the layer’s [wantsExtendedDynamicRangeContent](../../quartzcore/cametallayer/wantsextendeddynamicrangecontent.md) property to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreenReferenceDisplayModeStatus](referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [potentialEDRHeadroom](potentialedrheadroom.md): The screen’s maximum headroom when displaying extended dynamic range content.
