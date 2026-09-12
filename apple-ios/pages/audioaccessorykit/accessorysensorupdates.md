> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorysensorupdates](https://developer.apple.com/documentation/audioaccessorykit/accessorysensorupdates)

# AccessorySensorUpdates

**Framework:** AudioAccessoryKit  
**Kind:** Structure  
**Availability:** iOS 27.0+

Subscribes to a stream of raw sensor data packets from a connected accessory.

## Declaration

```swift
struct AccessorySensorUpdates
```

<a id="overview"></a>

## Overview

An Audio Rendering Extension launched by AudioToolbox uses this type to receive sensor data from a 3P accessory that has registered `.headTracking` via `AccessoryControlDevice`. Data is brokered through `audioaccessoryd` over XPC.

No XPC resources are acquired until iteration begins. Cancel the owning `Task` to stop receiving updates and release the connection.

<a id="Usage"></a>

## Usage

```swift
guard AccessorySensorUpdates.isSupported else { return }
let updates = AccessorySensorUpdates(for: accessoryIdentifier)
sensorTask = Task { [weak self] in
    do {
        for try await data in updates {
            self?.processSensorData(data)
        }
    } catch AccessorySensorUpdates.StreamError.connectionLost {
        // Terminal; stream is over
    }
}
```

## Topics

### Initializers

- [init(for:)](accessorysensorupdates/init%28for_%29.md): Creates a sensor update sequence for the specified accessory.

### Type Properties

- [isSupported](accessorysensorupdates/issupported.md): Returns `true` when the running OS version supports `AccessorySensorUpdates`.

### Enumerations

- [AccessorySensorUpdates.StreamError](accessorysensorupdates/streamerror.md)

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
