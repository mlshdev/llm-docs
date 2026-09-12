> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactrelation](https://developer.apple.com/documentation/contacts/cncontactrelation)

# CNContactRelation (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents the relationship between one contact to another.

## Declaration

```swift
class CNContactRelation
```

<a id="overview"></a>

## Overview

`CNContactRelation` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Contact Relation Object

- [init(name:)](cncontactrelation/init%28name_%29.md): Creates an object with the name of the related contact.

### Getting the Relation Name

- [name](cncontactrelation/name.md): The name of the related contact.

### Getting the Common Relationship Labels

- [CNLabelContactRelationSpouse](cnlabelcontactrelationspouse.md): The label for the contact’s spouse.
- [CNLabelContactRelationPartner](cnlabelcontactrelationpartner.md): The label for the contact’s partner.
- [CNLabelContactRelationDaughter](cnlabelcontactrelationdaughter.md): The label for the contact’s daughter.
- [CNLabelContactRelationSon](cnlabelcontactrelationson.md): The label for the contact’s son.
- [CNLabelContactRelationChild](cnlabelcontactrelationchild.md): The label for the contact’s child.
- [CNLabelContactRelationFather](cnlabelcontactrelationfather.md): The label for the contact’s father.
- [CNLabelContactRelationMother](cnlabelcontactrelationmother.md): The label for the contact’s mother.
- [CNLabelContactRelationParent](cnlabelcontactrelationparent.md): The label for the contact’s parent.
- [CNLabelContactRelationBrother](cnlabelcontactrelationbrother.md): The label for the contact’s brother.
- [CNLabelContactRelationSister](cnlabelcontactrelationsister.md): The label for the contact’s sister.
- [CNLabelContactRelationFriend](cnlabelcontactrelationfriend.md): The label for the contact’s friend.
- [CNLabelContactRelationAssistant](cnlabelcontactrelationassistant.md): The label for the contact’s assistant.
- [CNLabelContactRelationManager](cnlabelcontactrelationmanager.md): The label for the contact’s manager.

### Initializers

- [init(coder:)](cncontactrelation/init%28coder_%29.md)

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

# CNContactRelation (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that represents the relationship between one contact to another.

## Declaration

```objectivec
@interface CNContactRelation : NSObject
```

<a id="overview"></a>

## Overview

`CNContactRelation` objects are thread-safe, and you may access their properties from any thread of your app.

## Topics

### Creating a Contact Relation Object

- [initWithName:](cncontactrelation/init%28name_%29.md): Creates an object with the name of the related contact.
- [contactRelationWithName:](cncontactrelation/contactrelationwithname_.md): Instantiate a class instance with the name of the related contact.

### Getting the Relation Name

- [name](cncontactrelation/name.md): The name of the related contact.

### Getting the Common Relationship Labels

- [CNLabelContactRelationSpouse](cnlabelcontactrelationspouse.md): The label for the contact’s spouse.
- [CNLabelContactRelationPartner](cnlabelcontactrelationpartner.md): The label for the contact’s partner.
- [CNLabelContactRelationDaughter](cnlabelcontactrelationdaughter.md): The label for the contact’s daughter.
- [CNLabelContactRelationSon](cnlabelcontactrelationson.md): The label for the contact’s son.
- [CNLabelContactRelationChild](cnlabelcontactrelationchild.md): The label for the contact’s child.
- [CNLabelContactRelationFather](cnlabelcontactrelationfather.md): The label for the contact’s father.
- [CNLabelContactRelationMother](cnlabelcontactrelationmother.md): The label for the contact’s mother.
- [CNLabelContactRelationParent](cnlabelcontactrelationparent.md): The label for the contact’s parent.
- [CNLabelContactRelationBrother](cnlabelcontactrelationbrother.md): The label for the contact’s brother.
- [CNLabelContactRelationSister](cnlabelcontactrelationsister.md): The label for the contact’s sister.
- [CNLabelContactRelationFriend](cnlabelcontactrelationfriend.md): The label for the contact’s friend.
- [CNLabelContactRelationAssistant](cnlabelcontactrelationassistant.md): The label for the contact’s assistant.
- [CNLabelContactRelationManager](cnlabelcontactrelationmanager.md): The label for the contact’s manager.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
