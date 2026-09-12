> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontrollerdelegate/contactviewcontroller(_:shouldperformdefaultactionfor:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontrollerdelegate/contactviewcontroller(_:shouldperformdefaultactionfor:))

# contactViewController(\_:shouldPerformDefaultActionFor:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the user selects a property.

## Declaration

```swift
optional func contactViewController(_ viewController: CNContactViewController, shouldPerformDefaultActionFor property: CNContactProperty) -> Bool
```

## Parameters

- `viewController`: The view controller presenting the contact.
- `property`: The property ([CNContactProperty](../../contacts/cncontactproperty.md)) selected by the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to call the default action performed for the property, otherwise return [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Implement this method to determine the resulting behavior when a property is selected. Return [false](https://developer.apple.com/documentation/swift/false) if you do not want anything to be done or if you are handling the actions yourself.

## See Also

### Responding to User Events

- [contactViewController(\_:didCompleteWith:)](contactviewcontroller%28__didcompletewith_%29.md): Called when the view has been presented.

# contactViewController:shouldPerformDefaultActionForContactProperty: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called when the user selects a property.

## Declaration

```objectivec
- (BOOL) contactViewController:(CNContactViewController *) viewController shouldPerformDefaultActionForContactProperty:(CNContactProperty *) property;
```

## Parameters

- `viewController`: The view controller presenting the contact.
- `property`: The property ([CNContactProperty](../../contacts/cncontactproperty.md)) selected by the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to call the default action performed for the property, otherwise return [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Implement this method to determine the resulting behavior when a property is selected. Return [false](https://developer.apple.com/documentation/swift/false) if you do not want anything to be done or if you are handling the actions yourself.

## See Also

### Responding to User Events

- [contactViewController:didCompleteWithContact:](contactviewcontroller%28__didcompletewith_%29.md): Called when the view has been presented.
