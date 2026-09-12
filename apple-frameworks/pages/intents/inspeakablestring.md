> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakablestring](https://developer.apple.com/documentation/intents/inspeakablestring)

# INSpeakableString (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.2+

A custom phrase to be resolved by an Intents extension.

## Declaration

```swift
class INSpeakableString
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

When creating your Intents extension, you can define custom vocabulary for some types of intents. For example, a workout app may provide a custom `AppIntentVocabulary.plist` file with the names of standard workouts that are shared by all users of the app. In places where those terms might be used, the intent object contains an [INSpeakableString](inspeakablestring.md) object.

Use the contents of an [INSpeakableString](inspeakablestring.md) object to resolve the specified term during the handling of an intent. If the user spoke a term that is defined in your `AppIntentVocabulary.plist` file, Siri includes the identifier of that term in the string’s [identifier](inspeakable/identifier.md) property. For unrecognized terms, the identifier is `nil`.

## Topics

### Initializing a Speakable String

- [init(spokenPhrase:)](inspeakablestring/init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [init(vocabularyIdentifier:spokenPhrase:pronunciationHint:)](inspeakablestring/init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.
- [init(identifier:spokenPhrase:pronunciationHint:)](inspeakablestring/init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.

### Initializers

- [init(coder:)](inspeakablestring/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INSpeakable](inspeakable.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### String

- [INSpeakable](inspeakable.md): Pronunciation hints for strings used in a spoken interface.

# INSpeakableString (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.2+

A custom phrase to be resolved by an Intents extension.

## Declaration

```objectivec
@interface INSpeakableString : NSObject
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

When creating your Intents extension, you can define custom vocabulary for some types of intents. For example, a workout app may provide a custom `AppIntentVocabulary.plist` file with the names of standard workouts that are shared by all users of the app. In places where those terms might be used, the intent object contains an [INSpeakableString](inspeakablestring.md) object.

Use the contents of an [INSpeakableString](inspeakablestring.md) object to resolve the specified term during the handling of an intent. If the user spoke a term that is defined in your `AppIntentVocabulary.plist` file, Siri includes the identifier of that term in the string’s [identifier](inspeakable/identifier.md) property. For unrecognized terms, the identifier is `nil`.

## Topics

### Initializing a Speakable String

- [initWithSpokenPhrase:](inspeakablestring/init%28spokenphrase_%29.md): Initializes the string with the specified phrase.
- [initWithVocabularyIdentifier:spokenPhrase:pronunciationHint:](inspeakablestring/init%28vocabularyidentifier_spokenphrase_pronunciationhint_%29.md): Initializes the string with a phrase from your app’s vocabulary.
- [initWithIdentifier:spokenPhrase:pronunciationHint:](inspeakablestring/init%28identifier_spokenphrase_pronunciationhint_%29.md): Deprecated. Initializes the string with the specified identifier and phrase information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [INSpeakable](inspeakable.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### String

- [INSpeakable](inspeakable.md): Pronunciation hints for strings used in a spoken interface.
