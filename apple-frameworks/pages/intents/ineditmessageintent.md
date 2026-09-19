> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ineditmessageintent

# INEditMessageIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
class INEditMessageIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## Topics

### Initializers

- [init(messageIdentifier:editedContent:)](ineditmessageintent/init%28messageidentifier_editedcontent_%29.md)

### Instance Properties

- [editedContent](ineditmessageintent/editedcontent.md)
- [messageIdentifier](ineditmessageintent/messageidentifier.md)

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Editing a Message

- [INEditMessageIntentResponse](ineditmessageintentresponse.md)
- [INEditMessageIntentHandling](ineditmessageintenthandling.md)
- [INEditMessageIntentResponseCode](ineditmessageintentresponsecode.md)

# INEditMessageIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
@interface INEditMessageIntent : INIntent
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## Topics

### Instance Properties

- [editedContent](ineditmessageintent/editedcontent.md)
- [messageIdentifier](ineditmessageintent/messageidentifier.md)

### Instance Methods

- [initWithMessageIdentifier:editedContent:](ineditmessageintent/init%28messageidentifier_editedcontent_%29.md)

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Editing a Message

- [INEditMessageIntentResponse](ineditmessageintentresponse.md)
- [INEditMessageIntentHandling](ineditmessageintenthandling.md)
- [INEditMessageIntentResponseCode](ineditmessageintentresponsecode.md)
