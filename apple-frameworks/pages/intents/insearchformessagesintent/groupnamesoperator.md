> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/groupnamesoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/groupnamesoperator)

# groupNamesOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The operator that defines how to use the group names in the search criteria.

> Use speakableGroupNamesOperator instead

## Declaration

```swift
var groupNamesOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the groups listed in the [groupNames](groupnames.md) property.

## See Also

### Deprecated Symbols

- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:speakableGroupNames:)](init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_speakablegroupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [init(recipients:senders:searchTerms:attributes:dateTimeRange:identifiers:notificationIdentifiers:groupNames:)](init%28recipients_senders_searchterms_attributes_datetimerange_identifiers_notificationidentifiers_groupnames_%29.md): Deprecated. Creates a *search messages* intent object with the specified search criteria.
- [groupNames](groupnames.md): Deprecated. The names of any groups associated with the message.

# groupNamesOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

The operator that defines how to use the group names in the search criteria.

> Use speakableGroupNamesOperator instead

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator groupNamesOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator groupNamesOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the groups listed in the [groupNames](groupnames.md) property.

## See Also

### Deprecated Symbols

- [groupNames](groupnames.md): Deprecated. The names of any groups associated with the message.
