> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/sirimatches](https://developer.apple.com/documentation/intents/inperson/sirimatches)

# siriMatches (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The list of matches Siri provides for you to resolve or disambiguate.

## Declaration

```swift
var siriMatches: [INPerson]? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

When attempting to resolve the recipient of a message, use this property to determine how to respond:

- If the array contains a single match and your app successfully identifies that person by their [contactIdentifier](contactidentifier.md) or [customIdentifier](customidentifier.md), use the [success(with:)](../inpersonresolutionresult/success%28with_%29.md) method to resolve the recipient.
- If the array contains multiple people and those people each have distinct [contactIdentifier](contactidentifier.md) or [customIdentifier](customidentifier.md) values, ignore any your app can’t identify and then respond according to the number of remaining matches. For example, if there are still two or more matches, use the [disambiguation(with:)](../inpersonresolutionresult/disambiguation%28with_%29.md) method to ask the person interacting with Siri to choose.
- If the array contains multiple people and they all have the same [contactIdentifier](contactidentifier.md), disambiguate using [personHandle](personhandle.md) instead. If your app doesn’t use handles, simply pass any match to the [success(with:)](../inpersonresolutionresult/success%28with_%29.md) method.
- If the array is empty or the property is `nil`, search your app’s contacts for people matching those in the [recipients](../insendmessageintent/recipients.md) property of [INSendMessageIntent](../insendmessageintent.md) instead. Use the resolution method that best describes the outcome of that search.

# siriMatches (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The list of matches Siri provides for you to resolve or disambiguate.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * siriMatches;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * siriMatches;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

When attempting to resolve the recipient of a message, use this property to determine how to respond:

- If the array contains a single match and your app successfully identifies that person by their [contactIdentifier](contactidentifier.md) or [customIdentifier](customidentifier.md), use the [successWithResolvedPerson:](../inpersonresolutionresult/success%28with_%29.md) method to resolve the recipient.
- If the array contains multiple people and those people each have distinct [contactIdentifier](contactidentifier.md) or [customIdentifier](customidentifier.md) values, ignore any your app can’t identify and then respond according to the number of remaining matches. For example, if there are still two or more matches, use the [disambiguationWithPeopleToDisambiguate:](../inpersonresolutionresult/disambiguation%28with_%29.md) method to ask the person interacting with Siri to choose.
- If the array contains multiple people and they all have the same [contactIdentifier](contactidentifier.md), disambiguate using [personHandle](personhandle.md) instead. If your app doesn’t use handles, simply pass any match to the [successWithResolvedPerson:](../inpersonresolutionresult/success%28with_%29.md) method.
- If the array is empty or the property is `nil`, search your app’s contacts for people matching those in the [recipients](../insendmessageintent/recipients.md) property of [INSendMessageIntent](../insendmessageintent.md) instead. Use the resolution method that best describes the outcome of that search.
