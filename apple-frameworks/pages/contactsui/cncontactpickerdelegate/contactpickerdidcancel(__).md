> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate/contactpickerdidcancel(_:)](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate/contactpickerdidcancel(_:))

# contactPickerDidCancel(\_:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

In iOS, called when the user taps Cancel.

## Declaration

```swift
optional func contactPickerDidCancel(_ picker: CNContactPickerViewController)
```

## Parameters

- `picker`: The contact picker in which the selection was made.

<a id="discussion"></a>

## Discussion

The picker is dismissed automatically after a contact or property is picked.

## See Also

### Dismissing the Picker Interface

- [contactPickerWillClose(\_:)](contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.
- [contactPickerDidClose(\_:)](contactpickerdidclose%28__%29.md): In macOS, called when the contact picker’s popover has closed.

# contactPickerDidCancel: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

In iOS, called when the user taps Cancel.

## Declaration

```objectivec
- (void) contactPickerDidCancel:(CNContactPickerViewController *) picker;
```

## Parameters

- `picker`: The contact picker in which the selection was made.

<a id="discussion"></a>

## Discussion

The picker is dismissed automatically after a contact or property is picked.

## See Also

### Dismissing the Picker Interface

- [contactPickerWillClose:](contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.
- [contactPickerDidClose:](contactpickerdidclose%28__%29.md): In macOS, called when the contact picker’s popover has closed.
