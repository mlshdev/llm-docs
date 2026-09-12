> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate](https://developer.apple.com/documentation/uikit/uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate)

# prefersToActivateForTargetContentIdentifierPredicate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The set of conditions for which UIKit chooses to activate this scene over others.

## Declaration

```swift
@NSCopying var prefersToActivateForTargetContentIdentifierPredicate: NSPredicate { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which tasks you want this scene to handle. UIKit evaluates your predicate against the [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) property of the object causing the activation of the scene. Many different objects contain target content identifiers, including [NSUserActivity](../../foundation/nsuseractivity.md), [UNNotificationContent](../../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](../uiapplicationshortcutitem.md).

UIKit must be able to evaluate your predicate’s conditions outside the scope of your app, so don’t include conditions that require dynamic evaluation. For example, don’t include key paths in your predicate and don’t create predicates that evaluate conditions using selectors or blocks. The default value of this property is a predicate that always evaluates to the value [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the conditions

- [canActivateForTargetContentIdentifierPredicate](canactivatefortargetcontentidentifierpredicate.md): Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.

# prefersToActivateForTargetContentIdentifierPredicate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The set of conditions for which UIKit chooses to activate this scene over others.

## Declaration

```objectivec
@property (nonatomic, copy) NSPredicate * prefersToActivateForTargetContentIdentifierPredicate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which tasks you want this scene to handle. UIKit evaluates your predicate against the [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) property of the object causing the activation of the scene. Many different objects contain target content identifiers, including [NSUserActivity](../../foundation/nsuseractivity.md), [UNNotificationContent](../../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](../uiapplicationshortcutitem.md).

UIKit must be able to evaluate your predicate’s conditions outside the scope of your app, so don’t include conditions that require dynamic evaluation. For example, don’t include key paths in your predicate and don’t create predicates that evaluate conditions using selectors or blocks. The default value of this property is a predicate that always evaluates to the value [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying the conditions

- [canActivateForTargetContentIdentifierPredicate](canactivatefortargetcontentidentifierpredicate.md): Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.
