> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice](https://developer.apple.com/documentation/accessibility/axmfihearingdevice)

# AXMFiHearingDevice

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A namespace for hearing device accessibility symbols in Swift.

## Declaration

```swift
struct AXMFiHearingDevice
```

## Topics

### Streaming status

- [streamingEar()](axmfihearingdevice/streamingear%28%29.md): Returns which ears enable streaming.
- [AXMFiHearingDevice.Ear](axmfihearingdevice/ear.md): Constants that represent a hearing device ear.
- [streamingEarDidChangeNotification](axmfihearingdevice/streamingeardidchangenotification.md): A notification that the system posts when there’s a change to which ears enable streaming.

### Streaming type

- [supportsBidirectionalStreaming()](axmfihearingdevice/supportsbidirectionalstreaming%28%29.md): Returns a Boolean value that indicates whether the iOS device supports bidirectional streaming.

### Paired hearing devices

- [pairedDeviceIdentifiers()](axmfihearingdevice/paireddeviceidentifiers%28%29.md): Returns the UUIDs of the hearing device peripherals.
- [pairedUUIDsDidChangeNotification](axmfihearingdevice/paireduuidsdidchangenotification.md): A notification that the system posts when there’s a change to the UUIDs of the hearing device peripherals.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
