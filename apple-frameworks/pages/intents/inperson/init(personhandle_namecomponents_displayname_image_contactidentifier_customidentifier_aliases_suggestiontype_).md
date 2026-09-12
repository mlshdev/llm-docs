> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:aliases:suggestiontype:)](https://developer.apple.com/documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:aliases:suggestiontype:))

# init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer

Creates a person with the specified name, contact, and alias information.

## Declaration

```swift
convenience init(personHandle: INPersonHandle, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, contactIdentifier: String?, customIdentifier: String?, aliases: [INPersonHandle]?, suggestionType: INPersonSuggestionType)
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you can use to identify people in your app.
- `aliases`: An array of [INPersonHandle](../inpersonhandle.md) objects containing alternate ways of identifying the user.
- `suggestionType`: The contact information to surface in interactions involving the user. Use this property to identify a user by their social media account name or instant messaging address, instead of by their actual name.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create person objects with additional information such as email addresses or phone numbers. This method also lets you suggest how you want to identify the person when donating interactions to the system. For example, you might ask the system to identify the user by their social media account name instead of by their actual name.

Specify as much information as possible about the user. This method makes copies of the `personHandle`, `nameComponents`, `displayName`, `image`, `contactIdentifier`, `customIdentifier`, and `aliases` parameters instead of keeping the originals.

## See Also

### Creating a person

- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.

# initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method

Creates a person with the specified name, contact, and alias information.

## Declaration

```objectivec
- (instancetype) initWithPersonHandle:(INPersonHandle *) personHandle nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image contactIdentifier:(NSString *) contactIdentifier customIdentifier:(NSString *) customIdentifier aliases:(NSArray<INPersonHandle *> *) aliases suggestionType:(INPersonSuggestionType) suggestionType;
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you can use to identify people in your app.
- `aliases`: An array of [INPersonHandle](../inpersonhandle.md) objects containing alternate ways of identifying the user.
- `suggestionType`: The contact information to surface in interactions involving the user. Use this property to identify a user by their social media account name or instant messaging address, instead of by their actual name.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create person objects with additional information such as email addresses or phone numbers. This method also lets you suggest how you want to identify the person when donating interactions to the system. For example, you might ask the system to identify the user by their social media account name instead of by their actual name.

Specify as much information as possible about the user. This method makes copies of the `personHandle`, `nameComponents`, `displayName`, `image`, `contactIdentifier`, `customIdentifier`, and `aliases` parameters instead of keeping the originals.

## See Also

### Creating a person

- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.
