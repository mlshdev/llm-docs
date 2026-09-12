> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-67e94/traitchangehandler](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94/traitchangehandler)

# UITraitChangeObservable.TraitChangeHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A closure the system executes when observed traits change.

## Declaration

```swift
typealias TraitChangeHandler<TraitEnvironment> = (TraitEnvironment, UITraitCollection) -> Void where TraitEnvironment : UITraitEnvironment
```

## Parameters

- `traitEnvironment`: The observed object containing the updated trait collection.
- `previousTraitCollection`: The trait collection prior to the changes that triggered the execution of the handler.

<a id="Discussion"></a>

## Discussion

Use [registerForTraitChanges(\_:handler:)](registerfortraitchanges%28__handler_%29.md) to register a list of traits to observe and a handler to execute.

If the closure captures a strong reference to the object receiving the registration, it creates a strong reference cycle. Use the `traitEnvironment` parameter to refer to the observed object inside the closure.

## See Also

### Observing trait changes

- [registerForTraitChanges(\_:action:)](registerfortraitchanges%28__action_%29.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges(\_:handler:)](registerfortraitchanges%28__handler_%29.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges(\_:target:action:)](registerfortraitchanges%28__target_action_%29.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [unregisterForTraitChanges(\_:)](unregisterfortraitchanges%28__%29.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
