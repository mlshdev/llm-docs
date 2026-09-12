> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/data-objects](https://developer.apple.com/documentation/contacts/data-objects)

# Data Objects

**Interface languages:** Swift, Objective-C

**Framework:** Contacts  
**Kind:** API Collection

Access contact-related data, such as the user’s postal address and phone number.

## Topics

### Addresses

- [CNPostalAddress](cnpostaladdress.md): An immutable representation of the postal address for a contact.
- [CNMutablePostalAddress](cnmutablepostaladdress.md): A mutable representation of the postal address for a contact.
- [CNInstantMessageAddress](cninstantmessageaddress.md): An immutable object representing an instant message address for the contact.

### Phone Numbers

- [CNPhoneNumber](cnphonenumber.md): An immutable object representing a phone number for a contact.

### Groups and Containers

- [CNGroup](cngroup.md): An immutable object that represents a group of contacts.
- [CNMutableGroup](cnmutablegroup.md): A mutable object that represents a group of contacts.
- [CNContainer](cncontainer.md): An immutable object that represents a collection of contacts.

### Social Profiles

- [CNSocialProfile](cnsocialprofile.md): An immutable object that represents one of the user’s social profiles.

### Related Data

- [CNContactRelation](cncontactrelation.md): An immutable object that represents the relationship between one contact to another.

### Generic Types

- [CNLabeledValue](cnlabeledvalue.md): An immutable object that combines a contact property value with a label that describes that property.
- [CNContactProperty](cncontactproperty.md): An object that represents a property of a contact.

## See Also

### Contact data

- [CNContact](cncontact.md): An immutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [CNMutableContact](cnmutablecontact.md): A mutable object that stores information about a single contact, such as the contact’s first name, phone numbers, and addresses.
- [Contact Keys](contact-keys.md): Specify contact-related properties during fetch operations.
