> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisessiondelegate/session(_:didupdatealgorithmconvergence:for:)](https://developer.apple.com/documentation/nearbyinteraction/nisessiondelegate/session(_:didupdatealgorithmconvergence:for:))

# session(\_:didUpdateAlgorithmConvergence:for:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Provides recommended actions the user can take to facilitate the framework’s Camera Assistance.

## Declaration

```swift
optional func session(_ session: NISession, didUpdateAlgorithmConvergence convergence: NIAlgorithmConvergence, for object: NINearbyObject?)
```

## Parameters

- `session`: The session for which the app leverages Camera Assistance.
- `convergence`: The framework’s state and user recommendations for Camera Assistance.
- `object`: The peer device or third-party accessory. If `nil`, the status refers to the session.

<a id="Discussion"></a>

## Discussion

The framework invokes this callback when [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true` to notify the app of the current convergence state and user-coaching recommendations.

## See Also

### Coaching the user

- [NIAlgorithmConvergenceStatus](../nialgorithmconvergencestatus-2fnve.md): The possible states of Camera Assistance.
- [NIAlgorithmConvergenceStatus.Reason](../nialgorithmconvergencestatus-2fnve/reason.md): The possible reasons for the Camera Assistance status.

# session:didUpdateAlgorithmConvergence:forObject: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · watchOS 9.0+

Provides recommended actions the user can take to facilitate the framework’s Camera Assistance.

## Declaration

```objectivec
- (void) session:(NISession *) session didUpdateAlgorithmConvergence:(NIAlgorithmConvergence *) convergence forObject:(NINearbyObject *) object;
```

## Parameters

- `session`: The session for which the app leverages Camera Assistance.
- `convergence`: The framework’s state and user recommendations for Camera Assistance.
- `object`: The peer device or third-party accessory. If `nil`, the status refers to the session.

<a id="Discussion"></a>

## Discussion

The framework invokes this callback when [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) is `true` to notify the app of the current convergence state and user-coaching recommendations.
