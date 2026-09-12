> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/isvoipallowed()](https://developer.apple.com/documentation/gamekit/gkvoicechat/isvoipallowed())

# isVoIPAllowed() (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Returns whether voice chat is available on the device.

> No longer supported

## Declaration

```swift
class func isVoIPAllowed() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if voice chat is available to the game.

<a id="Discussion"></a>

## Discussion

Some countries or phone carriers may restrict the availability of Voice-over-IP (VoIP) services. Before creating a `GKVoiceChat` object, your game should first check to see whether the device supports VoIP.

# isVoIPAllowed (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Returns whether voice chat is available on the device.

> No longer supported

## Declaration

```objectivec
+ (BOOL) isVoIPAllowed;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if voice chat is available to the game.

<a id="Discussion"></a>

## Discussion

Some countries or phone carriers may restrict the availability of Voice-over-IP (VoIP) services. Before creating a `GKVoiceChat` object, your game should first check to see whether the device supports VoIP.
