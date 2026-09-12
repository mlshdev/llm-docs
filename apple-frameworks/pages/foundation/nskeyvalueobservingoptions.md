> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyvalueobservingoptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions)

# NSKeyValueObservingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values that can be returned in a change dictionary.

## Declaration

```swift
struct NSKeyValueObservingOptions
```

<a id="overview"></a>

## Overview

These constants are passed to [addObserver(\_:forKeyPath:options:context:)](../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md) and determine the values that are returned as part of the change dictionary passed to an [observeValue(forKeyPath:of:change:context:)](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md). You can pass `0` if you require no change dictionary values.

## Topics

### Constants

- [new](nskeyvalueobservingoptions/new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [old](nskeyvalueobservingoptions/old.md): Indicates that the change dictionary should contain the old attribute value, if applicable.
- [initial](nskeyvalueobservingoptions/initial.md): If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.
- [prior](nskeyvalueobservingoptions/prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.

### Initializers

- [init(rawValue:)](nskeyvalueobservingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [NSGrammaticalCase](nsgrammaticalcase.md)
- [NSGrammaticalDefiniteness](nsgrammaticaldefiniteness.md)
- [NSGrammaticalDetermination](nsgrammaticaldetermination.md)
- [NSGrammaticalPerson](nsgrammaticalperson.md)
- [NSGrammaticalPronounType](nsgrammaticalpronountype.md)
- [NSKeyValueChange](nskeyvaluechange.md): The kinds of changes that can be observed.
- [NSKeyValueSetMutationKind](nskeyvaluesetmutationkind.md)

# NSKeyValueObservingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values that can be returned in a change dictionary.

## Declaration

```objectivec
enum NSKeyValueObservingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are passed to [addObserver:forKeyPath:options:context:](../objectivec/nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md) and determine the values that are returned as part of the change dictionary passed to an [observeValueForKeyPath:ofObject:change:context:](../objectivec/nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md). You can pass `0` if you require no change dictionary values.

## Topics

### Constants

- [NSKeyValueObservingOptionNew](nskeyvalueobservingoptions/new.md): Indicates that the change dictionary should provide the new attribute value, if applicable.
- [NSKeyValueObservingOptionOld](nskeyvalueobservingoptions/old.md): Indicates that the change dictionary should contain the old attribute value, if applicable.
- [NSKeyValueObservingOptionInitial](nskeyvalueobservingoptions/initial.md): If specified, a notification should be sent to the observer immediately, before the observer registration method even returns.
- [NSKeyValueObservingOptionPrior](nskeyvalueobservingoptions/prior.md): Whether separate notifications should be sent to the observer before and after each change, instead of a single notification after the change.

## See Also

### Enumerations

- [NSGrammaticalCase](nsgrammaticalcase.md)
- [NSGrammaticalDefiniteness](nsgrammaticaldefiniteness.md)
- [NSGrammaticalDetermination](nsgrammaticaldetermination.md)
- [NSGrammaticalPerson](nsgrammaticalperson.md)
- [NSGrammaticalPronounType](nsgrammaticalpronountype.md)
- [NSKeyValueChange](nskeyvaluechange.md): The kinds of changes that can be observed.
- [NSKeyValueSetMutationKind](nskeyvaluesetmutationkind.md)
- [NSPresentationIntentKind](nspresentationintentkind.md): An enumeration of intended display styles for blocks of text like paragraphs, lists, and code blocks.
