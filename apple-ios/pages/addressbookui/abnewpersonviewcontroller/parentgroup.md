> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontroller/parentgroup](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/parentgroup)

# parentGroup (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. Specifies the group to which to add the new contact on save.

> Use [parentGroup](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/parentgroup) instead.

## Declaration

```swift
var parentGroup: ABRecord? { get set }
```

<a id="Discussion"></a>

## Discussion

You must set [addressBook](addressbook.md) before you can set this property.

## See Also

### Configuring New Person Views

- [addressBook](addressbook.md): Deprecated. Optional. The address book to which the new contact is added.

# parentGroup (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. Specifies the group to which to add the new contact on save.

> Use [parentGroup](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/parentgroup) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABRecordRef parentGroup;
```

<a id="Discussion"></a>

## Discussion

You must set [addressBook](addressbook.md) before you can set this property.

## See Also

### Configuring New Person Views

- [addressBook](addressbook.md): Deprecated. Optional. The address book to which the new contact is added.
