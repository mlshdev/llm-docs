> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/shouldshowlinkedcontacts](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/shouldshowlinkedcontacts)

# shouldShowLinkedContacts (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether to display data from contacts that are linked to the contact being displayed.

## Declaration

```swift
var shouldShowLinkedContacts: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Customizing Contact Card

- [allowsEditing](allowsediting.md): Determines whether the user can edit the contact’s information.
- [allowsActions](allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.

# shouldShowLinkedContacts (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether to display data from contacts that are linked to the contact being displayed.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldShowLinkedContacts;
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Customizing Contact Card

- [allowsEditing](allowsediting.md): Determines whether the user can edit the contact’s information.
- [allowsActions](allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.
