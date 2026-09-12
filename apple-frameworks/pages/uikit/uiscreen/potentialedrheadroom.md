> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/potentialedrheadroom](https://developer.apple.com/documentation/uikit/uiscreen/potentialedrheadroom)

# potentialEDRHeadroom (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

The screen’s maximum headroom when displaying extended dynamic range content.

## Declaration

```swift
var potentialEDRHeadroom: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

*Headroom* is the ratio of the luminance of the screen’s brightest white to the luminance of standard dynamic range (SDR) white, in the screen’s native color space. The screen’s maximum headroom can change depending on its configuration, such as when [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md) changes.

You can query this property even when the screen isn’t displaying extended dynamic range (EDR) content.

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreen.ReferenceDisplayModeStatus](referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [currentEDRHeadroom](currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.

# potentialEDRHeadroom (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+

The screen’s maximum headroom when displaying extended dynamic range content.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat potentialEDRHeadroom;
```

<a id="Discussion"></a>

## Discussion

*Headroom* is the ratio of the luminance of the screen’s brightest white to the luminance of standard dynamic range (SDR) white, in the screen’s native color space. The screen’s maximum headroom can change depending on its configuration, such as when [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md) changes.

You can query this property even when the screen isn’t displaying extended dynamic range (EDR) content.

## See Also

### Getting the reference display mode status

- [referenceDisplayModeStatus](referencedisplaymodestatus-swift.property.md): The status of the screen’s reference display mode.
- [UIScreenReferenceDisplayModeStatus](referencedisplaymodestatus-swift.enum.md): Describes a screen’s reference display mode status.
- [currentEDRHeadroom](currentedrheadroom.md): The screen’s current headroom when displaying extended dynamic range content.
