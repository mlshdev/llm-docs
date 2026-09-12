> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/conversationidentifiers](https://developer.apple.com/documentation/intents/insearchformessagesintent/conversationidentifiers)

# conversationIdentifiers (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The conversation identifiers to locate in your search.

## Declaration

```swift
var conversationIdentifiers: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more strings, your search should return only messages with conversation IDs matching the specified identifiers. The value of the [conversationIdentifiersOperator](conversationidentifiersoperator.md) property determines whether searches should be for all, some, or none of the specified conversation identifiers.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

# conversationIdentifiers (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The conversation identifiers to locate in your search.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * conversationIdentifiers;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * conversationIdentifiers;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more strings, your search should return only messages with conversation IDs matching the specified identifiers. The value of the [conversationIdentifiersOperator](conversationidentifiersoperator.md) property determines whether searches should be for all, some, or none of the specified conversation identifiers.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.
