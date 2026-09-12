> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvalueobservingoptions/initial](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/initial)

# initial (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.

## Declaration

```swift
static var initial: NSKeyValueObservingOptions { get }
```

<a id="Discussion"></a>

## Discussion

The change dictionary in the notification will always contain an [newKey](../nskeyvaluechangekey/newkey.md) entry if [new](new.md) is also specified but will never contain an [oldKey](../nskeyvaluechangekey/oldkey.md) entry. (In an initial notification the current value of the observed property may be old, but it’s new to the observer.) You can use this option instead of explicitly invoking, at the same time, code that is also invoked by the observer’s [observeValue(forKeyPath:of:change:context:)](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md) method. When this option is used with[addObserver(\_:forKeyPath:options:context:)](../../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md) a notification will be sent for each indexed object to which the observer is being added.

## See Also

### Constants

- [new](new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [old](old.md): Indicates that the change dictionary should contain the old attribute value, if applicable.
- [prior](prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.

# NSKeyValueObservingOptionInitial (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.

## Declaration

```objectivec
NSKeyValueObservingOptionInitial
```

<a id="Discussion"></a>

## Discussion

The change dictionary in the notification will always contain an [NSKeyValueChangeNewKey](../nskeyvaluechangekey/newkey.md) entry if [NSKeyValueObservingOptionNew](new.md) is also specified but will never contain an [NSKeyValueChangeOldKey](../nskeyvaluechangekey/oldkey.md) entry. (In an initial notification the current value of the observed property may be old, but it’s new to the observer.) You can use this option instead of explicitly invoking, at the same time, code that is also invoked by the observer’s [observeValueForKeyPath:ofObject:change:context:](../../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md) method. When this option is used with[addObserver:forKeyPath:options:context:](../../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md) a notification will be sent for each indexed object to which the observer is being added.

## See Also

### Constants

- [NSKeyValueObservingOptionNew](new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [NSKeyValueObservingOptionOld](old.md): Indicates that the change dictionary should contain the old attribute value, if applicable.
- [NSKeyValueObservingOptionPrior](prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.
