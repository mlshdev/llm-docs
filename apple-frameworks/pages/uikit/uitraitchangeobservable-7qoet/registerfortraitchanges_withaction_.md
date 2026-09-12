> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-7qoet/registerfortraitchanges:withaction:](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-7qoet/registerfortraitchanges:withaction:)

# registerForTraitChanges:withAction:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.

## Declaration

```objectivec
- (id<UITraitChangeRegistration>) registerForTraitChanges:(NSArray<Class<UITraitDefinition>> *) traits withAction:(SEL) action;
```

## Parameters

- `traits`: An array of traits to observe for changes.
- `action`: A selector identifying the method the system calls when one of the registered trait changes.

<a id="return-value"></a>

## Return Value

An opaque token you can use to stop observing trait changes by passing to [unregisterForTraitChanges(\_:)](../uitraitchangeobservable-67e94/unregisterfortraitchanges%28__%29.md). You don’t have to unregister your observations, and you can safely ignore this value.

<a id="Discussion"></a>

## Discussion

This is a convenience method for [registerForTraitChanges(\_:target:action:)](../uitraitchangeobservable-67e94/registerfortraitchanges%28__target_action_%29.md) when the object receiving the registration is the target of the action. For example, when you register for changes on `self`, the `target` is `self`.

The following example calls [setNeedsLayout](../uiview/setneedslayout%28%29.md) in response to changes to size traits:

```swift
let sizeTraits: [UITrait] = [UITraitVerticalSizeClass.self, UITraitHorizontalSizeClass.self]

// Register for size class changes on self, and invalidate the layout in response to changes.
registerForTraitChanges(sizeTraits, action: #selector(UIView.setNeedsLayout))
```

## See Also

### Observing trait changes

- [registerForTraitChanges:withHandler:](registerfortraitchanges_withhandler_.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges:withTarget:action:](registerfortraitchanges_withtarget_action_.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [unregisterForTraitChanges:](unregisterfortraitchanges_.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeHandler](../uitraitchangehandler.md)
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
