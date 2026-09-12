> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/handler](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/handler)

# UIAccessibilityCustomAction.Handler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure type that defines a handler to perform for an action.

## Declaration

```swift
@MainActor typealias Handler = (UIAccessibilityCustomAction) -> Bool
```

## See Also

### Actions

- [UIAccessibilityAction](../../objectivec/uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityCustomAction](../uiaccessibilitycustomaction.md): A custom action to perform on an accessible object.
- [Delivering an exceptional accessibility experience](../../accessibility/delivering_an_exceptional_accessibility_experience.md): Make improvements to your app’s interaction model to support assistive technologies such as VoiceOver.

# UIAccessibilityCustomActionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure type that defines a handler to perform for an action.

## Declaration

```objectivec
typedef _Bool (^)(UIAccessibilityCustomAction *) UIAccessibilityCustomActionHandler;
```

## See Also

### Actions

- [UIAccessibilityAction](../../objectivec/uiaccessibilityaction.md): A set of methods that accessibility elements can use to support specific actions.
- [UIAccessibilityCustomAction](../uiaccessibilitycustomaction.md): A custom action to perform on an accessible object.
- [Delivering an exceptional accessibility experience](../../accessibility/delivering_an_exceptional_accessibility_experience.md): Make improvements to your app’s interaction model to support assistive technologies such as VoiceOver.
