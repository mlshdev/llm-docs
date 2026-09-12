> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontrollerdelegate/contactviewcontroller(_:didcompletewith:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontrollerdelegate/contactviewcontroller(_:didcompletewith:))

# contactViewController(\_:didCompleteWith:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the view has been presented.

## Declaration

```swift
optional func contactViewController(_ viewController: CNContactViewController, didCompleteWith contact: CNContact?)
```

## Parameters

- `viewController`: The view controller presenting the contact.
- `contact`: The newly, or existing contact being added.

<a id="discussion"></a>

## Discussion

If creating a new contact, the new contact added to the contacts list is passed in `contact`. If adding to an existing contact, the existing contact is passed in `contact`. It is up to the delegate to dismiss the view controller.

## See Also

### Responding to User Events

- [contactViewController(\_:shouldPerformDefaultActionFor:)](contactviewcontroller%28__shouldperformdefaultactionfor_%29.md): Called when the user selects a property.

# contactViewController:didCompleteWithContact: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the view has been presented.

## Declaration

```objectivec
- (void) contactViewController:(CNContactViewController *) viewController didCompleteWithContact:(CNContact *) contact;
```

## Parameters

- `viewController`: The view controller presenting the contact.
- `contact`: The newly, or existing contact being added.

<a id="discussion"></a>

## Discussion

If creating a new contact, the new contact added to the contacts list is passed in `contact`. If adding to an existing contact, the existing contact is passed in `contact`. It is up to the delegate to dismiss the view controller.

## See Also

### Responding to User Events

- [contactViewController:shouldPerformDefaultActionForContactProperty:](contactviewcontroller%28__shouldperformdefaultactionfor_%29.md): Called when the user selects a property.
