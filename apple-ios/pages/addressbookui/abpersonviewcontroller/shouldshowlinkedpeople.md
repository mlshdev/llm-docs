> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/shouldshowlinkedpeople](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/shouldshowlinkedpeople)

# shouldShowLinkedPeople (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Indicates whether the person view should display data from person records that are linked with the person record being displayed.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var shouldShowLinkedPeople: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Linked records represent the same actual person. They often come from different sources, but may also come from the same source.

## See Also

### Displaying Person Properties

- [displayedPerson](displayedperson.md): Deprecated. The person displayed by the person view.
- [displayedProperties](displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.

# shouldShowLinkedPeople (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 9.0) · iPadOS 4.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Indicates whether the person view should display data from person records that are linked with the person record being displayed.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldShowLinkedPeople;
```

<a id="Discussion"></a>

## Discussion

Linked records represent the same actual person. They often come from different sources, but may also come from the same source.

## See Also

### Displaying Person Properties

- [displayedPerson](displayedperson.md): Deprecated. The person displayed by the person view.
- [displayedProperties](displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.
