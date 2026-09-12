> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-67e94/registerfortraitchanges(_:action:)](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94/registerfortraitchanges(_:action:))

# registerForTraitChanges(\_:action:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.

## Declaration

```swift
@discardableResult @MainActor func registerForTraitChanges(_ traits: [UITrait], action: Selector) -> any UITraitChangeRegistration
```

## Parameters

- `traits`: An array of traits to observe for changes.
- `action`: A selector identifying the method the system calls when one of the registered trait changes.

<a id="return-value"></a>

## Return Value

An opaque token you can use to stop observing trait changes by passing to [unregisterForTraitChanges(\_:)](unregisterfortraitchanges%28__%29.md). You don’t have to unregister your observations, and you can safely ignore this value.

<a id="Discussion"></a>

## Discussion

This is a convenience method for [registerForTraitChanges(\_:target:action:)](registerfortraitchanges%28__target_action_%29.md) when the object receiving the registration is the target of the action. For example, when you register for changes on `self`, the `target` is `self`.

The following example calls [setNeedsLayout()](../uiview/setneedslayout%28%29.md) in response to changes to size traits:

```swift
let sizeTraits: [UITrait] = [UITraitVerticalSizeClass.self, UITraitHorizontalSizeClass.self]

// Register for size class changes on self, and invalidate the layout in response to changes.
registerForTraitChanges(sizeTraits, action: #selector(UIView.setNeedsLayout))
```

## See Also

### Observing trait changes

- [registerForTraitChanges(\_:handler:)](registerfortraitchanges%28__handler_%29.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges(\_:target:action:)](registerfortraitchanges%28__target_action_%29.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [unregisterForTraitChanges(\_:)](unregisterfortraitchanges%28__%29.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeObservable.TraitChangeHandler](traitchangehandler.md): A closure the system executes when observed traits change.
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
