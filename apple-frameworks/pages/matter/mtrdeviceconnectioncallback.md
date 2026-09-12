> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceconnectioncallback](https://developer.apple.com/documentation/matter/mtrdeviceconnectioncallback)

# MTRDeviceConnectionCallback (Swift)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRBaseDevice deviceWithNodeID

## Declaration

```swift
typealias MTRDeviceConnectionCallback = (MTRBaseDevice?, (any Error)?) -> Void
```

# MTRDeviceConnectionCallback (Objective-C)

**Framework:** Matter  
**Kind:** Type Alias  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use MTRBaseDevice deviceWithNodeID

## Declaration

```objectivec
typedef void (^)(MTRBaseDevice *, NSError *) MTRDeviceConnectionCallback;
```
