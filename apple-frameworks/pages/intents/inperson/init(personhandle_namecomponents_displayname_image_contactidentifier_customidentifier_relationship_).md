> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:relationship:)](https://developer.apple.com/documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:relationship:))

# init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a person with the specified name, contact, and relationship information.

## Declaration

```swift
convenience init(personHandle: INPersonHandle, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, contactIdentifier: String?, customIdentifier: String?, relationship: INPersonRelationship?)
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you use to identify people in your app.
- `relationship`: The relationship of this person to the current user.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

Use this method when creating person objects you plan to return as part of a response to Siri. Specify as much information as possible about the user. This method makes copies of the parameters instead of keeping the originals.

## See Also

### Creating a person

- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.

# initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a person with the specified name, contact, and relationship information.

## Declaration

```objectivec
- (instancetype) initWithPersonHandle:(INPersonHandle *) personHandle nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image contactIdentifier:(NSString *) contactIdentifier customIdentifier:(NSString *) customIdentifier relationship:(INPersonRelationship) relationship;
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you use to identify people in your app.
- `relationship`: The relationship of this person to the current user.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

Use this method when creating person objects you plan to return as part of a response to Siri. Specify as much information as possible about the user. This method makes copies of the parameters instead of keeping the originals.

## See Also

### Creating a person

- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.
