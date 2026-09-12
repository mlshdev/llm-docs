> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerviewcontroller/predicateforselectionofcontact](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/predicateforselectionofcontact)

# predicateForSelectionOfContact (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to control the return of the selected contact.

## Declaration

```swift
@NSCopying var predicateForSelectionOfContact: NSPredicate? { get set }
```

<a id="discussion"></a>

## Discussion

This property determines whether a selected contact should be returned (when the predicate evaluates to TRUE), or a default action for the property should be performed (when the predicate evaluates to FALSE). By default the contact picker view controller displays the contact’s detail card when a contact is selected. To learn about predicates, see [NSPredicate](../../foundation/nspredicate.md).

## See Also

### Predicates For Selecting Contacts

- [predicateForEnablingContact](predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.

# predicateForSelectionOfContact (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to control the return of the selected contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicateForSelectionOfContact;
```

<a id="discussion"></a>

## Discussion

This property determines whether a selected contact should be returned (when the predicate evaluates to TRUE), or a default action for the property should be performed (when the predicate evaluates to FALSE). By default the contact picker view controller displays the contact’s detail card when a contact is selected. To learn about predicates, see [NSPredicate](../../foundation/nspredicate.md).

## See Also

### Predicates For Selecting Contacts

- [predicateForEnablingContact](predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.
