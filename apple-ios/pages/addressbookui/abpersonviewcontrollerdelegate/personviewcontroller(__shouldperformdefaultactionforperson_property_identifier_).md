> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontrollerdelegate/personviewcontroller(_:shouldperformdefaultactionforperson:property:identifier:)](https://developer.apple.com/documentation/addressbookui/abpersonviewcontrollerdelegate/personviewcontroller(_:shouldperformdefaultactionforperson:property:identifier:))

# personViewController(\_:shouldPerformDefaultActionForPerson:property:identifier:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Sent when the user selects a property value of the person displayed in a person view controller.

## Declaration

```swift
func personViewController(_ personViewController: ABPersonViewController, shouldPerformDefaultActionForPerson person: ABRecord, property: ABPropertyID, identifier: ABMultiValueIdentifier) -> Bool
```

## Parameters

- `personViewController`: The sender.
- `person`: The person `personViewController` is displaying.
- `property`: The property whose value the user selected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `personViewController` should perform its default action. Your application may quit as a result of this action. [false](https://developer.apple.com/documentation/swift/false): if `personViewController` should do nothing. The delegate may perform custom action processing.

# personViewController:shouldPerformDefaultActionForPerson:property:identifier: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

Sent when the user selects a property value of the person displayed in a person view controller.

## Declaration

```objectivec
- (BOOL) personViewController:(ABPersonViewController *) personViewController shouldPerformDefaultActionForPerson:(ABRecordRef) person property:(ABPropertyID) property identifier:(ABMultiValueIdentifier) identifier;
```

## Parameters

- `personViewController`: The sender.
- `person`: The person `personViewController` is displaying.
- `property`: The property whose value the user selected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `personViewController` should perform its default action. Your application may quit as a result of this action. [false](https://developer.apple.com/documentation/swift/false): if `personViewController` should do nothing. The delegate may perform custom action processing.
