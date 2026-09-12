> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/groupnames](https://developer.apple.com/documentation/intents/insearchformessagesintent/groupnames)

# groupNames (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The names of any groups associated with the message.

> Use speakableGroupNames instead

## Declaration

```swift
var groupNames: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages that sent to the specified groups. Use the operator in the [groupNamesOperator](groupnamesoperator.md) property to determine whether to search for messages containing all, some, or none of the specified groups.

## See Also

### Deprecated Symbols

- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:)](init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_speakablegroupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:groupNames:)](init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [groupNamesOperator](groupnamesoperator.md): Deprecated. The operator that defines how to use the group names in the search criteria.

# groupNames (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The names of any groups associated with the message.

> Use speakableGroupNames instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * groupNames;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * groupNames;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages that sent to the specified groups. Use the operator in the [groupNamesOperator](groupnamesoperator.md) property to determine whether to search for messages containing all, some, or none of the specified groups.

## See Also

### Deprecated Symbols

- [groupNamesOperator](groupnamesoperator.md): Deprecated. The operator that defines how to use the group names in the search criteria.
