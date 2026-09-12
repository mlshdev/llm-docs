> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/sortorder](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/sortorder)

# sortOrder (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The sort order for contacts.

## Declaration

```swift
var sortOrder: CNContactSortOrder { get set }
```

<a id="Discussion"></a>

## Discussion

The default sort order is `CNContactSortOrderNone`.

## See Also

### Configuring the Fetch Options

- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [unifyResults](unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# sortOrder (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The sort order for contacts.

## Declaration

```objectivec
@property (nonatomic) CNContactSortOrder sortOrder;
```

```objectivec
@property (atomic) CNContactSortOrder sortOrder;
```

<a id="Discussion"></a>

## Discussion

The default sort order is `CNContactSortOrderNone`.

## See Also

### Configuring the Fetch Options

- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [unifyResults](unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
