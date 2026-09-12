> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpicker/delegate](https://developer.apple.com/documentation/contactsui/cncontactpicker/delegate)

# delegate (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The picker delegate to be notified when the user chooses a contact.

## Declaration

```swift
weak var delegate: (any CNContactPickerDelegate)? { get set }
```

## See Also

### Responding to Picker Interactions

- [CNContactPickerDelegate](../cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

# delegate (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The picker delegate to be notified when the user chooses a contact.

## Declaration

```objectivec
@property (weak) id<CNContactPickerDelegate> delegate;
```

## See Also

### Responding to Picker Interactions

- [CNContactPickerDelegate](../cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.
