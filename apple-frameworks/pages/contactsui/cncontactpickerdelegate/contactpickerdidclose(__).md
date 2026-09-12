> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate/contactpickerdidclose(_:)](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate/contactpickerdidclose(_:))

# contactPickerDidClose(\_:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

In macOS, called when the contact picker’s popover has closed.

## Declaration

```swift
optional func contactPickerDidClose(_ picker: CNContactPicker)
```

## Parameters

- `picker`: The contact picker popover to be closed.

## See Also

### Dismissing the Picker Interface

- [contactPickerDidCancel(\_:)](contactpickerdidcancel%28__%29.md): In iOS, called when the user taps Cancel.
- [contactPickerWillClose(\_:)](contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.

# contactPickerDidClose: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

In macOS, called when the contact picker’s popover has closed.

## Declaration

```objectivec
- (void) contactPickerDidClose:(CNContactPicker *) picker;
```

## Parameters

- `picker`: The contact picker popover to be closed.

## See Also

### Dismissing the Picker Interface

- [contactPickerDidCancel:](contactpickerdidcancel%28__%29.md): In iOS, called when the user taps Cancel.
- [contactPickerWillClose:](contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.
