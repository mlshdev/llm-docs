> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:isme:suggestiontype:)](https://developer.apple.com/documentation/intents/inperson/init(personhandle:namecomponents:displayname:image:contactidentifier:customidentifier:isme:suggestiontype:))

# init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a person that includes required metadata for messaging intents.

## Declaration

```swift
convenience init(personHandle: INPersonHandle, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, contactIdentifier: String?, customIdentifier: String?, isMe: Bool, suggestionType: INPersonSuggestionType)
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you use to identify people in your app.
- `isMe`: A Boolean value that indicates whether the person is the current device user.
- `suggestionType`: The contact information to surface in interactions involving the user. Use this property to identify a user by their social media account name or instant messaging address, instead of by their actual name.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

It’s important to set `isMe` when using [Messaging](../../sirikit/messaging.md) intents. For example, if the message sender for an outgoing message is also the user of the device, set `isMe` to [true](https://developer.apple.com/documentation/swift/true). Similarly, when creating the recipient array for an incoming message — which includes the current user of the device — set `isMe` to [true](https://developer.apple.com/documentation/swift/true) for the person in the recipient list that is the current device user, and set `isMe` to [false](https://developer.apple.com/documentation/swift/false) for all other recipients.

You can also use this method to suggest how you want to identify the person when your app donates interactions to the system. For example, you might ask the system to identify the user by their social media account name instead of by their actual name.

Use this method when creating person objects you plan to return as part of a response to Siri. Specify as much information as possible about the user. This method makes copies of the parameters instead of keeping the originals.

## See Also

### Creating a person

- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.

# initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a person that includes required metadata for messaging intents.

## Declaration

```objectivec
- (instancetype) initWithPersonHandle:(INPersonHandle *) personHandle nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image contactIdentifier:(NSString *) contactIdentifier customIdentifier:(NSString *) customIdentifier isMe:(BOOL) isMe suggestionType:(INPersonSuggestionType) suggestionType;
```

## Parameters

- `personHandle`: A string that contains information your app uses to identify the user. You can create a person handle from an email address, phone number, or account name associated with the user.
- `nameComponents`: The name of the user, specified as a set of name components.
- `displayName`: The string you display for the user’s name.
- `image`: An image of the person.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.
- `customIdentifier`: A custom string that you use to identify people in your app.
- `isMe`: A Boolean value that indicates whether the person is the current device user.
- `suggestionType`: The contact information to surface in interactions involving the user. Use this property to identify a user by their social media account name or instant messaging address, instead of by their actual name.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if initialization fails.

<a id="Discussion"></a>

## Discussion

It’s important to set `isMe` when using [Messaging](../../sirikit/messaging.md) intents. For example, if the message sender for an outgoing message is also the user of the device, set `isMe` to [true](https://developer.apple.com/documentation/swift/true). Similarly, when creating the recipient array for an incoming message — which includes the current user of the device — set `isMe` to [true](https://developer.apple.com/documentation/swift/true) for the person in the recipient list that is the current device user, and set `isMe` to [false](https://developer.apple.com/documentation/swift/false) for all other recipients.

You can also use this method to suggest how you want to identify the person when your app donates interactions to the system. For example, you might ask the system to identify the user by their social media account name instead of by their actual name.

Use this method when creating person objects you plan to return as part of a response to Siri. Specify as much information as possible about the user. This method makes copies of the parameters instead of keeping the originals.

## See Also

### Creating a person

- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.
