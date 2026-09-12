> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest/predicate](https://developer.apple.com/documentation/contacts/cncontactfetchrequest/predicate)

# predicate (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The predicate to match contacts against.

## Declaration

```swift
@NSCopying var predicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to `nil` to match all contacts or use the search predicates in [CNContact](../cncontact.md). Compound predicates are not supported.

# predicate (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The predicate to match contacts against.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSPredicate * predicate;
```

```objectivec
@property (atomic, copy, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to `nil` to match all contacts or use the search predicates in [CNContact](../cncontact.md). Compound predicates are not supported.
