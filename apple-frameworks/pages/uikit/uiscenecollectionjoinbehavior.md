> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenecollectionjoinbehavior](https://developer.apple.com/documentation/uikit/uiscenecollectionjoinbehavior)

# UISceneCollectionJoinBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+

A set of behaviors that specify how a new scene joins a scene collection.

## Declaration

```swift
enum UISceneCollectionJoinBehavior
```

## Topics

### Constants

- [UISceneCollectionJoinBehavior.automatic](uiscenecollectionjoinbehavior/automatic.md): A behavior that uses the system preferences for joining collections.
- [UISceneCollectionJoinBehavior.preferred](uiscenecollectionjoinbehavior/preferred.md): A behavior that adds the new scene to the requesting scene’s collection and activate it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehavior.preferredWithoutActivating](uiscenecollectionjoinbehavior/preferredwithoutactivating.md): A behavior that adds the new scene to the requesting scene’s collection without activating it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehavior.disallowed](uiscenecollectionjoinbehavior/disallowed.md): A behavior that creates a new collection for the new scene, ignoring system preferences.

### Initializers

- [init(rawValue:)](uiscenecollectionjoinbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying collection join behavior

- [collectionJoinBehavior](uiscene/activationrequestoptions/collectionjoinbehavior.md): The behavior that specifies how a new scene joins a scene collection.

# UISceneCollectionJoinBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+

A set of behaviors that specify how a new scene joins a scene collection.

## Declaration

```objectivec
enum UISceneCollectionJoinBehavior : NSInteger;
```

## Topics

### Constants

- [UISceneCollectionJoinBehaviorAutomatic](uiscenecollectionjoinbehavior/automatic.md): A behavior that uses the system preferences for joining collections.
- [UISceneCollectionJoinBehaviorPreferred](uiscenecollectionjoinbehavior/preferred.md): A behavior that adds the new scene to the requesting scene’s collection and activate it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehaviorPreferredWithoutActivating](uiscenecollectionjoinbehavior/preferredwithoutactivating.md): A behavior that adds the new scene to the requesting scene’s collection without activating it, or attempts to join a compatible collection.
- [UISceneCollectionJoinBehaviorDisallowed](uiscenecollectionjoinbehavior/disallowed.md): A behavior that creates a new collection for the new scene, ignoring system preferences.

## See Also

### Specifying collection join behavior

- [collectionJoinBehavior](uiscene/activationrequestoptions/collectionjoinbehavior.md): The behavior that specifies how a new scene joins a scene collection.
