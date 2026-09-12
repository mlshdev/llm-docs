> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvaluechange](https://developer.apple.com/documentation/foundation/nskeyvaluechange)

# NSKeyValueChange (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The kinds of changes that can be observed.

## Declaration

```swift
enum NSKeyValueChange
```

<a id="overview"></a>

## Overview

These constants are returned as the value for a [kindKey](nskeyvaluechangekey/kindkey.md) key in the change dictionary passed to [observeValue(forKeyPath:of:change:context:)](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md) indicating the type of change made.

## Topics

### Constants

- [NSKeyValueChange.setting](nskeyvaluechange/setting.md): Indicates that the value of the observed key path was set to a new value. This change can occur when observing an attribute of an object, as well as properties that specify to-one and to-many relationships.
- [NSKeyValueChange.insertion](nskeyvaluechange/insertion.md): Indicates that an object has been inserted into the to-many relationship that is being observed.
- [NSKeyValueChange.removal](nskeyvaluechange/removal.md): Indicates that an object has been removed from the to-many relationship that is being observed.
- [NSKeyValueChange.replacement](nskeyvaluechange/replacement.md): Indicates that an object has been replaced in the to-many relationship that is being observed.

### Initializers

- [init(rawValue:)](nskeyvaluechange/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSGrammaticalCase](nsgrammaticalcase.md)
- [NSGrammaticalDefiniteness](nsgrammaticaldefiniteness.md)
- [NSGrammaticalDetermination](nsgrammaticaldetermination.md)
- [NSGrammaticalPerson](nsgrammaticalperson.md)
- [NSGrammaticalPronounType](nsgrammaticalpronountype.md)
- [NSKeyValueObservingOptions](nskeyvalueobservingoptions.md): The values that can be returned in a change dictionary.
- [NSKeyValueSetMutationKind](nskeyvaluesetmutationkind.md)

# NSKeyValueChange (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The kinds of changes that can be observed.

## Declaration

```objectivec
enum NSKeyValueChange : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are returned as the value for a [NSKeyValueChangeKindKey](nskeyvaluechangekey/kindkey.md) key in the change dictionary passed to [observeValueForKeyPath:ofObject:change:context:](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md) indicating the type of change made.

## Topics

### Constants

- [NSKeyValueChangeSetting](nskeyvaluechange/setting.md): Indicates that the value of the observed key path was set to a new value. This change can occur when observing an attribute of an object, as well as properties that specify to-one and to-many relationships.
- [NSKeyValueChangeInsertion](nskeyvaluechange/insertion.md): Indicates that an object has been inserted into the to-many relationship that is being observed.
- [NSKeyValueChangeRemoval](nskeyvaluechange/removal.md): Indicates that an object has been removed from the to-many relationship that is being observed.
- [NSKeyValueChangeReplacement](nskeyvaluechange/replacement.md): Indicates that an object has been replaced in the to-many relationship that is being observed.

## See Also

### Enumerations

- [NSGrammaticalCase](nsgrammaticalcase.md)
- [NSGrammaticalDefiniteness](nsgrammaticaldefiniteness.md)
- [NSGrammaticalDetermination](nsgrammaticaldetermination.md)
- [NSGrammaticalPerson](nsgrammaticalperson.md)
- [NSGrammaticalPronounType](nsgrammaticalpronountype.md)
- [NSKeyValueObservingOptions](nskeyvalueobservingoptions.md): The values that can be returned in a change dictionary.
- [NSKeyValueSetMutationKind](nskeyvaluesetmutationkind.md)
- [NSPresentationIntentKind](nspresentationintentkind.md): An enumeration of intended display styles for blocks of text like paragraphs, lists, and code blocks.
