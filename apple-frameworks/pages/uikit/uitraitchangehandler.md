> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangehandler](https://developer.apple.com/documentation/uikit/uitraitchangehandler)

# UITraitChangeHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
typedef void (^)(__kindof id<UITraitEnvironment>, UITraitCollection *) UITraitChangeHandler;
```

## See Also

### Observing trait changes

- [registerForTraitChanges:withAction:](uitraitchangeobservable-7qoet/registerfortraitchanges_withaction_.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges:withHandler:](uitraitchangeobservable-7qoet/registerfortraitchanges_withhandler_.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges:withTarget:action:](uitraitchangeobservable-7qoet/registerfortraitchanges_withtarget_action_.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [unregisterForTraitChanges:](uitraitchangeobservable-7qoet/unregisterfortraitchanges_.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeRegistration](uitraitchangeregistration.md)
