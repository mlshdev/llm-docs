> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson](https://developer.apple.com/documentation/intents/inperson)

# INPerson (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Information about a person participating in a SiriKit interaction.

## Declaration

```swift
class INPerson
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
- [Handling an Intent](../sirikit/handling-an-intent.md)
- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

SiriKit uses [INPerson](inperson.md) objects to represent people with many different roles, including the sender or recipient of calls and messages, the payer or payee of a financial transaction, or the driver of a vehicle. You also use person objects to identify the corresponding contact in your app and to communicate information about that contact back to SiriKit.

When resolving the parameters of an intent, use any provided [INPerson](inperson.md) objects to identify the corresponding contacts in your app. A person object contains information provided by the initial request, which could be as little as a single name spoken by the person interacting with Siri. After identifying the contact, create a new [INPerson](inperson.md) object and fill it with the information that you need to identify that contact again later. For example, you might specify a value for [personHandle](inperson/personhandle.md) property that contains the information about how your app identifies that contact.

When resolving the identities of contacts, SiriKit leverages the information in the device owner’s contacts database when that information is available. If the owner denies your app access to their contacts, SiriKit can’t use that information, which might cause many properties of a person object to be `nil`. Because the [INPerson](inperson.md) class conforms to the [INSpeakable](inspeakable.md) protocol, though, SiriKit still populates the [spokenPhrase](inspeakable/spokenphrase.md) property with what the person interacting with Siri said, and you can use that information to try to identify the contact. For more information about that protocol, see [INSpeakable](inspeakable.md).

> **Important**

>  To provide the best experience, especially when donating instances of [INSendMessageIntent](insendmessageintent.md) and [INStartCallIntent](instartcallintent.md), assign a value to a person’s [contactIdentifier](inperson/contactidentifier.md) if they exist in the device owner’s contacts database. Otherwise, assign a value to the [customIdentifier](inperson/customidentifier.md) property that identifies the person in your app. When attempting to resolve a message recipient or call contact, prefer to use the people Siri adds to the [siriMatches](inperson/sirimatches.md) property.

## Topics

### Creating a person

- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:)](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.

### Accessing the name

- [displayName](inperson/displayname.md): The person’s formatted name.
- [nameComponents](inperson/namecomponents.md): The individual components of the person’s full name.

### Accessing the person’s identity

- [personHandle](inperson/personhandle.md): The unique handle that your app assigns to the person.
- [image](inperson/image.md): An image of the person.
- [isMe](inperson/isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](inperson/aliases.md): The additional handles that Siri may use to identify the person.

### Accessing app-specific identifiers

- [contactIdentifier](inperson/contactidentifier.md): The Contacts database identifier for the person.
- [customIdentifier](inperson/customidentifier.md): The unique identifier that your app uses to identify the person.

### Accessing suggestion details

- [isContactSuggestion](inperson/iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [suggestionType](inperson/suggestiontype.md): The type of contact information to donate with interactions.
- [INPersonSuggestionType](inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.

### Accessing relationship details

- [relationship](inperson/relationship.md): The relationship between this person and the person using the device.
- [INPersonRelationship](inpersonrelationship.md): Constants indicating the relationship between the person using the device and another person.

### Accessing matched people

- [siriMatches](inperson/sirimatches.md): The list of matches Siri provides for you to resolve or disambiguate.

### Deprecated

- [Deprecated Symbols](../sirikit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Initializers

- [init(coder:)](inperson/init%28coder_%29.md)
- [init(handle:displayName:contactIdentifier:)](inperson/init%28handle_displayname_contactidentifier_%29.md): Deprecated. Creates a person object with the specified display name and contact information.
- [init(handle:nameComponents:contactIdentifier:)](inperson/init%28handle_namecomponents_contactidentifier_%29.md): Deprecated. Creates a person object with the specified display name and contact information.
- [init(handle:nameComponents:displayName:image:contactIdentifier:)](inperson/init%28handle_namecomponents_displayname_image_contactidentifier_%29.md): Deprecated. Creates a person object with the specified name and contact information.

### Instance Properties

- [handle](inperson/handle.md): Deprecated. The unique identifier that your app assigned to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INRestaurantGuest](inrestaurantguest.md)
- [INRideDriver](inridedriver.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INSpeakable](inspeakable.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contacts

- [INPersonHandle](inpersonhandle.md): The identifying information for a user of your app.
- [INPersonHandleLabel](inpersonhandlelabel.md): Constants describing how the person handle relates to the user.

# INPerson (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Information about a person participating in a SiriKit interaction.

## Declaration

```objectivec
@interface INPerson : NSObject
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
- [Handling an Intent](../sirikit/handling-an-intent.md)
- [Resolving the Parameters of an Intent](../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="overview"></a>

## Overview

SiriKit uses [INPerson](inperson.md) objects to represent people with many different roles, including the sender or recipient of calls and messages, the payer or payee of a financial transaction, or the driver of a vehicle. You also use person objects to identify the corresponding contact in your app and to communicate information about that contact back to SiriKit.

When resolving the parameters of an intent, use any provided [INPerson](inperson.md) objects to identify the corresponding contacts in your app. A person object contains information provided by the initial request, which could be as little as a single name spoken by the person interacting with Siri. After identifying the contact, create a new [INPerson](inperson.md) object and fill it with the information that you need to identify that contact again later. For example, you might specify a value for [personHandle](inperson/personhandle.md) property that contains the information about how your app identifies that contact.

When resolving the identities of contacts, SiriKit leverages the information in the device owner’s contacts database when that information is available. If the owner denies your app access to their contacts, SiriKit can’t use that information, which might cause many properties of a person object to be `nil`. Because the [INPerson](inperson.md) class conforms to the [INSpeakable](inspeakable.md) protocol, though, SiriKit still populates the [spokenPhrase](inspeakable/spokenphrase.md) property with what the person interacting with Siri said, and you can use that information to try to identify the contact. For more information about that protocol, see [INSpeakable](inspeakable.md).

> **Important**

>  To provide the best experience, especially when donating instances of [INSendMessageIntent](insendmessageintent.md) and [INStartCallIntent](instartcallintent.md), assign a value to a person’s [contactIdentifier](inperson/contactidentifier.md) if they exist in the device owner’s contacts database. Otherwise, assign a value to the [customIdentifier](inperson/customidentifier.md) property that identifies the person in your app. When attempting to resolve a message recipient or call contact, prefer to use the people Siri adds to the [siriMatches](inperson/sirimatches.md) property.

## Topics

### Creating a person

- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_%29.md): Creates a person with the specified name and contact information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md): Creates a person with information that indicates whether the person is the user of the device.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:relationship:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_relationship_%29.md): Creates a person with the specified name, contact, and relationship information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:suggestionType:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_suggestiontype_%29.md): Creates a person that includes required metadata for messaging intents.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:aliases:suggestionType:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_aliases_suggestiontype_%29.md): Creates a person with the specified name, contact, and alias information.
- [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isContactSuggestion:suggestionType:](inperson/init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_iscontactsuggestion_suggestiontype_%29.md): Creates a person with information Siri can use to suggestion the person at appropriate times.

