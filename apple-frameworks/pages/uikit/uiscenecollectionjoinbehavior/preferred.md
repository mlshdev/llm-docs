> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenecollectionjoinbehavior/preferred](https://developer.apple.com/documentation/uikit/uiscenecollectionjoinbehavior/preferred)

# UISceneCollectionJoinBehavior.preferred (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+

A behavior that adds the new scene to the requesting scene’s collection and activate it, or attempts to join a compatible collection.

## Declaration

```swift
case preferred
```

<a id="Discussion"></a>

## Discussion

If [requestingScene](../uiscene/activationrequestoptions/requestingscene.md) is set, this behavior adds the new scene to its collection and activates it. Otherwise, the scene attempts to join a compatible collection.

## See Also

### Constants

- [UISceneCollectionJoinBehavior.automatic](automatic.md): A behavior that uses the system preferences for joining collections.
- [UISceneCollectionJoinBehavior.preferredWithoutActivating](preferredwithoutactivating.md): A behavior that adds the new scene to the requesting scene’s collection without activating it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehavior.disallowed](disallowed.md): A behavior that creates a new collection for the new scene, ignoring system preferences.

# UISceneCollectionJoinBehaviorPreferred (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+

A behavior that adds the new scene to the requesting scene’s collection and activate it, or attempts to join a compatible collection.

## Declaration

```objectivec
UISceneCollectionJoinBehaviorPreferred
```

<a id="Discussion"></a>

## Discussion

If [requestingScene](../uiscene/activationrequestoptions/requestingscene.md) is set, this behavior adds the new scene to its collection and activates it. Otherwise, the scene attempts to join a compatible collection.

## See Also

### Constants

- [UISceneCollectionJoinBehaviorAutomatic](automatic.md): A behavior that uses the system preferences for joining collections.
- [UISceneCollectionJoinBehaviorPreferredWithoutActivating](preferredwithoutactivating.md): A behavior that adds the new scene to the requesting scene’s collection without activating it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehaviorDisallowed](disallowed.md): A behavior that creates a new collection for the new scene, ignoring system preferences.
