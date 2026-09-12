> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode/islistenerheadtrackingenabled](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/islistenerheadtrackingenabled)

# isListenerHeadTrackingEnabled (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the listener orientation is automatically rotated based on head orientation.

## Declaration

```swift
var isListenerHeadTrackingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To enable head tracking, your app must have the [com.apple.developer.coremotion.head-pose](../../bundleresources/entitlements/com.apple.developer.coremotion.head-pose.md) entitlement.

Set this value to [true](https://developer.apple.com/documentation/swift/true) to enable head tracking with compatible AirPods.

# listenerHeadTrackingEnabled (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the listener orientation is automatically rotated based on head orientation.

## Declaration

```objectivec
@property (nonatomic, getter=isListenerHeadTrackingEnabled) BOOL listenerHeadTrackingEnabled;
```

<a id="Discussion"></a>

## Discussion

To enable head tracking, your app must have the [com.apple.developer.coremotion.head-pose](../../bundleresources/entitlements/com.apple.developer.coremotion.head-pose.md) entitlement.

Set this value to [true](https://developer.apple.com/documentation/swift/true) to enable head tracking with compatible AirPods.
