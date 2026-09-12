> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/supportsuserfacetracking](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/supportsuserfacetracking)

# supportsUserFaceTracking (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that tells you whether the iOS device supports tracking the user’s face during a world-tracking session.

## Declaration

```swift
class var supportsUserFaceTracking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Check the value of this property first, before you enable face tracking using [userFaceTrackingEnabled](userfacetrackingenabled.md).

## See Also

### Tracking the User’s Face

- [userFaceTrackingEnabled](userfacetrackingenabled.md): A flag that determines whether ARKit tracks the user’s face in a world-tracking session.

# supportsUserFaceTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A Boolean value that tells you whether the iOS device supports tracking the user’s face during a world-tracking session.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL supportsUserFaceTracking;
```

<a id="Discussion"></a>

## Discussion

Check the value of this property first, before you enable face tracking using [userFaceTrackingEnabled](userfacetrackingenabled.md).

## See Also

### Tracking the User’s Face

- [userFaceTrackingEnabled](userfacetrackingenabled.md): A flag that determines whether ARKit tracks the user’s face in a world-tracking session.
