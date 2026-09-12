> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcracingwheel](https://developer.apple.com/documentation/gamecontroller/gcracingwheel)

# GCRacingWheel (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An object that represents a physical racing wheel controller connected to a device.

## Declaration

```swift
class GCRacingWheel
```

## Mentioned In

- [Handling input events](handling-input-events.md)

## Topics

### Discovering racing wheels

- [connectedRacingWheels](gcracingwheel/connectedracingwheels.md): The racing wheels connected to the device.
- [GCRacingWheelDidConnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldidconnect.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnect](../foundation/nsnotification/name-swift.struct/gcracingwheeldiddisconnect.md): A notification that posts after a racing wheel controller disconnects from the device.

### Getting events

- [acquireDevice()](gcracingwheel/acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [relinquishDevice()](gcracingwheel/relinquishdevice%28%29.md): Stops receiving events from the racing wheel.
- [isAcquired](gcracingwheel/isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.

### Accessing the controller profile

- [wheelInput](gcracingwheel/wheelinput.md): The physical input profile for the racing wheel.

### Creating snapshots

- [capture()](gcracingwheel/capture%28%29.md): Returns a snapshot of the racing wheel with its current element values.
- [isSnapshot](gcracingwheel/issnapshot.md): A Boolean value that indicates whether the object is a snapshot of a racing wheel.

### Structures

- [GCRacingWheel.DidConnectMessage](gcracingwheel/didconnectmessage.md): A message that posts after a racing wheel accessory connects to the device.
- [GCRacingWheel.DidDisconnectMessage](gcracingwheel/diddisconnectmessage.md): A message that posts after a racing wheel accessory disconnects from the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [GCDevice](gcdevice.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Game controllers

- [Supporting Game Controllers](supporting-game-controllers.md): Support a physical controller or add a virtual controller to enhance how people interact with your game through haptics, lighting, and motion sensing.
- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.

# GCRacingWheel (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

An object that represents a physical racing wheel controller connected to a device.

## Declaration

```objectivec
@interface GCRacingWheel : NSObject
```

## Mentioned In

- [Handling input events](handling-input-events.md)

## Topics

### Discovering racing wheels

- [connectedRacingWheels](gcracingwheel/connectedracingwheels.md): The racing wheels connected to the device.
- [GCRacingWheelDidConnectNotification](gcracingwheeldidconnectnotification.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnectNotification](gcracingwheeldiddisconnectnotification.md): A notification that posts after a racing wheel controller disconnects from the device.

### Getting events

- [acquireDeviceWithError:](gcracingwheel/acquiredevice%28%29.md): Starts receiving events from the racing wheel.
- [relinquishDevice](gcracingwheel/relinquishdevice%28%29.md): Stops receiving events from the racing wheel.
- [acquired](gcracingwheel/isacquired.md): A Boolean value that indicates whether the racing wheel sends events to the app.

### Accessing the controller profile

- [wheelInput](gcracingwheel/wheelinput.md): The physical input profile for the racing wheel.

### Creating snapshots

- [capture](gcracingwheel/capture%28%29.md): Returns a snapshot of the racing wheel with its current element values.
- [snapshot](gcracingwheel/issnapshot.md): A Boolean value that indicates whether the object is a snapshot of a racing wheel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [GCDevice](gcdevice.md)

## See Also

### Game controllers

- [Letting players use their second-generation Siri Remote as a game controller](letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md): Support the second-generation Siri Remote as a game controller in your Apple TV game.
- [Discovering and tracking spatial game controllers and styli](discovering-and-tracking-spatial-game-controllers-and-styli.md): Receive controller and stylus input to interact with content in your augmented reality app.
- [GCDevice](gcdevice.md): A protocol that defines a common interface for game input devices.
- [GCController](gccontroller.md): A representation of a real game controller, a virtual controller, or a snapshot of a controller.
- [GCKeyboard](gckeyboard.md): An object that represents a physical keyboard connected to a device.
- [GCMouse](gcmouse.md): An object that represents a physical mouse connected to a device.
- [GCStylus](gcstylus.md): An object that represents a physical stylus connected to the device.
