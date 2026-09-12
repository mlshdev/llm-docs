> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/init(forunknowncontact:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init(forunknowncontact:))

# init(forUnknownContact:) (Swift)

**Framework:** Contacts UI  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a view controller for an unknown contact.

## Declaration

```swift
convenience init(forUnknownContact contact: CNContact)
```

## Parameters

- `contact`: The contact to be displayed.

<a id="return-value"></a>

## Return Value

A newly initialized [CNContactViewController](../cncontactviewcontroller.md) object.

<a id="discussion"></a>

## Discussion

This view controller initializes the customized behavior and appearance of [CNContactViewController](../cncontactviewcontroller.md) for an unknown contact.

## See Also

### Creating the Contact Viewer

- [init(for:)](init%28for_%29.md): Initializes a view controller for an existing contact.
- [init(forContact:)](init%28forcontact_%29.md): Initializes a view controller for an existing contact.
- [init(forNewContact:)](init%28fornewcontact_%29.md): Initializes a view controller for a new contact.

# viewControllerForUnknownContact: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a view controller for an unknown contact.

## Declaration

```objectivec
+ (instancetype) viewControllerForUnknownContact:(CNContact *) contact;
```

## Parameters

- `contact`: The contact to be displayed.

<a id="return-value"></a>

## Return Value

A newly initialized [CNContactViewController](../cncontactviewcontroller.md) object.

<a id="discussion"></a>

## Discussion

This view controller initializes the customized behavior and appearance of [CNContactViewController](../cncontactviewcontroller.md) for an unknown contact.

## See Also

### Creating the Contact Viewer

- [viewControllerForContact:](init%28for_%29.md): Initializes a view controller for an existing contact.
- [viewControllerForNewContact:](init%28fornewcontact_%29.md): Initializes a view controller for a new contact.
