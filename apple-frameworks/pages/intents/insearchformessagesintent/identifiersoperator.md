> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/identifiersoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/identifiersoperator)

# identifiersOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the identifiers in the search criteria.

## Declaration

```swift
var identifiersOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the identifiers listed in the [identifiers](identifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

# identifiersOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the identifiers in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator identifiersOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator identifiersOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the identifiers listed in the [identifiers](identifiers.md) property.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.
