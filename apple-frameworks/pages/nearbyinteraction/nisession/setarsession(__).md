> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nisession/setarsession(_:)](https://developer.apple.com/documentation/nearbyinteraction/nisession/setarsession(_:))

# setARSession(\_:) (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides the framework with an existing AR session to use for Camera Assistance.

## Declaration

```swift
func setARSession(_ session: ARSession)
```

## Parameters

- `session`: An existing AR session configured as follows:

  - A world-tracking configuration ([ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md)) with [worldAlignment](../../arkit/arconfiguration/worldalignment-swift.property.md) `=` [ARConfiguration.WorldAlignment.gravity](../../arkit/arconfiguration/worldalignment-swift.enum/gravity.md), [isCollaborationEnabled](../../arkit/arworldtrackingconfiguration/iscollaborationenabled.md) `=` `false`, [userFaceTrackingEnabled](../../arkit/arworldtrackingconfiguration/userfacetrackingenabled.md) `=` `false`, and [initialWorldMap](../../arkit/arworldtrackingconfiguration/initialworldmap.md) `=` `nil`.
  - A delegate that returns `false` for [sessionShouldAttemptRelocalization(\_:)](../../arkit/arsessionobserver/sessionshouldattemptrelocalization%28__%29.md).

<a id="Discussion"></a>

## Discussion

Set the [isCameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) flag to `true` before calling this function. If you enable the flag and run a nearby-interaction session without calling [setARSession(\_:)](setarsession%28__%29.md), the framework creates an internal [ARSession](../../arkit/arsession.md) instance to which the app has no access.

## See Also

### Utilizing Camera Assistance

- [worldTransform(for:)](worldtransform%28for_%29.md): Returns a world transform to integrate a nearby object in an AR experience.

# setARSession: (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides the framework with an existing AR session to use for Camera Assistance.

## Declaration

```objectivec
- (void) setARSession:(ARSession *) session;
```

## Parameters

- `session`: An existing AR session configured as follows:

  - A world-tracking configuration ([ARWorldTrackingConfiguration](../../arkit/arworldtrackingconfiguration.md)) with [worldAlignment](../../arkit/arconfiguration/worldalignment-swift.property.md) `=` [ARWorldAlignmentGravity](../../arkit/arconfiguration/worldalignment-swift.enum/gravity.md), [collaborationEnabled](../../arkit/arworldtrackingconfiguration/iscollaborationenabled.md) `=` `false`, [userFaceTrackingEnabled](../../arkit/arworldtrackingconfiguration/userfacetrackingenabled.md) `=` `false`, and [initialWorldMap](../../arkit/arworldtrackingconfiguration/initialworldmap.md) `=` `nil`.
  - A delegate that returns `false` for [sessionShouldAttemptRelocalization:](../../arkit/arsessionobserver/sessionshouldattemptrelocalization%28__%29.md).

<a id="Discussion"></a>

## Discussion

Set the [cameraAssistanceEnabled](../ninearbypeerconfiguration/iscameraassistanceenabled.md) flag to `true` before calling this function. If you enable the flag and run a nearby-interaction session without calling [setARSession:](setarsession%28__%29.md), the framework creates an internal [ARSession](../../arkit/arsession.md) instance to which the app has no access.

## See Also

### Utilizing Camera Assistance

- [worldTransformForObject:](worldtransformforobject_.md): Returns a world transform to integrate a nearby object in an AR experience.
- [NINearbyObjectWorldTransformNotAvailable](../ninearbyobjectworldtransformnotavailable.md): A constant that indicates that the framework is unable to provide a world transform for a nearby object.
