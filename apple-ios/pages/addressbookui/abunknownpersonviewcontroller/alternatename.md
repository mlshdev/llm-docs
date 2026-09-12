> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontroller/alternatename](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/alternatename)

# alternateName (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides a value that is displayed instead of the first and last name.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var alternateName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The alternate name is only for display. It is not saved if this contact is added to the address book database.

## See Also

### Displaying Person Properties

- [message](message.md): Deprecated. Text displayed below [alternateName](alternatename.md).
- [displayedPerson](displayedperson.md): Deprecated. Specifies a person record whose properties are displayed by the view controller.

# alternateName (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides a value that is displayed instead of the first and last name.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * alternateName;
```

<a id="Discussion"></a>

## Discussion

The alternate name is only for display. It is not saved if this contact is added to the address book database.

## See Also

### Displaying Person Properties

- [message](message.md): Deprecated. Text displayed below [alternateName](alternatename.md).
- [displayedPerson](displayedperson.md): Deprecated. Specifies a person record whose properties are displayed by the view controller.
