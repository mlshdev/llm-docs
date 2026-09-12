> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-67e94/registerfortraitchanges(_:target:action:)](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94/registerfortraitchanges(_:target:action:))

# registerForTraitChanges(\_:target:action:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.

## Declaration

```swift
@discardableResult @MainActor func registerForTraitChanges(_ traits: [UITrait], target: Any, action: Selector) -> any UITraitChangeRegistration
```

## Parameters

- `traits`: An array of traits to observe for changes.
- `target`: The object that receives the method call passed in the action parameter.
- `action`: A selector identifying the method the system calls when one of the registered trait changes.

<a id="return-value"></a>

## Return Value

An opaque token you can use to stop observing trait changes by passing to [unregisterForTraitChanges(\_:)](unregisterfortraitchanges%28__%29.md). You don’t have to unregister your observations, and you can safely ignore this value.

<a id="Discussion"></a>

## Discussion

The method specified by the selector can take zero, one, or two arguments. If the method takes one argument, the system passes the object whose trait collection is changing. If the method takes two arguments, the system passes the trait collection prior to the observed changes as the second argument.

The following example registers size class traits so that the system executes the closure when a size class trait changes in the view’s trait collection:

```swift
@objc func sizeClassChanged(view: UIView, previousTraitCollection: UITraitCollection) {
    // Perform invalidation in response to the size class changing.
}

let sizeTraits: [UITrait] = [UITraitVerticalSizeClass.self, UITraitHorizontalSizeClass.self]

view.registerForTraitChanges(sizeTraits, target: self, action: #selector(sizeClassChanged(view:
previousTraitCollection:)))

```

## See Also

### Observing trait changes

- [registerForTraitChanges(\_:action:)](registerfortraitchanges%28__action_%29.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges(\_:handler:)](registerfortraitchanges%28__handler_%29.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [unregisterForTraitChanges(\_:)](unregisterfortraitchanges%28__%29.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeObservable.TraitChangeHandler](traitchangehandler.md): A closure the system executes when observed traits change.
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
