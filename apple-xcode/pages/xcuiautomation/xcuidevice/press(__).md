> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/press(_:)](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/press(_:))

# press(\_:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS · Xcode 16.3+

Simulates the user pressing a physical button.

## Declaration

```swift
func press(_ button: XCUIDevice.Button)
```

## Parameters

- `button`: The button to press on the device.

## See Also

### Interacting with buttons and the Digital Crown

- [hasHardwareButton(\_:)](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDevice.Button](button.md): A physical button on an iOS device.
- [rotateDigitalCrown(delta:)](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrown(delta:velocity:)](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

# pressButton: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS · Xcode 16.3+

Simulates the user pressing a physical button.

## Declaration

```objectivec
- (void) pressButton:(XCUIDeviceButton) button;
```

## Parameters

- `button`: The button to press on the device.

## See Also

### Interacting with buttons and the Digital Crown

- [hasHardwareButton:](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDeviceButton](button.md): A physical button on an iOS device.
- [rotateDigitalCrownByDelta:](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrownByDelta:withVelocity:](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.
