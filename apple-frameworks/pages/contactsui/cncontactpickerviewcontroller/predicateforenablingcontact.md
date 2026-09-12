> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerviewcontroller/predicateforenablingcontact](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/predicateforenablingcontact)

# predicateForEnablingContact (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to determine the contact selectability in the list of contacts.

## Declaration

```swift
@NSCopying var predicateForEnablingContact: NSPredicate? { get set }
```

<a id="discussion"></a>

## Discussion

You can set a value for this property to determine which contact should become selectable, such as `emailAddresses.@count > 0` to enable all the contacts that have an email address to become selectable. If no predicate is set for this property, all contacts become selectable. To learn about predicate syntax, see [NSPredicate](../../foundation/nspredicate.md).

## See Also

### Predicates For Selecting Contacts

- [predicateForSelectionOfContact](predicateforselectionofcontact.md): A predicate to control the return of the selected contact.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.

# predicateForEnablingContact (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A predicate to determine the contact selectability in the list of contacts.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicateForEnablingContact;
```

<a id="discussion"></a>

## Discussion

You can set a value for this property to determine which contact should become selectable, such as `emailAddresses.@count > 0` to enable all the contacts that have an email address to become selectable. If no predicate is set for this property, all contacts become selectable. To learn about predicate syntax, see [NSPredicate](../../foundation/nspredicate.md).

## See Also

### Predicates For Selecting Contacts

- [predicateForSelectionOfContact](predicateforselectionofcontact.md): A predicate to control the return of the selected contact.
- [predicateForSelectionOfProperty](predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.
