> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopyarrayofallpeople(_:)](https://developer.apple.com/documentation/addressbook/abcopyarrayofallpeople(_:))

# ABCopyArrayOfAllPeople(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array of all the people in the Address Book database.

## Declaration

```swift
func ABCopyArrayOfAllPeople(_ addressBook: ABAddressBookRef!) -> Unmanaged<CFArray>!
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

An array of ABPerson objects representing all the people in the Address Book database. If the database does not contain any people, the function returns an empty array. You are responsible for releasing this object.

## See Also

### People

- [ABGetMe(\_:)](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData(\_:)](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups(\_:)](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation(\_:)](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate()](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation(\_:)](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData(\_:\_:\_:)](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe(\_:\_:)](absetme%28____%29.md): Sets the record that represents the logged-in user.

# ABCopyArrayOfAllPeople (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array of all the people in the Address Book database.

## Declaration

```objectivec
extern CFArrayRefABCopyArrayOfAllPeople(ABAddressBookRef addressBook);
```

## Parameters

- `addressBook`: The address book for the logged-in user.

<a id="return-value"></a>

## Return Value

An array of ABPerson objects representing all the people in the Address Book database. If the database does not contain any people, the function returns an empty array. You are responsible for releasing this object.

## See Also

### People

- [ABGetMe](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe](absetme%28____%29.md): Sets the record that represents the logged-in user.
