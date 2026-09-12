> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspellserver](https://developer.apple.com/documentation/foundation/nsspellserver)

# NSSpellServer (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A server that your app uses to provide a spell checker service to other apps running in the system.

## Declaration

```swift
class NSSpellServer
```

<a id="overview"></a>

## Overview

A **service provider** is an application that declares its availability in a standard way, so that any other applications that wish to use it can do so. If you build a spelling checker that makes use of the [NSSpellServer](nsspellserver.md) class and list it as an available service, then users of any application that makes use of [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) or includes a Services menu will see your spelling checker as one of the available dictionaries.

## Topics

### Configuring Spelling Servers

- [delegate](nsspellserver/delegate.md): Returns the receiver’s delegate.

### Providing Spelling Services

- [registerLanguage(\_:byVendor:)](nsspellserver/registerlanguage%28__byvendor_%29.md): Notifies the receiver of a language your spelling checker can check.
- [run()](nsspellserver/run%28%29.md): Causes the receiver to start listening for spell-checking requests.

### Managing the Spell-Checking Process

- [isWord(inUserDictionaries:caseSensitive:)](nsspellserver/isword%28inuserdictionaries_casesensitive_%29.md): Indicates whether a given word is in the user’s list of learned words or the document’s list of words to ignore.

### Constants

- [Grammatical-Analysis Details](grammatical-analysis-details.md): These constants are used as the keys in the outDetails dictionaries returned by [NSSpellServer](nsspellserver.md) and [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](https://developer.apple.com/documentation/appkit/nsspellchecker/checkgrammar%28of:startingat:language:wrap:inspelldocumentwithtag:details:%29) ([NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker)).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spelling and Grammar

- [NSSpellServerDelegate](nsspellserverdelegate.md): The optional methods implemented by the delegate of a spell server.

# NSSpellServer (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A server that your app uses to provide a spell checker service to other apps running in the system.

## Declaration

```objectivec
@interface NSSpellServer : NSObject
```

<a id="overview"></a>

## Overview

A **service provider** is an application that declares its availability in a standard way, so that any other applications that wish to use it can do so. If you build a spelling checker that makes use of the [NSSpellServer](nsspellserver.md) class and list it as an available service, then users of any application that makes use of [NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker) or includes a Services menu will see your spelling checker as one of the available dictionaries.

## Topics

### Configuring Spelling Servers

- [delegate](nsspellserver/delegate.md): Returns the receiver’s delegate.

### Providing Spelling Services

- [registerLanguage:byVendor:](nsspellserver/registerlanguage%28__byvendor_%29.md): Notifies the receiver of a language your spelling checker can check.
- [run](nsspellserver/run%28%29.md): Causes the receiver to start listening for spell-checking requests.

### Managing the Spell-Checking Process

- [isWordInUserDictionaries:caseSensitive:](nsspellserver/isword%28inuserdictionaries_casesensitive_%29.md): Indicates whether a given word is in the user’s list of learned words or the document’s list of words to ignore.

### Constants

- [Grammatical-Analysis Details](grammatical-analysis-details.md): These constants are used as the keys in the outDetails dictionaries returned by [NSSpellServer](nsspellserver.md) and [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](https://developer.apple.com/documentation/appkit/nsspellchecker/checkgrammar%28of:startingat:language:wrap:inspelldocumentwithtag:details:%29) ([NSSpellChecker](https://developer.apple.com/documentation/appkit/nsspellchecker)).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spelling and Grammar

- [NSSpellServerDelegate](nsspellserverdelegate.md): The optional methods implemented by the delegate of a spell server.
