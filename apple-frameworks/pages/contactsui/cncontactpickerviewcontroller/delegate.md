> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/delegate

# delegate (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified when the user selects a contact or a property.

## Declaration

```swift
weak var delegate: (any CNContactPickerDelegate)? { get set }
```

## See Also

### Responding to User Interactions

- [CNContactPickerDelegate](../cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

# delegate (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to be notified when the user selects a contact or a property.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CNContactPickerDelegate> delegate;
```

## See Also

### Responding to User Interactions

- [CNContactPickerDelegate](../cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.
