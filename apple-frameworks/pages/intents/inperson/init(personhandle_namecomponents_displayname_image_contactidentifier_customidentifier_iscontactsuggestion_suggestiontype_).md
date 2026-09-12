> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:iscontactsuggestion:suggestiontype:)](https://developer.apple.com/documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:iscontactsuggestion:suggestiontype:))

# init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a person with information Siri can use to suggestion the person at appropriate times.

## Declaration

```swift
convenience init(personHandle: INPersonHandle, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, contactIdentifier: String?, customIdentifier: String?, isContactSuggestion: Bool, suggestionType: INPersonSuggestionType)
```

## See Also

### Creating a person

- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.

# initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a person with information Siri can use to suggestion the person at appropriate times.

## Declaration

```objectivec
- (instancetype) initWithPersonHandle:(INPersonHandle *) personHandle nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image contactIdentifier:(NSString *) contactIdentifier customIdentifier:(NSString *) customIdentifier isContactSuggestion:(BOOL) isContactSuggestion suggestionType:(INPersonSuggestionType) suggestionType;
```

## See Also

### Creating a person

- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
