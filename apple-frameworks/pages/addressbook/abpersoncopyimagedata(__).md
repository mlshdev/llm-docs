> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersoncopyimagedata(_:)](https://developer.apple.com/documentation/addressbook/abpersoncopyimagedata(_:))

# ABPersonCopyImageData(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Returns data that contains a picture of a person.

> use CNContact.imageData

## Declaration

```swift
func ABPersonCopyImageData(_ person: ABRecord!) -> Unmanaged<CFData>!
```

```swift
func ABPersonCopyImageData(_ person: ABPersonRef!) -> Unmanaged<CFData>!
```

## Parameters

- `person`: The person whose image you wish to obtain.

<a id="return-value"></a>

## Return Value

The data representing an image of `person`. You are responsible for releasing this object.

<a id="discussion"></a>

## Discussion

The returned data is in a QuickTime-compatible format. To create an image from it, use the NSImage method [init(data:)](https://developer.apple.com/documentation/appkit/nsimage/init%28data:%29).

## See Also

### People

- [ABCopyArrayOfAllPeople(\_:)](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe(\_:)](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyParentGroups(\_:)](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation(\_:)](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate()](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation(\_:)](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData(\_:\_:\_:)](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe(\_:\_:)](absetme%28____%29.md): Sets the record that represents the logged-in user.

# ABPersonCopyImageData (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Returns data that contains a picture of a person.

> use CNContact.imageData

## Declaration

```objectivec
extern CFDataRefABPersonCopyImageData(ABRecordRef person);
```

```objectivec
extern CFDataRefABPersonCopyImageData(ABPersonRef person);
```

## Parameters

- `person`: The person whose image you wish to obtain.

<a id="return-value"></a>

## Return Value

The data representing an image of `person`. You are responsible for releasing this object.

<a id="discussion"></a>

## Discussion

The returned data is in a QuickTime-compatible format. To create an image from it, use the NSImage method [initWithData:](https://developer.apple.com/documentation/appkit/nsimage/init%28data:%29).

## See Also

### People

- [ABCopyArrayOfAllPeople](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyParentGroups](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md): Returns a search element object that specifies a query for records of this type.
- [ABPersonCreateWithVCardRepresentation](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe](absetme%28____%29.md): Sets the record that represents the logged-in user.
