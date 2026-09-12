> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontrollerdelegate/newpersonviewcontroller(_:didcompletewithnewperson:)](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontrollerdelegate/newpersonviewcontroller(_:didcompletewithnewperson:))

# newPersonViewController(\_:didCompleteWithNewPerson:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Sent when the user taps Save or Cancel. If the user tapped Save, the current address book has been saved to the Address Book database.

## Declaration

```swift
func newPersonViewController(_ newPersonView: ABNewPersonViewController, didCompleteWithNewPerson person: ABRecord?)
```

## Parameters

- `person`: On Save, the newly created (and saved) person record.

  On Cancel, `NULL`.

<a id="Discussion"></a>

## Discussion

If the user tapped Save, pending changes in the current address book (`ABAddressBook`) have been saved by the time this message is sent to the receiver.

The receiver must dismiss `newPersonViewController`.

# newPersonViewController:didCompleteWithNewPerson: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

Sent when the user taps Save or Cancel. If the user tapped Save, the current address book has been saved to the Address Book database.

## Declaration

```objectivec
- (void) newPersonViewController:(ABNewPersonViewController *) newPersonView didCompleteWithNewPerson:(ABRecordRef) person;
```

## Parameters

- `person`: On Save, the newly created (and saved) person record.

  On Cancel, `NULL`.

<a id="Discussion"></a>

## Discussion

If the user tapped Save, pending changes in the current address book (`ABAddressBook`) have been saved by the time this message is sent to the receiver.

The receiver must dismiss `newPersonViewController`.
