> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediadevice/capability](https://developer.apple.com/documentation/nowplaying/mediadevice/capability)

# MediaDevice.Capability

**Framework:** Now Playing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The control capabilities of a device.

## Declaration

```swift
struct Capability
```

## Mentioned In

- [Publishing remote media sessions](../publishing-remote-media-sessions.md)

<a id="overview"></a>

## Overview

Use this to specify what control operations a device supports. The system uses this information to enable or disable device-specific controls in the interface.

## Topics

### Type Methods

- [absoluteVolume(\_:onChange:)](capability/absolutevolume%28__onchange_%29.md): Returns a capability that lets the device be set to a specific volume level.
- [relativeVolume(onIncrement:onDecrement:)](capability/relativevolume%28onincrement_ondecrement_%29.md): Returns a capability that lets the device increase or decrease its volume incrementally.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
