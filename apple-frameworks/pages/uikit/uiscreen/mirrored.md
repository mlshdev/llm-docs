> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/mirrored](https://developer.apple.com/documentation/uikit/uiscreen/mirrored)

# mirrored (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · tvOS

The screen an external display mirrors from.

## Declaration

```swift
var mirrored: UIScreen? { get }
```

<a id="Discussion"></a>

## Discussion

When a screen supports mirroring and mirroring is active, this property contains the screen object associated with the device’s main screen. This represents the screen the attached display mirrors from. The value of this property is `nil` when mirroring is disabled, not supported, or no screen is connected to the device.

To disable mirroring and present unique content on the external display, register a scene accessory with [registerSceneAccessory(\_:)](../uiviewcontroller/registersceneaccessory%28__%29.md). For more information, see [Presenting content on a connected display](../presenting-content-on-a-connected-display.md).

## See Also

### Related Documentation

- [main](main.md): Deprecated. Returns the screen object representing the device’s screen.

### Detecting screen capture

- [isCaptured](iscaptured.md): Deprecated. A Boolean value that indicates whether the system is actively cloning the screen to another destination.

# mirroredScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · tvOS

The screen an external display mirrors from.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIScreen * mirroredScreen;
```

<a id="Discussion"></a>

## Discussion

When a screen supports mirroring and mirroring is active, this property contains the screen object associated with the device’s main screen. This represents the screen the attached display mirrors from. The value of this property is `nil` when mirroring is disabled, not supported, or no screen is connected to the device.

To disable mirroring and present unique content on the external display, register a scene accessory with [registerSceneAccessory:](../uiviewcontroller/registersceneaccessory%28__%29.md). For more information, see [Presenting content on a connected display](../presenting-content-on-a-connected-display.md).

## See Also

### Related Documentation

- [mainScreen](main.md): Deprecated. Returns the screen object representing the device’s screen.

### Detecting screen capture

- [captured](iscaptured.md): Deprecated. A Boolean value that indicates whether the system is actively cloning the screen to another destination.
