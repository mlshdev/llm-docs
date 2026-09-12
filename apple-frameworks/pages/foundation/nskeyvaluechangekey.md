> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechangekey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey)

# NSKeyValueChangeKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The keys that can appear in the change dictionary.

## Declaration

```swift
struct NSKeyValueChangeKey
```

<a id="Discussion"></a>

## Discussion

These constants are used as keys in the change dictionary passed to [observeValue(forKeyPath:of:change:context:)](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

## Topics

### Type Properties

- [indexesKey](nskeyvaluechangekey/indexeskey.md): If the value of the [kindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChange.insertion](nskeyvaluechange/insertion.md), [NSKeyValueChange.removal](nskeyvaluechange/removal.md), or [NSKeyValueChange.replacement](nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [kindKey](nskeyvaluechangekey/kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [newKey](nskeyvaluechangekey/newkey.md): If the value of the [kindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChange.setting](nskeyvaluechange/setting.md), and [new](nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [notificationIsPriorKey](nskeyvaluechangekey/notificationispriorkey.md): If the [prior](nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [oldKey](nskeyvaluechangekey/oldkey.md): If the value of the [kindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChange.setting](nskeyvaluechange/setting.md), and [old](nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.

### Initializers

- [init(rawValue:)](nskeyvaluechangekey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [AsyncCharacterSequence](asynccharactersequence.md): An asynchronous sequence of characters.
- [AsyncLineSequence](asynclinesequence.md): An asynchronous sequence of lines of text.
- [AsyncUnicodeScalarSequence](asyncunicodescalarsequence.md): An asychronous sequence of Unicode scalar values.
- [Expression](expression.md)
- [NSAttributedStringFormattingContextKey](nsattributedstringformattingcontextkey.md): A type that represents a key in the formatting context dictionary.
- [NSKeyValueObservedChange](nskeyvalueobservedchange.md)
- [NSKeyValueOperator](nskeyvalueoperator.md): These constants define the available array operators. See [Using Collection Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/CollectionOperators.html) for more information.
- [PresentationIntent](presentationintent.md): A type that defines presentation intent for blocks of characters like paragraphs, lists, block quotes, and tables.

# NSKeyValueChangeKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The keys that can appear in the change dictionary.

## Declaration

```objectivec
typedef NSString * NSKeyValueChangeKey;
```

<a id="Discussion"></a>

## Discussion

These constants are used as keys in the change dictionary passed to [observeValueForKeyPath:ofObject:change:context:](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md).

## Topics

### Type Properties

- [NSKeyValueChangeIndexesKey](nskeyvaluechangekey/indexeskey.md): If the value of the [NSKeyValueChangeKindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChangeInsertion](nskeyvaluechange/insertion.md), [NSKeyValueChangeRemoval](nskeyvaluechange/removal.md), or [NSKeyValueChangeReplacement](nskeyvaluechange/replacement.md), the value of this key is an `NSIndexSet` object that contains the indexes of the inserted, removed, or replaced objects.
- [NSKeyValueChangeKindKey](nskeyvaluechangekey/kindkey.md): An `NSNumber` object that contains a value corresponding to one of the [NSKeyValueChange](nskeyvaluechange.md) enums, indicating what sort of change has occurred.
- [NSKeyValueChangeNewKey](nskeyvaluechangekey/newkey.md): If the value of the [NSKeyValueChangeKindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChangeSetting](nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionNew](nskeyvalueobservingoptions/new.md) was specified when the observer was registered, the value of this key is the new value for the attribute.
- [NSKeyValueChangeNotificationIsPriorKey](nskeyvaluechangekey/notificationispriorkey.md): If the [NSKeyValueObservingOptionPrior](nskeyvalueobservingoptions/prior.md) option was specified when the observer was registered this notification is sent prior to a change.
- [NSKeyValueChangeOldKey](nskeyvaluechangekey/oldkey.md): If the value of the [NSKeyValueChangeKindKey](nskeyvaluechangekey/kindkey.md) entry is [NSKeyValueChangeSetting](nskeyvaluechange/setting.md), and [NSKeyValueObservingOptionOld](nskeyvalueobservingoptions/old.md) was specified when the observer was registered, the value of this key is the value before the attribute was changed.

## See Also

### Type Aliases

- [NSAttributedStringFormattingContextKey](nsattributedstringformattingcontextkey.md): A type that represents a key in the formatting context dictionary.
- [NSKeyValueOperator](nskeyvalueoperator.md): These constants define the available array operators. See [Using Collection Operators](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/CollectionOperators.html) for more information.
