> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacetrackingconfiguration/supportsworldtracking](https://developer.apple.com/documentation/arkit/arfacetrackingconfiguration/supportsworldtracking)

# supportsWorldTracking (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that indicates whether the iOS device supports tracking the user’s facial features in a world-tracking session.

## Declaration

```swift
class var supportsWorldTracking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Call this function before attempting to enable world tracking in a face tracking configuration using [isWorldTrackingEnabled](isworldtrackingenabled.md).

## See Also

### Enabling World Tracking

- [isWorldTrackingEnabled](isworldtrackingenabled.md): A Boolean value that instructs a session to provide the app with the device’s six degrees of freedom pose during a face-tracking session.

# supportsWorldTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that indicates whether the iOS device supports tracking the user’s facial features in a world-tracking session.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL supportsWorldTracking;
```

<a id="Discussion"></a>

## Discussion

Call this function before attempting to enable world tracking in a face tracking configuration using [worldTrackingEnabled](isworldtrackingenabled.md).

## See Also

### Enabling World Tracking

- [worldTrackingEnabled](isworldtrackingenabled.md): A Boolean value that instructs a session to provide the app with the device’s six degrees of freedom pose during a face-tracking session.
