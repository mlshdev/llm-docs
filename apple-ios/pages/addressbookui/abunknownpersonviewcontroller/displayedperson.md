> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontroller/displayedperson](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/displayedperson)

# displayedPerson (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies a person record whose properties are displayed by the view controller.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var displayedPerson: ABRecord { get set }
```

<a id="Discussion"></a>

## Discussion

All the properties of `displayedPerson` are displayed by the view controller.

## See Also

### Displaying Person Properties

- [alternateName](alternatename.md): Deprecated. Provides a value that is displayed instead of the first and last name.
- [message](message.md): Deprecated. Text displayed below [alternateName](alternatename.md).

# displayedPerson (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies a person record whose properties are displayed by the view controller.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite) ABRecordRef displayedPerson;
```

<a id="Discussion"></a>

## Discussion

All the properties of `displayedPerson` are displayed by the view controller.

## See Also

### Displaying Person Properties

- [alternateName](alternatename.md): Deprecated. Provides a value that is displayed instead of the first and last name.
- [message](message.md): Deprecated. Text displayed below [alternateName](alternatename.md).
