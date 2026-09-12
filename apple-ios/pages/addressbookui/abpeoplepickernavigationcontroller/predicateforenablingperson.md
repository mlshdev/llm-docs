> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller/predicateforenablingperson](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/predicateforenablingperson)

# predicateForEnablingPerson (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optionally determines if a person can be selected.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```swift
@NSCopying var predicateForEnablingPerson: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

If not set, all persons are selectable.

## See Also

### Customizing Display and Selection

- [predicateForSelectionOfPerson](predicateforselectionofperson.md): Deprecated. Optionally determines if a selected person should be returned to the app or displayed.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed

# predicateForEnablingPerson (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optionally determines if a person can be selected.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicateForEnablingPerson;
```

<a id="Discussion"></a>

## Discussion

If not set, all persons are selectable.

## See Also

### Customizing Display and Selection

- [predicateForSelectionOfPerson](predicateforselectionofperson.md): Deprecated. Optionally determines if a selected person should be returned to the app or displayed.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed
