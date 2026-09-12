> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/contactidentifier](https://developer.apple.com/documentation/intents/inperson/contactidentifier)

# contactIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The Contacts database identifier for the person.

## Declaration

```swift
var contactIdentifier: String? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  When donating instances of [INSendMessageIntent](../insendmessageintent.md), specify a value for this property for each recipient. This enables Siri to choose and interact with the appropriate messaging app when a person asks to send a message.

If your app doesn’t have permission to access the Contacts database, this property returns `nil`. Otherwise, it returns the value you specify when creating the person.

## See Also

### Accessing app-specific identifiers

- [customIdentifier](customidentifier.md): The unique identifier that your app uses to identify the person.

# contactIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The Contacts database identifier for the person.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * contactIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * contactIdentifier;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  When donating instances of [INSendMessageIntent](../insendmessageintent.md), specify a value for this property for each recipient. This enables Siri to choose and interact with the appropriate messaging app when a person asks to send a message.

If your app doesn’t have permission to access the Contacts database, this property returns `nil`. Otherwise, it returns the value you specify when creating the person.

## See Also

### Accessing app-specific identifiers

- [customIdentifier](customidentifier.md): The unique identifier that your app uses to identify the person.
