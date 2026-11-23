> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/conversationidentifier

# conversationIdentifier (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The app-specific identifier for the message conversation.

## Declaration

```swift
var conversationIdentifier: String? { get set }
```

<a id="discussion"></a>

## Discussion

This property represents a unique string your app can use to identify the message conversation. CarPlay passes this string to your SiriKit intents during the message flows, but doesn’t use it otherwise. If you initialized the message list item with a contact, the value of this property is `nil`.

## See Also

### Getting the message context

- [phoneOrEmailAddress](phoneoremailaddress.md): The phone or email address of the contact.

# conversationIdentifier (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The app-specific identifier for the message conversation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * conversationIdentifier;
```

<a id="discussion"></a>

## Discussion

This property represents a unique string your app can use to identify the message conversation. CarPlay passes this string to your SiriKit intents during the message flows, but doesn’t use it otherwise. If you initialized the message list item with a contact, the value of this property is `nil`.

## See Also

### Getting the message context

- [phoneOrEmailAddress](phoneoremailaddress.md): The phone or email address of the contact.
