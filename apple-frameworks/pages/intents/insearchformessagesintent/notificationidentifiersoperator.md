> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/notificationidentifiersoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/notificationidentifiersoperator)

# notificationIdentifiersOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the notification identifiers in the search criteria.

## Declaration

```swift
var notificationIdentifiersOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the identifiers in the [notificationIdentifiers](notificationidentifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.

# notificationIdentifiersOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the notification identifiers in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator notificationIdentifiersOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator notificationIdentifiersOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the identifiers in the [notificationIdentifiers](notificationidentifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
