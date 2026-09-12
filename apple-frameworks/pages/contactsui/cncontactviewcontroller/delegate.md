> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller/delegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/delegate)

# delegate (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified.

## Declaration

```swift
weak var delegate: (any CNContactViewControllerDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

The notification is sent when the user selects a property, or when the contact view controller is dismissed by its parent.

## See Also

### Handling Interactions with the Interface

- [CNContactViewControllerDelegate](../cncontactviewcontrollerdelegate.md): Methods you use to respond to user interactions with a contact view controller.

# delegate (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CNContactViewControllerDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

The notification is sent when the user selects a property, or when the contact view controller is dismissed by its parent.

## See Also

### Handling Interactions with the Interface

- [CNContactViewControllerDelegate](../cncontactviewcontrollerdelegate.md): Methods you use to respond to user interactions with a contact view controller.
