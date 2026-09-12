> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacetrackingconfiguration/isworldtrackingenabled](https://developer.apple.com/documentation/arkit/arfacetrackingconfiguration/isworldtrackingenabled)

# isWorldTrackingEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that instructs a session to provide the app with the device’s six degrees of freedom pose during a face-tracking session.

## Declaration

```swift
var isWorldTrackingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Before attempting to enable this property, check whether the iOS device supports user-face tracking in a world-tracking session, by calling [supportsWorldTracking](supportsworldtracking.md).

## See Also

### Enabling World Tracking

- [supportsWorldTracking](supportsworldtracking.md): A Boolean value that indicates whether the iOS device supports tracking the user’s facial features in a world-tracking session.

# worldTrackingEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that instructs a session to provide the app with the device’s six degrees of freedom pose during a face-tracking session.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isWorldTrackingEnabled) BOOL worldTrackingEnabled;
```

<a id="Discussion"></a>

## Discussion

Before attempting to enable this property, check whether the iOS device supports user-face tracking in a world-tracking session, by calling [supportsWorldTracking](supportsworldtracking.md).

## See Also

### Enabling World Tracking

- [supportsWorldTracking](supportsworldtracking.md): A Boolean value that indicates whether the iOS device supports tracking the user’s facial features in a world-tracking session.
