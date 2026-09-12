> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/iscontactsuggestion](https://developer.apple.com/documentation/intents/inperson/iscontactsuggestion)

# isContactSuggestion (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the person is a contact suggestion.

## Declaration

```swift
var isContactSuggestion: Bool { get }
```

## See Also

### Accessing suggestion details

- [suggestionType](suggestiontype.md): The type of contact information to donate with interactions.
- [INPersonSuggestionType](../inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.

# contactSuggestion (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the person is a contact suggestion.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContactSuggestion) BOOL contactSuggestion;
```

```objectivec
@property (atomic, readonly, getter=isContactSuggestion) BOOL contactSuggestion;
```

## See Also

### Accessing suggestion details

- [suggestionType](suggestiontype.md): The type of contact information to donate with interactions.
- [INPersonSuggestionType](../inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.
