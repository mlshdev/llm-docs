> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneactivationconditions/canactivatefortargetcontentidentifierpredicate](https://developer.apple.com/documentation/uikit/uisceneactivationconditions/canactivatefortargetcontentidentifierpredicate)

# canActivateForTargetContentIdentifierPredicate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.

## Declaration

```swift
@NSCopying var canActivateForTargetContentIdentifierPredicate: NSPredicate { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the tasks your scene can handle, if needed. UIKit evaluates your predicate against the [targetContentIdentifier](../uiapplicationshortcutitem/targetcontentidentifier.md) property of the object causing the activation of the scene. Many different objects contain target content identifiers, including [NSUserActivity](../../foundation/nsuseractivity.md), [UNNotificationContent](../../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](../uiapplicationshortcutitem.md).

UIKit must be able to evaluate your predicate’s conditions outside the scope of your app, so don’t include conditions that require dynamic evaluation. For example, don’t include key paths in your predicate and don’t create predicates that evaluate conditions using selectors or blocks. The default value of this property is a predicate that always evaluates to the value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying the conditions

- [prefersToActivateForTargetContentIdentifierPredicate](preferstoactivatefortargetcontentidentifierpredicate.md): The set of conditions for which UIKit chooses to activate this scene over others.

# canActivateForTargetContentIdentifierPredicate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Conditions for which UIKit can activate the scene if a better alternative doesn’t exist.

## Declaration

```objectivec
@property (nonatomic, copy) NSPredicate * canActivateForTargetContentIdentifierPredicate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the tasks your scene can handle, if needed. UIKit evaluates your predicate against the [targetContentIdentifier](../uiapplicationshortcutitem/targetcontentidentifier.md) property of the object causing the activation of the scene. Many different objects contain target content identifiers, including [NSUserActivity](../../foundation/nsuseractivity.md), [UNNotificationContent](../../usernotifications/unnotificationcontent.md), and [UIApplicationShortcutItem](../uiapplicationshortcutitem.md).

UIKit must be able to evaluate your predicate’s conditions outside the scope of your app, so don’t include conditions that require dynamic evaluation. For example, don’t include key paths in your predicate and don’t create predicates that evaluate conditions using selectors or blocks. The default value of this property is a predicate that always evaluates to the value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Specifying the conditions

- [prefersToActivateForTargetContentIdentifierPredicate](preferstoactivatefortargetcontentidentifierpredicate.md): The set of conditions for which UIKit chooses to activate this scene over others.
