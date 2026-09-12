> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller(_:shouldperformdefaultactionforperson:property:identifier:)](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller(_:shouldperformdefaultactionforperson:property:identifier:))

# unknownPersonViewController(\_:shouldPerformDefaultActionForPerson:property:identifier:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Sent when the user selects a property value of the person displayed in a person view controller.

## Declaration

```swift
optional func unknownPersonViewController(_ personViewController: ABUnknownPersonViewController, shouldPerformDefaultActionForPerson person: ABRecord, property: ABPropertyID, identifier: ABMultiValueIdentifier) -> Bool
```

## Parameters

- `person`: The person `unknownPersonViewController` is displaying.
- `property`: The property whose value the user selected.
- `identifier`: The identifier for the value the user selected if `property` is a multivalue property; otherwise, `kABMultiValueInvalidIdentifier`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `unknownPersonViewController` should perform its default action. Your application may quit as a result of this action. [false](https://developer.apple.com/documentation/swift/false): if `unknownPersonViewController` should do nothing. The delegate may perform custom action processing.

## See Also

### Responding to User Events

- [unknownPersonViewController(\_:didResolveToPerson:)](unknownpersonviewcontroller%28__didresolvetoperson_%29.md): Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.

# unknownPersonViewController:shouldPerformDefaultActionForPerson:property:identifier: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Sent when the user selects a property value of the person displayed in a person view controller.

## Declaration

```objectivec
- (BOOL) unknownPersonViewController:(ABUnknownPersonViewController *) personViewController shouldPerformDefaultActionForPerson:(ABRecordRef) person property:(ABPropertyID) property identifier:(ABMultiValueIdentifier) identifier;
```

## Parameters

- `person`: The person `unknownPersonViewController` is displaying.
- `property`: The property whose value the user selected.
- `identifier`: The identifier for the value the user selected if `property` is a multivalue property; otherwise, `kABMultiValueInvalidIdentifier`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `unknownPersonViewController` should perform its default action. Your application may quit as a result of this action. [false](https://developer.apple.com/documentation/swift/false): if `unknownPersonViewController` should do nothing. The delegate may perform custom action processing.

## See Also

### Responding to User Events

- [unknownPersonViewController:didResolveToPerson:](unknownpersonviewcontroller%28__didresolvetoperson_%29.md): Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.
