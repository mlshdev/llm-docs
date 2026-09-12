> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpicker](https://developer.apple.com/documentation/contactsui/cncontactpicker)

# CNContactPicker (Swift)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** macOS 10.11+

A popover-based interface for selecting a contact.

## Declaration

```swift
class CNContactPicker
```

<a id="overview"></a>

## Overview

Before displaying the popover, configure the [displayedKeys](cncontactpicker/displayedkeys.md) property with the information you want to display in the interface.

## Topics

### Responding to Picker Interactions

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.
- [CNContactPickerDelegate](cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

### Configuring the Picker Contents

- [displayedKeys](cncontactpicker/displayedkeys.md): The keys to be displayed when a contact is expanded.

### Displaying the Popover

- [showRelative(to:of:preferredEdge:)](cncontactpicker/showrelative%28to_of_preferrededge_%29.md): Shows the picker popover anchored to the specified view.

### Closing the Popover

- [close()](cncontactpicker/close%28%29.md): Closes the popover.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Contact pickers

- [CNContactPickerViewController](cncontactpickerviewcontroller.md): A view controller that displays an interface for picking contacts.

# CNContactPicker (Objective-C)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** macOS 10.11+

A popover-based interface for selecting a contact.

## Declaration

```objectivec
@interface CNContactPicker : NSObject
```

<a id="overview"></a>

## Overview

Before displaying the popover, configure the [displayedKeys](cncontactpicker/displayedkeys.md) property with the information you want to display in the interface.

## Topics

### Responding to Picker Interactions

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.
- [CNContactPickerDelegate](cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

### Configuring the Picker Contents

- [displayedKeys](cncontactpicker/displayedkeys.md): The keys to be displayed when a contact is expanded.

### Displaying the Popover

- [showRelativeToRect:ofView:preferredEdge:](cncontactpicker/showrelative%28to_of_preferrededge_%29.md): Shows the picker popover anchored to the specified view.

### Closing the Popover

- [close](cncontactpicker/close%28%29.md): Closes the popover.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Contact pickers

- [CNContactPickerViewController](cncontactpickerviewcontroller.md): A view controller that displays an interface for picking contacts.
