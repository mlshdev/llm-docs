> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/displayedproperties](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/displayedproperties)

# displayedProperties (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var displayedProperties: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NULL`.

Name properties are always displayed.

The properties are specified using an array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects representing [ABPropertyID](https://developer.apple.com/documentation/addressbook/abpropertyid) values.

To have the receiver display a single property for [displayedPerson](displayedperson.md), such as telephone number, set `displayedProperties` to an array with a single value, such as `kABPersonPhoneProperty`.

## See Also

### Displaying Person Properties

- [displayedPerson](displayedperson.md): Deprecated. The person displayed by the person view.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.

# displayedProperties (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Identifies the set of properties (such as name or telephone number) of [displayedPerson](displayedperson.md) the receiver displays.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSNumber *> * displayedProperties;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NULL`.

Name properties are always displayed.

The properties are specified using an array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects representing [ABPropertyID](https://developer.apple.com/documentation/addressbook/abpropertyid) values.

To have the receiver display a single property for [displayedPerson](displayedperson.md), such as telephone number, set `displayedProperties` to an array with a single value, such as `kABPersonPhoneProperty`.

## See Also

### Displaying Person Properties

- [displayedPerson](displayedperson.md): Deprecated. The person displayed by the person view.
- [shouldShowLinkedPeople](shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.
