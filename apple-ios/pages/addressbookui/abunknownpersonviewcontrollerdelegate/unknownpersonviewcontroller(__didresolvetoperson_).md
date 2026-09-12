> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller(_:didresolvetoperson:)](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller(_:didresolvetoperson:))

# unknownPersonViewController(\_:didResolveToPerson:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.

## Declaration

```swift
func unknownPersonViewController(_ unknownCardViewController: ABUnknownPersonViewController, didResolveToPerson person: ABRecord?)
```

## Parameters

- `person`: The contact the user created or to which they added information. This record is saved in the Address Book database.

  `NULL` when the user cancelled the interaction.

## See Also

### Responding to User Events

- [unknownPersonViewController(\_:shouldPerformDefaultActionForPerson:property:identifier:)](unknownpersonviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.

# unknownPersonViewController:didResolveToPerson: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.

## Declaration

```objectivec
- (void) unknownPersonViewController:(ABUnknownPersonViewController *) unknownCardViewController didResolveToPerson:(ABRecordRef) person;
```

## Parameters

- `person`: The contact the user created or to which they added information. This record is saved in the Address Book database.

  `NULL` when the user cancelled the interaction.

## See Also

### Responding to User Events

- [unknownPersonViewController:shouldPerformDefaultActionForPerson:property:identifier:](unknownpersonviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.
