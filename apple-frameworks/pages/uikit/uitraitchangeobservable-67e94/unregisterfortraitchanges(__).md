> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-67e94/unregisterfortraitchanges(_:)](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94/unregisterfortraitchanges(_:))

# unregisterForTraitChanges(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Tells the system to stop observing previously registered traits.

## Declaration

```swift
@MainActor func unregisterForTraitChanges(_ registration: any UITraitChangeRegistration)
```

## Parameters

- `registration`: A token that identifies the registration, obtained from one of the trait registration method calls.

## Mentioned In

- [Adapting your app when traits change](../adapting-your-app-when-traits-change.md)

<a id="Discussion"></a>

## Discussion

Use this method if you want the system to stop observing trait changes for a previous registration. UIKit doesn’t require you to unregister for trait changes at the end of the view lifecycle. Unregister only if you need to dynamically change which traits you observe.

## See Also

### Observing trait changes

- [registerForTraitChanges(\_:action:)](registerfortraitchanges%28__action_%29.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges(\_:handler:)](registerfortraitchanges%28__handler_%29.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges(\_:target:action:)](registerfortraitchanges%28__target_action_%29.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [UITraitChangeObservable.TraitChangeHandler](traitchangehandler.md): A closure the system executes when observed traits change.
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
