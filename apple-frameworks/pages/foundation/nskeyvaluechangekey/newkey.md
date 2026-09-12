> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechangekey/newkey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/newkey)

# newKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [new](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.

## Declaration

```swift
static let newKey: NSKeyValueChangeKey
```

<a id="Discussion"></a>

## Discussion

For [NSKeyValueChange.insertion](../nskeyvaluechange/insertion.md) or [NSKeyValueChange.replacement](../nskeyvaluechange/replacement.md), if [new](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value for this key is an `NSArray` instance that contains the objects that have been inserted or replaced other objects, respectively.

## See Also

### Type Properties

- [indexesKey](indexeskey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.insertion](../nskeyvaluechange/insertion.md), [NSKeyValueChange.removal](../nskeyvaluechange/removal.md), or [NSKeyValueChange.replacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [kindKey](kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [notificationIsPriorKey](notificationispriorkey.md): If the [prior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [oldKey](oldkey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [old](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.

# NSKeyValueChangeNewKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionNew](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.

## Declaration

```objectivec
extern NSKeyValueChangeKey const NSKeyValueChangeNewKey;
```

<a id="Discussion"></a>

## Discussion

For [NSKeyValueChangeInsertion](../nskeyvaluechange/insertion.md) or [NSKeyValueChangeReplacement](../nskeyvaluechange/replacement.md), if [NSKeyValueObservingOptionNew](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value for this key is an `NSArray` instance that contains the objects that have been inserted or replaced other objects, respectively.

## See Also

### Type Properties

- [NSKeyValueChangeIndexesKey](indexeskey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeInsertion](../nskeyvaluechange/insertion.md), [NSKeyValueChangeRemoval](../nskeyvaluechange/removal.md), or [NSKeyValueChangeReplacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [NSKeyValueChangeKindKey](kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [NSKeyValueChangeNotificationIsPriorKey](notificationispriorkey.md): If the [NSKeyValueObservingOptionPrior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [NSKeyValueChangeOldKey](oldkey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionOld](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.
