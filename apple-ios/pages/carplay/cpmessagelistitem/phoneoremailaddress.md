> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/phoneoremailaddress

# phoneOrEmailAddress (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The phone or email address of the contact.

## Declaration

```swift
var phoneOrEmailAddress: String? { get set }
```

<a id="discussion"></a>

## Discussion

This property represents the primary way to communicate with the contact. CarPlay passes this string to your SiriKit intents during message flows, but doesn’t use it otherwise. If you initialized the message list item with a conversation identifier, the value of this property is `nil`.

## See Also

### Getting the message context

- [conversationIdentifier](conversationidentifier.md): The app-specific identifier for the message conversation.

# phoneOrEmailAddress (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The phone or email address of the contact.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * phoneOrEmailAddress;
```

<a id="discussion"></a>

## Discussion

This property represents the primary way to communicate with the contact. CarPlay passes this string to your SiriKit intents during message flows, but doesn’t use it otherwise. If you initialized the message list item with a conversation identifier, the value of this property is `nil`.

## See Also

### Getting the message context

- [conversationIdentifier](conversationidentifier.md): The app-specific identifier for the message conversation.
