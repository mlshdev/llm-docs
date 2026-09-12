> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersoncreatewithvcardrepresentation(_:)](https://developer.apple.com/documentation/addressbook/abpersoncreatewithvcardrepresentation(_:))

# ABPersonCreateWithVCardRepresentation(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a new ABPerson object initialized with the given data in vCard format.

## Declaration

```swift
func ABPersonCreateWithVCardRepresentation(_ vCard: CFData!) -> Unmanaged<ABPersonRef>!
```

## Parameters

- `vCard`: The data in vCard format to initialize the new ABPerson object with.

<a id="return-value"></a>

## Return Value

A new ABPerson object initialized with the given data in vCard format. You are responsible for releasing this object.

## See Also

### People

- [ABCopyArrayOfAllPeople(\_:)](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe(\_:)](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData(\_:)](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups(\_:)](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation(\_:)](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate()](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonSetImageData(\_:\_:\_:)](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe(\_:\_:)](absetme%28____%29.md): Sets the record that represents the logged-in user.

# ABPersonCreateWithVCardRepresentation (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a new ABPerson object initialized with the given data in vCard format.

## Declaration

```objectivec
extern ABPersonRefABPersonCreateWithVCardRepresentation(CFDataRef vCard);
```

## Parameters

- `vCard`: The data in vCard format to initialize the new ABPerson object with.

<a id="return-value"></a>

## Return Value

A new ABPerson object initialized with the given data in vCard format. You are responsible for releasing this object.

## See Also

### People

- [ABCopyArrayOfAllPeople](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonSetImageData](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe](absetme%28____%29.md): Sets the record that represents the logged-in user.
