> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuidevice](https://developer.apple.com/documentation/xcuiautomation/xcuidevice)

# XCUIDevice (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.

## Declaration

```swift
@MainActor class XCUIDevice
```

<a id="overview"></a>

## Overview

Use the `XCUIDevice` [shared](xcuidevice/shared.md) instance to perform the following interactions with a simulated iOS, watchOS, or tvOS device during a UI test:

- Press the volume, home, camera, and action buttons.
- Rotate the device.
- Turn the Digital Crown on a watchOS device.
- Determine whether the iOS device supports pointer interaction.
- Activate Siri.

This example shows a test that determines whether the action button is available on the shared device and, if it is, simulates pressing the button:

```swift
@MainActor
func testPressingActionButton() throws {
    let device = XCUIDevice.shared
    try XCTSkipUnless(device.hasHardwareButton(.action),
                  "The device doesn't have an action button.")
    let app = XCUIApplication()
    app.launch()
    device.press(.action)
    // Assert that your app responds correctly.
}
```

`XCUIDevice` is available in iOS, watchOS, and tvOS.

## Topics

### Accessing the current device

- [shared](xcuidevice/shared.md): The current device.
- [supportsPointerInteraction](xcuidevice/supportspointerinteraction.md): A Boolean value that indicates if the device supports pointer interaction.
- [supportsHandGestures](xcuidevice/supportshandgestures.md): A Boolean value that indicates if the device supports hand gestures.

### Interacting with buttons and the Digital Crown

- [press(\_:)](xcuidevice/press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton(\_:)](xcuidevice/hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDevice.Button](xcuidevice/button.md): A physical button on an iOS device.
- [rotateDigitalCrown(delta:)](xcuidevice/rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrown(delta:velocity:)](xcuidevice/rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

### Performing gestures

- [perform(handGesture:)](xcuidevice/perform%28handgesture_%29.md)
- [XCUIDeviceHandGesture](xcuidevicehandgesture.md): A hand gesture on a watchOS device.

### Rotating and changing location

- [orientation](xcuidevice/orientation.md): The orientation of the device.
- [location](xcuidevice/location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.
- [XCUILocation](xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

### Interacting with the OS

- [system](xcuidevice/system.md): An object that provides an interface to OS-specific properties and actions.
- [appearance](xcuidevice/appearance-swift.property.md): The interface style of the device.
- [XCUIDevice.Appearance](xcuidevice/appearance-swift.enum.md): Constants that indicate an interface style.

### Interacting with Siri

- [siriService](xcuidevice/siriservice.md): An object that represents the Siri interface on the device.

### Deprecated

- [init()](xcuidevice/init%28%29.md): Deprecated. Creates an instance that represents the current device.

### Instance Properties

- [voiceOverService](xcuidevice/voiceoverservice.md): Provides access to VoiceOver for UI testing.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Device simulation

- [XCUISystem](xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.
- [XCUISiriService](xcuisiriservice.md): A proxy that simulates a device’s Siri interface.

# XCUIDevice (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.

## Declaration

```objectivec
@interface XCUIDevice : NSObject
```

<a id="overview"></a>

## Overview

Use the `XCUIDevice` [sharedDevice](xcuidevice/shared.md) instance to perform the following interactions with a simulated iOS, watchOS, or tvOS device during a UI test:

- Press the volume, home, camera, and action buttons.
- Rotate the device.
- Turn the Digital Crown on a watchOS device.
- Determine whether the iOS device supports pointer interaction.
- Activate Siri.

This example shows a test that determines whether the action button is available on the shared device and, if it is, simulates pressing the button:

```swift
@MainActor
func testPressingActionButton() throws {
    let device = XCUIDevice.shared
    try XCTSkipUnless(device.hasHardwareButton(.action),
                  "The device doesn't have an action button.")
    let app = XCUIApplication()
    app.launch()
    device.press(.action)
    // Assert that your app responds correctly.
}
```

`XCUIDevice` is available in iOS, watchOS, and tvOS.

## Topics

### Accessing the current device

- [sharedDevice](xcuidevice/shared.md): The current device.
- [supportsPointerInteraction](xcuidevice/supportspointerinteraction.md): A Boolean value that indicates if the device supports pointer interaction.
- [supportsHandGestures](xcuidevice/supportshandgestures.md): A Boolean value that indicates if the device supports hand gestures.

### Interacting with buttons and the Digital Crown

- [pressButton:](xcuidevice/press%28__%29.md): Simulates the user pressing a physical button.
- [hasHardwareButton:](xcuidevice/hashardwarebutton%28__%29.md): Determines whether the device supports the button type you provide.
- [XCUIDeviceButton](xcuidevice/button.md): A physical button on an iOS device.
- [rotateDigitalCrownByDelta:](xcuidevice/rotatedigitalcrown%28delta_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount.
- [rotateDigitalCrownByDelta:withVelocity:](xcuidevice/rotatedigitalcrown%28delta_velocity_%29.md): Simulates the user rotating the Digital Crown on an Apple Watch by the delta amount and speed you provide.

### Performing gestures

- [performHandGesture:](xcuidevice/perform%28handgesture_%29.md)
- [XCUIDeviceHandGesture](xcuidevicehandgesture.md): A hand gesture on a watchOS device.

### Rotating and changing location

- [orientation](xcuidevice/orientation.md): The orientation of the device.
- [location](xcuidevice/location.md): The proxy location a test uses to simulate longitude, latitude, and course information for the device.
- [XCUILocation](xcuilocation.md): A proxy that simulates a device’s location in terms of its longitude, latitude, and course information.

### Interacting with the OS

- [system](xcuidevice/system.md): An object that provides an interface to OS-specific properties and actions.
- [appearance](xcuidevice/appearance-swift.property.md): The interface style of the device.
- [XCUIDeviceAppearance](xcuidevice/appearance-swift.enum.md): Constants that indicate an interface style.

### Interacting with Siri

- [siriService](xcuidevice/siriservice.md): An object that represents the Siri interface on the device.

### Deprecated

- [init](xcuidevice/init%28%29.md): Deprecated. Creates an instance that represents the current device.

### Instance Properties

- [voiceOverService](xcuidevice/voiceoverservice.md): Provides access to VoiceOver for UI testing.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Device simulation

- [XCUISystem](xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.
- [XCUISiriService](xcuisiriservice.md): A proxy that simulates a device’s Siri interface.
