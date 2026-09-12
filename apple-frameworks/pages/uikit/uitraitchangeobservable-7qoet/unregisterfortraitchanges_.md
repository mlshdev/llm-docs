> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeobservable-7qoet/unregisterfortraitchanges:](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-7qoet/unregisterfortraitchanges:)

# unregisterForTraitChanges:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Tells the system to stop observing previously registered traits.

## Declaration

```objectivec
- (void) unregisterForTraitChanges:(id<UITraitChangeRegistration>) registration;
```

## Parameters

- `registration`: A token that identifies the registration, obtained from one of the trait registration method calls.

<a id="Discussion"></a>

## Discussion

Use this method if you want the system to stop observing trait changes for a previous registration. UIKit doesn’t require you to unregister for trait changes at the end of the view lifecycle. Unregister only if you need to dynamically change which traits you observe.

## See Also

### Observing trait changes

- [registerForTraitChanges:withAction:](registerfortraitchanges_withaction_.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges:withHandler:](registerfortraitchanges_withhandler_.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges:withTarget:action:](registerfortraitchanges_withtarget_action_.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [UITraitChangeHandler](../uitraitchangehandler.md)
- [UITraitChangeRegistration](../uitraitchangeregistration.md)
