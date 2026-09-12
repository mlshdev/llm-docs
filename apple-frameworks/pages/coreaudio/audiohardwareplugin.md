> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareplugin](https://developer.apple.com/documentation/coreaudio/audiohardwareplugin)

# AudioHardwarePlugin

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 15.0+

Instances of the AudioHardwarePlugin class encapsulate a single audio HAL plugin, which is a CFBundle loaded by the HAL as a driver to implement device-specific properties and routines.

## Declaration

```swift
class AudioHardwarePlugin
```

## Topics

### Initializers

- [init(id:)](audiohardwareplugin/init%28id_%29.md)

### Instance Properties

- [boxes](audiohardwareplugin/boxes.md): An array of AudioHardwareBoxes that represent all the box objects currently provided by the plugin.
- [bundleID](audiohardwareplugin/bundleid.md): A String that contains the bundle identifier for the plugin.
- [clocks](audiohardwareplugin/clocks.md): An array of AudioHardwareClocks that represent all the clock objects currently provided by the plugin.
- [devices](audiohardwareplugin/devices.md): An array of AudioHardwareDevices that represent all the devices currently provided by the plugin.

### Instance Methods

- [box(forUID:)](audiohardwareplugin/box%28foruid_%29.md)
- [clock(forUID:)](audiohardwareplugin/clock%28foruid_%29.md)
- [device(forUID:)](audiohardwareplugin/device%28foruid_%29.md)

## Relationships

### Inherits From

- [AudioHardwareObject](audiohardwareobject.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