### Accessing the name

- [displayName](inperson/displayname.md): The person’s formatted name.
- [nameComponents](inperson/namecomponents.md): The individual components of the person’s full name.

### Accessing the person’s identity

- [personHandle](inperson/personhandle.md): The unique handle that your app assigns to the person.
- [image](inperson/image.md): An image of the person.
- [isMe](inperson/isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](inperson/aliases.md): The additional handles that Siri may use to identify the person.

### Accessing app-specific identifiers

- [contactIdentifier](inperson/contactidentifier.md): The Contacts database identifier for the person.
- [customIdentifier](inperson/customidentifier.md): The unique identifier that your app uses to identify the person.

### Accessing suggestion details

- [contactSuggestion](inperson/iscontactsuggestion.md): A Boolean value that indicates whether the person is a contact suggestion.
- [suggestionType](inperson/suggestiontype.md): The type of contact information to donate with interactions.
- [INPersonSuggestionType](inpersonsuggestiontype.md): Constants indicating how to display the person’s identity.

### Accessing relationship details

- [relationship](inperson/relationship.md): The relationship between this person and the person using the device.
- [INPersonRelationship](inpersonrelationship.md): Constants indicating the relationship between the person using the device and another person.

### Accessing matched people

- [siriMatches](inperson/sirimatches.md): The list of matches Siri provides for you to resolve or disambiguate.

### Deprecated

- [Deprecated Symbols](../sirikit/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [handle](inperson/handle.md): Deprecated. The unique identifier that your app assigned to the user.

### Instance Methods

- [initWithHandle:displayName:contactIdentifier:](inperson/init%28handle_displayname_contactidentifier_%29.md): Deprecated. Creates a person object with the specified display name and contact information.
- [initWithHandle:nameComponents:contactIdentifier:](inperson/init%28handle_namecomponents_contactidentifier_%29.md): Deprecated. Creates a person object with the specified display name and contact information.
- [initWithHandle:nameComponents:displayName:image:contactIdentifier:](inperson/init%28handle_namecomponents_displayname_image_contactidentifier_%29.md): Deprecated. Creates a person object with the specified name and contact information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INRestaurantGuest](inrestaurantguest.md)
- [INRideDriver](inridedriver.md)

### Conforms To

- [INSpeakable](inspeakable.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Contacts

- [INPersonHandle](inpersonhandle.md): The identifying information for a user of your app.
- [INPersonHandleLabel](inpersonhandlelabel.md): Constants describing how the person handle relates to the user.
