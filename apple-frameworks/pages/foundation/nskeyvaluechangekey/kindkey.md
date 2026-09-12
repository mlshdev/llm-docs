> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechangekey/kindkey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/kindkey)

# kindKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.

## Declaration

```swift
static let kindKey: NSKeyValueChangeKey
```

<a id="Discussion"></a>

## Discussion

A value of [NSKeyValueChange.setting](../nskeyvaluechange/setting.md) indicates that the observed object has received a [setValue(\_:forKey:)](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) message, or that the key-value-coding-compliant set method for the key has been invoked, or that one of the [willChangeValue(forKey:)](../../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) or [didChangeValue(forKey:)](../../objectivec/nsobject-swift.class/didchangevalue%28forkey_%29.md) methods has otherwise been invoked.

A value of [NSKeyValueChange.insertion](../nskeyvaluechange/insertion.md), [NSKeyValueChange.removal](../nskeyvaluechange/removal.md), or [NSKeyValueChange.replacement](../nskeyvaluechange/replacement.md) indicates that mutating messages have been sent a key-value observing compliant collection proxy, or that one of the key-value-coding-compliant collection mutation methods for the key has been invoked, or a collection will change or did change method has been otherwise been invoked.

You can use the [uintValue](../nsnumber/uintvalue.md) method on the `NSNumber` object to retrieve the value of the change kind.

## See Also

### Type Properties

- [indexesKey](indexeskey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.insertion](../nskeyvaluechange/insertion.md), [NSKeyValueChange.removal](../nskeyvaluechange/removal.md), or [NSKeyValueChange.replacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [newKey](newkey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [new](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [notificationIsPriorKey](notificationispriorkey.md): If the [prior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [oldKey](oldkey.md): If the value of the [kindKey](kindkey.md) entry is [NSKeyValueChange.setting](../nskeyvaluechange/setting.md), and [old](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.

# NSKeyValueChangeKindKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](../nskeyvaluechange.md) enums, indicating what sort of change has occurred.

## Declaration

```objectivec
extern NSKeyValueChangeKey const NSKeyValueChangeKindKey;
```

<a id="Discussion"></a>

## Discussion

A value of [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md) indicates that the observed object has received a [setValue:forKey:](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md) message, or that the key-value-coding-compliant set method for the key has been invoked, or that one of the [willChangeValueForKey:](../../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) or [didChangeValueForKey:](../../objectivec/nsobject-swift.class/didchangevalue%28forkey_%29.md) methods has otherwise been invoked.

A value of [NSKeyValueChangeInsertion](../nskeyvaluechange/insertion.md), [NSKeyValueChangeRemoval](../nskeyvaluechange/removal.md), or [NSKeyValueChangeReplacement](../nskeyvaluechange/replacement.md) indicates that mutating messages have been sent a key-value observing compliant collection proxy, or that one of the key-value-coding-compliant collection mutation methods for the key has been invoked, or a collection will change or did change method has been otherwise been invoked.

You can use the [unsignedIntegerValue](../nsnumber/uintvalue.md) method on the `NSNumber` object to retrieve the value of the change kind.

## See Also

### Type Properties

- [NSKeyValueChangeIndexesKey](indexeskey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeInsertion](../nskeyvaluechange/insertion.md), [NSKeyValueChangeRemoval](../nskeyvaluechange/removal.md), or [NSKeyValueChangeReplacement](../nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [NSKeyValueChangeNewKey](newkey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionNew](../nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [NSKeyValueChangeNotificationIsPriorKey](notificationispriorkey.md): If the [NSKeyValueObservingOptionPrior](../nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [NSKeyValueChangeOldKey](oldkey.md): If the value of the [NSKeyValueChangeKindKey](kindkey.md) entry is [NSKeyValueChangeSetting](../nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionOld](../nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.
