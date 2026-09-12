> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/displayedperson](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/displayedperson)

# displayedPerson (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The person displayed by the person view.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var displayedPerson: ABRecord { get set }
```

<a id="Discussion"></a>

## Discussion

The receiver displays the properties of this person record that are present in [displayedProperties](displayedproperties.md).

## See Also

### Displaying Person Properties

- [displayedProperties](displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.

# displayedPerson (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The person displayed by the person view.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite) ABRecordRef displayedPerson;
```

<a id="Discussion"></a>

## Discussion

The receiver displays the properties of this person record that are present in [displayedProperties](displayedproperties.md).

## See Also

### Displaying Person Properties

- [displayedProperties](displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.
