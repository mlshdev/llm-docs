> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactproperty](https://developer.apple.com/documentation/contacts/cncontactproperty)

# CNContactProperty (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a property of a contact.

## Declaration

```swift
class CNContactProperty
```

<a id="overview"></a>

## Overview

A contact (that is, an instance of [CNContact](cncontact.md)) has properties, such as [givenName](cncontact/givenname.md), [phoneNumbers](cncontact/phonenumbers.md), and [jobTitle](cncontact/jobtitle.md). Each property is represented by an instance of [CNContactProperty](cncontactproperty.md), which provides a tuple that can contain three or five values, depending on whether the property is a member of an array of labeled values. For example, the [phoneNumbers](cncontact/phonenumbers.md) property is a member of an array of labeled values, so the `CNContactProperty` tuple contains the contact, key, value, identifier, and label. For the [givenName](cnmutablecontact/givenname.md) property, which is not contained in a labeled array, `CNContactProperty` returns a tuple that contains the contact, key, and value. The `CNContactProperty` class is used by [CNContactPicker](../contactsui/cncontactpicker.md) to return the user’s selected property.

## Topics

### Getting the Contact Object

- [contact](cncontactproperty/contact.md): The associated contact.

### Getting the Property Information

- [key](cncontactproperty/key.md): The key of the contact property.
- [value](cncontactproperty/value.md): The value of the property.
- [label](cncontactproperty/label.md): The label of the labeled value of the property array.
- [identifier](cncontactproperty/identifier.md): The identifier of the labeled value in the array of labeled.

### Handling Exceptions

- [CNContactPropertyNotFetchedExceptionName](cncontactpropertynotfetchedexceptionname.md): Exception thrown when an accessed property was not fetched.

### Initializers

- [init(coder:)](cncontactproperty/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Generic Types

- [CNLabeledValue](cnlabeledvalue.md): An immutable object that combines a contact property value with a label that describes that property.

# CNContactProperty (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a property of a contact.

## Declaration

```objectivec
@interface CNContactProperty : NSObject
```

<a id="overview"></a>

## Overview

A contact (that is, an instance of [CNContact](cncontact.md)) has properties, such as [givenName](cncontact/givenname.md), [phoneNumbers](cncontact/phonenumbers.md), and [jobTitle](cncontact/jobtitle.md). Each property is represented by an instance of [CNContactProperty](cncontactproperty.md), which provides a tuple that can contain three or five values, depending on whether the property is a member of an array of labeled values. For example, the [phoneNumbers](cncontact/phonenumbers.md) property is a member of an array of labeled values, so the `CNContactProperty` tuple contains the contact, key, value, identifier, and label. For the [givenName](cnmutablecontact/givenname.md) property, which is not contained in a labeled array, `CNContactProperty` returns a tuple that contains the contact, key, and value. The `CNContactProperty` class is used by [CNContactPicker](../contactsui/cncontactpicker.md) to return the user’s selected property.

## Topics

### Getting the Contact Object

- [contact](cncontactproperty/contact.md): The associated contact.

### Getting the Property Information

- [key](cncontactproperty/key.md): The key of the contact property.
- [value](cncontactproperty/value.md): The value of the property.
- [label](cncontactproperty/label.md): The label of the labeled value of the property array.
- [identifier](cncontactproperty/identifier.md): The identifier of the labeled value in the array of labeled.

### Handling Exceptions

- [CNContactPropertyNotFetchedExceptionName](cncontactpropertynotfetchedexceptionname.md): Exception thrown when an accessed property was not fetched.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Generic Types

- [CNLabeledValue](cnlabeledvalue.md): An immutable object that combines a contact property value with a label that describes that property.
