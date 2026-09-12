> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/unifyresults](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/unifyresults)

# unifyResults (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to return linked contacts as unified contacts.

## Declaration

```swift
var unifyResults: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A unified contact is an aggregation of properties from a set of linked individual contacts. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the fetch returns unified contacts; otherwise, it returns individual contacts. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Fetch Options

- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [sortOrder](sortorder.md): The sort order for contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.

# unifyResults (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether to return linked contacts as unified contacts.

## Declaration

```objectivec
@property (nonatomic) BOOL unifyResults;
```

```objectivec
@property (atomic) BOOL unifyResults;
```

<a id="Discussion"></a>

## Discussion

A unified contact is an aggregation of properties from a set of linked individual contacts. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the fetch returns unified contacts; otherwise, it returns individual contacts. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the Fetch Options

- [mutableObjects](mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [sortOrder](sortorder.md): The sort order for contacts.
- [CNContactSortOrder](../cncontactsortorder.md): Indicates the sorting order for contacts.
