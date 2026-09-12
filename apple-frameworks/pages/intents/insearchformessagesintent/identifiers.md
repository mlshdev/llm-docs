> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/identifiers](https://developer.apple.com/documentation/intents/insearchformessagesintent/identifiers)

# identifiers (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The message identifiers to locate in your search.

## Declaration

```swift
var identifiers: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages whose IDs match the specified identifiers. The value of the [identifiersOperator](identifiersoperator.md) property determines whether searches should be for all, some, or none of the specified identifiers.

## See Also

### Specifying Message Identifiers

- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

# identifiers (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The message identifiers to locate in your search.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * identifiers;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * identifiers;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return only messages whose IDs match the specified identifiers. The value of the [identifiersOperator](identifiersoperator.md) property determines whether searches should be for all, some, or none of the specified identifiers.

## See Also

### Specifying Message Identifiers

- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiers](notificationidentifiers.md): The notification identifiers to locate in your search.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.
