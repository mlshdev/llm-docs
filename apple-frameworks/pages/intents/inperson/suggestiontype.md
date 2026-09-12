> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/suggestiontype](https://developer.apple.com/documentation/intents/inperson/suggestiontype)

# suggestionType (Swift)

**Framework:** Intents  
**Kind:** Instance Property

The type of contact information to donate with interactions.

## Declaration

```swift
var suggestionType: INPersonSuggestionType { get }
```

<a id="Discussion"></a>

## Discussion

When donating interactions involving a person, the system uses this property to determine how to surface the user’s identity. For example, an app might prefer to display the person’s social media profile name rather than their real name.

If you use the [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md) method to create the person object, interactions reflect the person’s name, instead of the name of a social media or instant messaging account.

## See Also

### Accessing suggestion details

- [isContactSuggestion](iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [INPersonSuggestionType](../inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.

# suggestionType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property

The type of contact information to donate with interactions.

## Declaration

```objectivec
@property (nonatomic, readonly) INPersonSuggestionType suggestionType;
```

```objectivec
@property (atomic, readonly) INPersonSuggestionType suggestionType;
```

<a id="Discussion"></a>

## Discussion

When donating interactions involving a person, the system uses this property to determine how to surface the user’s identity. For example, an app might prefer to display the person’s social media profile name rather than their real name.

If you use the [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md) method to create the person object, interactions reflect the person’s name, instead of the name of a social media or instant messaging account.

## See Also

### Accessing suggestion details

- [contactSuggestion](iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [INPersonSuggestionType](../inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.
