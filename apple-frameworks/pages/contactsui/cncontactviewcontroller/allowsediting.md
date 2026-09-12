> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/allowsediting](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/allowsediting)

# allowsEditing (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether the user can edit the contact’s information.

## Declaration

```swift
var allowsEditing: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true). All properties are visible when editing a contact.

## See Also

### Customizing Contact Card

- [allowsActions](allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [shouldShowLinkedContacts](shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.

# allowsEditing (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether the user can edit the contact’s information.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsEditing;
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true). All properties are visible when editing a contact.

## See Also

### Customizing Contact Card

- [allowsActions](allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [shouldShowLinkedContacts](shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.
