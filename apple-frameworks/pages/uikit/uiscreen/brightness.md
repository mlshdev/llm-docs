> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/brightness](https://developer.apple.com/documentation/uikit/uiscreen/brightness)

# brightness (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+

The brightness level of the screen.

## Declaration

```swift
var brightness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property is only supported on the main screen. The value of this property is a number between `0.0` and `1.0`, inclusive, where `0.0` is the minimum brightness and `1.0` is the maximum brightness.

Brightness changes remain in effect until the person locks their device, even if the person closes your app before then. The next time the person unlocks the device, the system restores the brightness setting to the original value in Settings or Control Center.

In visionOS, setting this property has no effect.

## See Also

### Managing brightness

- [wantsSoftwareDimming](wantssoftwaredimming.md): A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.

# brightness (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+

The brightness level of the screen.

## Declaration

```objectivec
@property (nonatomic) CGFloat brightness;
```

<a id="Discussion"></a>

## Discussion

This property is only supported on the main screen. The value of this property is a number between `0.0` and `1.0`, inclusive, where `0.0` is the minimum brightness and `1.0` is the maximum brightness.

Brightness changes remain in effect until the person locks their device, even if the person closes your app before then. The next time the person unlocks the device, the system restores the brightness setting to the original value in Settings or Control Center.

In visionOS, setting this property has no effect.

## See Also

### Managing brightness

- [wantsSoftwareDimming](wantssoftwaredimming.md): A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.
