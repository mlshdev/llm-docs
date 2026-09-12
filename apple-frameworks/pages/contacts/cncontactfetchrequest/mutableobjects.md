> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/mutableobjects](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/mutableobjects)

# mutableObjects (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to return mutable contacts.

## Declaration

```swift
var mutableObjects: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the fetch returns [CNMutableContact](../cnmutablecontact.md) objects; otherwise it returns [CNContact](../cncontact.md) objects. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Fetch Options

- [unifyResults](unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [sortOrder](sortorder.md): The sort order for contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# mutableObjects (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether to return mutable contacts.

## Declaration

```objectivec
@property (nonatomic) BOOL mutableObjects;
```

```objectivec
@property (atomic) BOOL mutableObjects;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the fetch returns [CNMutableContact](../cnmutablecontact.md) objects; otherwise it returns [CNContact](../cncontact.md) objects. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Fetch Options

- [unifyResults](unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [sortOrder](sortorder.md): The sort order for contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
