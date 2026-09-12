> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/allowsactions](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/allowsactions)

# allowsActions (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.

## Declaration

```swift
var allowsActions: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default the value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing Contact Card

- [allowsEditing](allowsediting.md): Determines whether the user can edit the contact’s information.
- [shouldShowLinkedContacts](shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.

# allowsActions (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsActions;
```

<a id="discussion"></a>

## Discussion

By default the value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Customizing Contact Card

- [allowsEditing](allowsediting.md): Determines whether the user can edit the contact’s information.
- [shouldShowLinkedContacts](shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.
