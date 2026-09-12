> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakable](https://developer.apple.com/documentation/intents/inspeakable)

# INSpeakable (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Pronunciation hints for strings used in a spoken interface.

## Declaration

```swift
protocol INSpeakable : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [INSpeakable](inspeakable.md) protocol is adopted by the [INSpeakableString](inspeakablestring.md) class and used to provide pronunciation hints for strings spoken by Siri. You do not need to adopt this protocol in your own classes. Instead, create instances of the [INSpeakableString](inspeakablestring.md) class and use them when resolving parameters in your intent handlers.

## Topics

### Getting the Spoken Attributes

- [spokenPhrase](inspeakable/spokenphrase.md): The phrase identified by Siri.
- [pronunciationHint](inspeakable/pronunciationhint.md): A hint at how the spoken phrase is pronounced.

### Getting the Identifier

- [vocabularyIdentifier](inspeakable/vocabularyidentifier.md): The identifier associated with the string in your app’s custom vocabulary file.
- [identifier](inspeakable/identifier.md): Deprecated. The identifier associated with the string in your app’s custom vocabulary file.

### Getting Alternative Matches

- [alternativeSpeakableMatches](inspeakable/alternativespeakablematches.md): An array of alternative phrases that match the current phrase.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [INObject](inobject.md)
- [INPerson](inperson.md)
- [INRestaurantGuest](inrestaurantguest.md)
- [INRideDriver](inridedriver.md)
- [INSpeakableString](inspeakablestring.md)

## See Also

### String

- [INSpeakableString](inspeakablestring.md): A custom phrase to be resolved by an Intents extension.

# INSpeakable (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Pronunciation hints for strings used in a spoken interface.

## Declaration

```objectivec
@protocol INSpeakable <NSObject>
```

<a id="overview"></a>

## Overview

The [INSpeakable](inspeakable.md) protocol is adopted by the [INSpeakableString](inspeakablestring.md) class and used to provide pronunciation hints for strings spoken by Siri. You do not need to adopt this protocol in your own classes. Instead, create instances of the [INSpeakableString](inspeakablestring.md) class and use them when resolving parameters in your intent handlers.

## Topics

### Getting the Spoken Attributes

- [spokenPhrase](inspeakable/spokenphrase.md): The phrase identified by Siri.
- [pronunciationHint](inspeakable/pronunciationhint.md): A hint at how the spoken phrase is pronounced.

### Getting the Identifier

- [vocabularyIdentifier](inspeakable/vocabularyidentifier.md): The identifier associated with the string in your app’s custom vocabulary file.
- [identifier](inspeakable/identifier.md): Deprecated. The identifier associated with the string in your app’s custom vocabulary file.

### Getting Alternative Matches

- [alternativeSpeakableMatches](inspeakable/alternativespeakablematches.md): An array of alternative phrases that match the current phrase.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [INObject](inobject.md)
- [INPerson](inperson.md)
- [INSpeakableString](inspeakablestring.md)

## See Also

### String

- [INSpeakableString](inspeakablestring.md): A custom phrase to be resolved by an Intents extension.
