> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/rotatedigitalcrown(delta:velocity:)](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/rotatedigitalcrown(delta:velocity:))

# rotateDigitalCrown(delta:velocity:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** visionOS · watchOS · Xcode 16.3+

Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

## Declaration

```swift
func rotateDigitalCrown(delta rotationalDelta: CGFloat, velocity: XCUIGestureVelocity)
```

## Parameters

- `rotationalDelta`: A float value that indicates the fraction of a full rotation of the Digital Crown.
- `velocity`: A value that represents how fast to rotate the Digital Crown, in rotations per second.

<a id="Discussion"></a>

## Discussion

Provide a positive value for `rotationalDelta` to indicate scrolling upward or a negative value to indicate scrolling downward, regardless of the orientation of the watch. A `rotationalDelta` value of `1.0` indicates a full rotation of the Digital Crown. Specify a `velocity` in rotations per second; the system ignores the sign of the `velocity` you provide.

## See Also

### Interacting with buttons and the Digital Crown

- [press(\_:)](press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton(\_:)](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDevice.Button](button.md): A physical button on an iOS device.
- [rotateDigitalCrown(delta:)](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.

# rotateDigitalCrownByDelta:withVelocity: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** visionOS · watchOS · Xcode 16.3+

Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

## Declaration

```objectivec
- (void) rotateDigitalCrownByDelta:(CGFloat) rotationalDelta withVelocity:(XCUIGestureVelocity) velocity;
```

## Parameters

- `rotationalDelta`: A float value that indicates the fraction of a full rotation of the Digital Crown.
- `velocity`: A value that represents how fast to rotate the Digital Crown, in rotations per second.

<a id="Discussion"></a>

## Discussion

Provide a positive value for `rotationalDelta` to indicate scrolling upward or a negative value to indicate scrolling downward, regardless of the orientation of the watch. A `rotationalDelta` value of `1.0` indicates a full rotation of the Digital Crown. Specify a `velocity` in rotations per second; the system ignores the sign of the `velocity` you provide.

## See Also

### Interacting with buttons and the Digital Crown

- [pressButton:](press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton:](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDeviceButton](button.md): A physical button on an iOS device.
- [rotateDigitalCrownByDelta:](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
