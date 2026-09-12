> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/notificationidentifiers](https://developer.apple.com/documentation/intents/insearchformessagesintent/notificationidentifiers)

# notificationIdentifiers (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The notification identifiers to locate in your search.

## Declaration

```swift
var notificationIdentifiers: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return [UNNotification](../../usernotifications/unnotification.md) objects whose IDs match the specified strings. The [UNNotificationRequest](../../usernotifications/unnotificationrequest.md) object, which is part of the notification, stores the notification’s identifier. You can use these identifiers to search your app’s delivered local and remote notifications.

The value of the [notificationIdentifiersOperator](notificationidentifiersoperator.md) property determines whether searches should be for all, some, or none of the specified notification identifiers.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.

# notificationIdentifiers (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The notification identifiers to locate in your search.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * notificationIdentifiers;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * notificationIdentifiers;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [NSString](../../foundation/nsstring.md) objects, your search should return [UNNotification](../../usernotifications/unnotification.md) objects whose IDs match the specified strings. The [UNNotificationRequest](../../usernotifications/unnotificationrequest.md) object, which is part of the notification, stores the notification’s identifier. You can use these identifiers to search your app’s delivered local and remote notifications.

The value of the [notificationIdentifiersOperator](notificationidentifiersoperator.md) property determines whether searches should be for all, some, or none of the specified notification identifiers.

## See Also

### Specifying Message Identifiers

- [identifiers](identifiers.md): The message identifiers to locate in your search.
- [identifiersOperator](identifiersoperator.md): The operator that defines how to use the identifiers in the search criteria.
- [conversationIdentifiers](conversationidentifiers.md): The conversation identifiers to locate in your search.
- [conversationIdentifiersOperator](conversationidentifiersoperator.md): The operator that defines how to use the conversation identifiers in the search criteria.
- [notificationIdentifiersOperator](notificationidentifiersoperator.md): The operator that defines how to use the notification identifiers in the search criteria.
