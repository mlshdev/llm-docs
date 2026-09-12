> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechangekey/notificationispriorkey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/notificationispriorkey)

# notificationIsPriorKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If the [prior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.

## Declaration

```swift
static let notificationIsPriorKey: NSKeyValueChangeKey
```

<a id="Discussion"></a>

## Discussion

The change dictionary contains an [notificationIsPriorKey](notificationispriorkey.md) entry whose value is an `NSNumber` object that contains the Boolean value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Type Properties

- [indexesKey](indexeskey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.insertion](../nskeyvaluechange/insertion.md), [NSKeyValueChange.removal](../nskeyvaluechange/removal.md), or [NSKeyValueChange.replacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [kindKey](kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [newKey](newkey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [new](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [oldKey](oldkey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [old](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.

# NSKeyValueChangeNotificationIsPriorKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If the [NSKeyValueObservingOptionPrior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.

## Declaration

```objectivec
extern NSKeyValueChangeKey const NSKeyValueChangeNotificationIsPriorKey;
```

<a id="Discussion"></a>

## Discussion

The change dictionary contains an [NSKeyValueChangeNotificationIsPriorKey](notificationispriorkey.md) entry whose value is an `NSNumber` object that contains the Boolean value [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Type Properties

- [NSKeyValueChangeIndexesKey](indexeskey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeInsertion](../nskeyvaluechange/insertion.md), [NSKeyValueChangeRemoval](../nskeyvaluechange/removal.md), or [NSKeyValueChangeReplacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [NSKeyValueChangeKindKey](kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [NSKeyValueChangeNewKey](newkey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionNew](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [NSKeyValueChangeOldKey](oldkey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionOld](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.
