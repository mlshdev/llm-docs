> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerviewcontroller/predicateforselectionofproperty](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/predicateforselectionofproperty)

# predicateForSelectionOfProperty (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to control the properties of the selected contact.

## Declaration

```swift
@NSCopying var predicateForSelectionOfProperty: NSPredicate? { get set }
```

<a id="discussion"></a>

## Discussion

This property determines whether a selected contact should be returned (when the predicate evaluates to TRUE), or a default action for the property should be performed (when the predicate evaluates to FALSE). By default the contact picker view controller returns the first selected property of the contact. This predicate is evaluated on the [CNContactProperty](../../contacts/cncontactproperty.md) property that is being selected, such as `(key == 'emailAddresses') AND (value LIKE '*@apple.com')` to return email address of the contact if the address contains the string “@apple.com”.

## See Also

### Predicates For Selecting Contacts

- [predicateForEnablingContact](predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfContact](predicateforselectionofcontact.md): A predicate to control the return of the selected contact.

# predicateForSelectionOfProperty (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to control the properties of the selected contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicateForSelectionOfProperty;
```

<a id="discussion"></a>

## Discussion

This property determines whether a selected contact should be returned (when the predicate evaluates to TRUE), or a default action for the property should be performed (when the predicate evaluates to FALSE). By default the contact picker view controller returns the first selected property of the contact. This predicate is evaluated on the [CNContactProperty](../../contacts/cncontactproperty.md) property that is being selected, such as `(key == 'emailAddresses') AND (value LIKE '*@apple.com')` to return email address of the contact if the address contains the string “@apple.com”.

## See Also

### Predicates For Selecting Contacts

- [predicateForEnablingContact](predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfContact](predicateforselectionofcontact.md): A predicate to control the return of the selected contact.
