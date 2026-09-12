> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonsuggestiontype](https://developer.apple.com/documentation/intents/inpersonsuggestiontype)

# INPersonSuggestionType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating how to display the person’s identity.

## Declaration

```swift
enum INPersonSuggestionType
```

## Topics

### Constants

- [INPersonSuggestionType.none](inpersonsuggestiontype/none.md): No contact information to donate.
- [INPersonSuggestionType.socialProfile](inpersonsuggestiontype/socialprofile.md): A social media account.
- [INPersonSuggestionType.instantMessageAddress](inpersonsuggestiontype/instantmessageaddress.md): An instant messaging address.

### Initializers

- [init(rawValue:)](inpersonsuggestiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing suggestion details

- [isContactSuggestion](inperson/iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [suggestionType](inperson/suggestiontype.md): The type of contact information to donate with interactions.

# INPersonSuggestionType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating how to display the person’s identity.

## Declaration

```objectivec
enum INPersonSuggestionType : NSInteger;
```

## Topics

### Constants

- [INPersonSuggestionTypeNone](inpersonsuggestiontype/none.md): No contact information to donate.
- [INPersonSuggestionTypeSocialProfile](inpersonsuggestiontype/socialprofile.md): A social media account.
- [INPersonSuggestionTypeInstantMessageAddress](inpersonsuggestiontype/instantmessageaddress.md): An instant messaging address.

## See Also

### Accessing suggestion details

- [contactSuggestion](inperson/iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [suggestionType](inperson/suggestiontype.md): The type of contact information to donate with interactions.
