> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stscreentimeconfigurationobserver](https://developer.apple.com/documentation/screentime/stscreentimeconfigurationobserver)

# STScreenTimeConfigurationObserver (Swift)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The object you use to observe changes to the current configuration.

## Declaration

```swift
class STScreenTimeConfigurationObserver
```

<a id="overview"></a>

## Overview

Use this class to start and stop observing the current configuration. For example, you can opt to disable private browsing in your web browser’s view controller when [enforcesChildRestrictions](stscreentimeconfiguration/enforceschildrestrictions.md) is `true`.

## Topics

### Initializers

- [init(updateQueue:)](stscreentimeconfigurationobserver/init%28updatequeue_%29.md): Creates a configuration observer that reports updates on the queue you specify.

### Instance properties

- [configuration](stscreentimeconfigurationobserver/configuration.md): The configuration being observed.

### Instance methods

- [startObserving()](stscreentimeconfigurationobserver/startobserving%28%29.md): Starts observing changes to the current configuration.
- [stopObserving()](stscreentimeconfigurationobserver/stopobserving%28%29.md): Stops observing changes to the current configuration.

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

## See Also

### Configuration queries

- [STScreenTimeConfiguration](stscreentimeconfiguration.md): The configuration for this device.

# STScreenTimeConfigurationObserver (Objective-C)

**Framework:** Screen Time  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

The object you use to observe changes to the current configuration.

## Declaration

```objectivec
@interface STScreenTimeConfigurationObserver : NSObject
```

<a id="overview"></a>

## Overview

Use this class to start and stop observing the current configuration. For example, you can opt to disable private browsing in your web browser’s view controller when [enforcesChildRestrictions](stscreentimeconfiguration/enforceschildrestrictions.md) is `true`.

## Topics

### Initializers

- [initWithUpdateQueue:](stscreentimeconfigurationobserver/init%28updatequeue_%29.md): Creates a configuration observer that reports updates on the queue you specify.

### Instance properties

- [configuration](stscreentimeconfigurationobserver/configuration.md): The configuration being observed.

### Instance methods

- [startObserving](stscreentimeconfigurationobserver/startobserving%28%29.md): Starts observing changes to the current configuration.
- [stopObserving](stscreentimeconfigurationobserver/stopobserving%28%29.md): Stops observing changes to the current configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Configuration queries

- [STScreenTimeConfiguration](stscreentimeconfiguration.md): The configuration for this device.
