> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller/predicateforselectionofperson](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/predicateforselectionofperson)

# predicateForSelectionOfPerson (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optionally determines if a selected person should be returned to the app or displayed.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```swift
@NSCopying var predicateForSelectionOfPerson: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

If the predicate evaluates to true for the selected person, the selected person is returned to the app. If the predicate evaluates to false, the selected person is displayed.

If this property is `nil`, the person is returned to the app if the delegate implements [peoplePickerNavigationController(\_:didSelectPerson:)](../abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_%29.md), and the person is displayed if the delegate implements [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](../abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md).

## See Also

### Customizing Display and Selection

- [predicateForEnablingPerson](predicateforenablingperson.md): Deprecated. Optionally determines if a person can be selected.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed

# predicateForSelectionOfPerson (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optionally determines if a selected person should be returned to the app or displayed.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicateForSelectionOfPerson;
```

<a id="Discussion"></a>

## Discussion

If the predicate evaluates to true for the selected person, the selected person is returned to the app. If the predicate evaluates to false, the selected person is displayed.

If this property is `nil`, the person is returned to the app if the delegate implements [peoplePickerNavigationController:didSelectPerson:](../abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_%29.md), and the person is displayed if the delegate implements [peoplePickerNavigationController:didSelectPerson:property:identifier:](../abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md).

## See Also

### Customizing Display and Selection

- [predicateForEnablingPerson](predicateforenablingperson.md): Deprecated. Optionally determines if a person can be selected.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed
