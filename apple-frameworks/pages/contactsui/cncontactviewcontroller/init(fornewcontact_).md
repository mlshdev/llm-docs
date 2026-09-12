> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/init(fornewcontact:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init(fornewcontact:))

# init(forNewContact:) (Swift)

**Framework:** Contacts UI  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a view controller for a new contact.

## Declaration

```swift
convenience init(forNewContact contact: CNContact?)
```

## Parameters

- `contact`: The contact to be displayed.

<a id="return-value"></a>

## Return Value

A newly initialized [CNContactViewController](../cncontactviewcontroller.md) object.

<a id="discussion"></a>

## Discussion

This view controller initializes the customized behavior and appearance of [CNContactViewController](../cncontactviewcontroller.md) for a new contact.

## See Also

### Creating the Contact Viewer

- [init(for:)](init%28for_%29.md): Initializes a view controller for an existing contact.
- [init(forContact:)](init%28forcontact_%29.md): Initializes a view controller for an existing contact.
- [init(forUnknownContact:)](init%28forunknowncontact_%29.md): Initializes a view controller for an unknown contact.

# viewControllerForNewContact: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a view controller for a new contact.

## Declaration

```objectivec
+ (instancetype) viewControllerForNewContact:(CNContact *) contact;
```

## Parameters

- `contact`: The contact to be displayed.

<a id="return-value"></a>

## Return Value

A newly initialized [CNContactViewController](../cncontactviewcontroller.md) object.

<a id="discussion"></a>

## Discussion

This view controller initializes the customized behavior and appearance of [CNContactViewController](../cncontactviewcontroller.md) for a new contact.

## See Also

### Creating the Contact Viewer

- [viewControllerForContact:](init%28for_%29.md): Initializes a view controller for an existing contact.
- [viewControllerForUnknownContact:](init%28forunknowncontact_%29.md): Initializes a view controller for an unknown contact.
