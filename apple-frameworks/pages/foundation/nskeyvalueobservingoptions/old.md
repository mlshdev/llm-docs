> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvalueobservingoptions/old](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old)

# old (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the change dictionary should contain the old attribute value, if applicable.

## Declaration

```swift
static var old: NSKeyValueObservingOptions { get }
```

## See Also

### Constants

- [new](new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [initial](initial.md): If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.
- [prior](prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.

# NSKeyValueObservingOptionOld (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the change dictionary should contain the old attribute value, if applicable.

## Declaration

```objectivec
NSKeyValueObservingOptionOld
```

## See Also

### Constants

- [NSKeyValueObservingOptionNew](new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [NSKeyValueObservingOptionInitial](initial.md): If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.
- [NSKeyValueObservingOptionPrior](prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.
