> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage](https://developer.apple.com/documentation/avfoundation/avprovideostorage)

# AVProVideoStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A class to track and manage pre-allocated storage for high data rate video capture.

## Declaration

```swift
class AVProVideoStorage
```

<a id="overview"></a>

## Overview

`AVProVideoStorage` is a singleton that manages system-wide pre-allocated storage used during high data rate video capture to ensure I/O determinism and sustain high bandwidth captures (e.g. ProRes).

## Topics

### Getting the shared storage

- [shared](avprovideostorage/shared.md): Returns the singleton instance for Pro Video Storage.
- [isSupported](avprovideostorage/issupported.md): Whether Pro Video Storage is supported in its current configuration.

### Inspecting capacity

- [initialCapacity](avprovideostorage/initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [remainingCapacity](avprovideostorage/remainingcapacity.md): Current size of Pro Video Storage in bytes.
- [replenishCapacity(completionHandler:)](avprovideostorage/replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

### Determining whether storage is busy

- [busyReasons](avprovideostorage/busyreasons.md): Whether Pro Video Storage is busy and the associated reasons.
- [AVProVideoStorage.BusyReason](avprovideostorage/busyreason.md): A reason that Pro Video Storage may be busy.

### Presenting the settings interface

- [openSettings()](avprovideostorage/opensettings%28%29.md): Opens the Pro Video Storage UI in Settings app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVProVideoStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A class to track and manage pre-allocated storage for high data rate video capture.

## Declaration

```objectivec
@interface AVProVideoStorage : NSObject
```

<a id="overview"></a>

## Overview

`AVProVideoStorage` is a singleton that manages system-wide pre-allocated storage used during high data rate video capture to ensure I/O determinism and sustain high bandwidth captures (e.g. ProRes).

## Topics

### Getting the shared storage

- [sharedStorage](avprovideostorage/shared.md): Returns the singleton instance for Pro Video Storage.
- [supported](avprovideostorage/issupported.md): Whether Pro Video Storage is supported in its current configuration.

### Inspecting capacity

- [initialCapacity](avprovideostorage/initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [remainingCapacity](avprovideostorage/remainingcapacity.md): Current size of Pro Video Storage in bytes.
- [replenishCapacityWithCompletionHandler:](avprovideostorage/replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

### Determining whether storage is busy

- [busyReasons](avprovideostorage/busyreasons.md): Whether Pro Video Storage is busy and the associated reasons.
- [AVProVideoStorageBusyReason](avprovideostorage/busyreason.md): A reason that Pro Video Storage may be busy.

### Presenting the settings interface

- [openSettings](avprovideostorage/opensettings%28%29.md): Opens the Pro Video Storage UI in Settings app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
