> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/userfacetrackingenabled](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/userfacetrackingenabled)

# userFaceTrackingEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether ARKit tracks the user’s face in a world-tracking session.

## Declaration

```swift
var userFaceTrackingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When enabled, ARKit provides you with an [ARFaceAnchor](../arfaceanchor.md) that represents the user’s face during your world tracking session. For example, you can share avatar expressions with multiple users in a multiplayer game, or enable the player to control a virtual object in the physical environment using facial expressions.

Check whether the device supports tracking of the user’s face by using [supportsUserFaceTracking](supportsuserfacetracking.md) before enabling this property.

## See Also

### Tracking the User’s Face

- [supportsUserFaceTracking](supportsuserfacetracking.md): A Boolean value that tells you whether the iOS device supports tracking the user’s face during a world-tracking session.

# userFaceTrackingEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that determines whether ARKit tracks the user’s face in a world-tracking session.

## Declaration

```objectivec
@property (nonatomic, assign, getter=userFaceTrackingEnabled) BOOL userFaceTrackingEnabled;
```

<a id="Discussion"></a>

## Discussion

When enabled, ARKit provides you with an [ARFaceAnchor](../arfaceanchor.md) that represents the user’s face during your world tracking session. For example, you can share avatar expressions with multiple users in a multiplayer game, or enable the player to control a virtual object in the physical environment using facial expressions.

Check whether the device supports tracking of the user’s face by using [supportsUserFaceTracking](supportsuserfacetracking.md) before enabling this property.

## See Also

### Tracking the User’s Face

- [supportsUserFaceTracking](supportsuserfacetracking.md): A Boolean value that tells you whether the iOS device supports tracking the user’s face during a world-tracking session.
