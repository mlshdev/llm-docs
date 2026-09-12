> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontroller/displayedperson](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/displayedperson)

# displayedPerson (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. Specifies the person properties that the new-person view controller pre-fills in its views.

> Use [contact](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contact) instead.

## Declaration

```swift
var displayedPerson: ABRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property has no person properties, the new-person view controller does not pre-fill properties in its views.

# displayedPerson (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. Specifies the person properties that the new-person view controller pre-fills in its views.

> Use [contact](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contact) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABRecordRef displayedPerson;
```

<a id="Discussion"></a>

## Discussion

When this property has no person properties, the new-person view controller does not pre-fill properties in its views.
