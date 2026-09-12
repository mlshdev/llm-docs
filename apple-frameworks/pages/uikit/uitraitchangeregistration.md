> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitchangeregistration](https://developer.apple.com/documentation/uikit/uitraitchangeregistration)

# UITraitChangeRegistration (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
@MainActor protocol UITraitChangeRegistration : NSCopying, NSObjectProtocol
```

## Mentioned In

- [Adapting your app when traits change](adapting-your-app-when-traits-change.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Observing trait changes

- [registerForTraitChanges(\_:action:)](uitraitchangeobservable-67e94/registerfortraitchanges%28__action_%29.md): Registers a list of traits to observe, and calls a method on the receiving object when one of the observed traits changes.
- [registerForTraitChanges(\_:handler:)](uitraitchangeobservable-67e94/registerfortraitchanges%28__handler_%29.md): Registers a list of traits to observe and a closure to execute when one of the observed traits changes.
- [registerForTraitChanges(\_:target:action:)](uitraitchangeobservable-67e94/registerfortraitchanges%28__target_action_%29.md): Registers a list of traits to observe, and calls a method on the specified target object when one of the observed traits changes.
- [unregisterForTraitChanges(\_:)](uitraitchangeobservable-67e94/unregisterfortraitchanges%28__%29.md): Tells the system to stop observing previously registered traits.
- [UITraitChangeObservable.TraitChangeHandler](uitraitchangeobservable-67e94/traitchangehandler.md): A closure the system executes when observed traits change.

# UITraitChangeRegistration (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol UITraitChangeRegistration <NSObject, NSCopying>
```

## Mentioned In

- [Adapting your app when traits change](adapting-your-app-when-traits-change.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
