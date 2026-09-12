> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice/button](https://developer.apple.com/documentation/xcuiautomation/xcuidevice/button)

# XCUIDevice.Button (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS · Xcode 16.3+

A physical button on an iOS device.

## Declaration

```swift
enum Button
```

## Topics

### Device buttons

- [XCUIDevice.Button.home](button/home.md): The device’s home button.
- [XCUIDevice.Button.volumeUp](button/volumeup.md): The device’s volume up button.
- [XCUIDevice.Button.volumeDown](button/volumedown.md): The device’s volume down button.
- [XCUIDevice.Button.action](button/action.md): The device’s action button.
- [XCUIDevice.Button.camera](button/camera.md): The device’s camera button.

### Initializers

- [init(rawValue:)](button/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interacting with buttons and the Digital Crown

- [press(\_:)](press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton(\_:)](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [rotateDigitalCrown(delta:)](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrown(delta:velocity:)](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

# XCUIDeviceButton (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS · Xcode 16.3+

A physical button on an iOS device.

## Declaration

```objectivec
enum XCUIDeviceButton : NSInteger;
```

## Topics

### Device buttons

- [XCUIDeviceButtonHome](button/home.md): The device’s home button.
- [XCUIDeviceButtonVolumeUp](button/volumeup.md): The device’s volume up button.
- [XCUIDeviceButtonVolumeDown](button/volumedown.md): The device’s volume down button.
- [XCUIDeviceButtonAction](button/action.md): The device’s action button.
- [XCUIDeviceButtonCamera](button/camera.md): The device’s camera button.

## See Also

### Interacting with buttons and the Digital Crown

- [pressButton:](press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton:](hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [rotateDigitalCrownByDelta:](rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrownByDelta:withVelocity:](rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.
