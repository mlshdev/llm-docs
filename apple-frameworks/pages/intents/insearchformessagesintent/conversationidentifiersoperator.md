> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/conversationidentifiersoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/conversationidentifiersoperator)

# conversationIdentifiersOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The operator that defines how to use the conversation identifiers in the search criteria.

## Declaration

```swift
var conversationIdentifiersOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the conversation identifiers listed in the [conversationIdentifiers](conversationidentifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

# conversationIdentifiersOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The operator that defines how to use the conversation identifiers in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator conversationIdentifiersOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator conversationIdentifiersOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the conversation identifiers listed in the [conversationIdentifiers](conversationidentifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.
