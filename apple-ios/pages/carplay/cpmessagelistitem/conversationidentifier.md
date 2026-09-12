> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmessagelistitem/conversationidentifier](https://developer.apple.com/documentation/carplay/cpmessagelistitem/conversationidentifier)

# conversationIdentifier (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The conversation’s unique identifier.

## Declaration

```swift
var conversationIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Provide the value that your app uses to identify the conversation. Siri passes this value to your app when the user selects the list item so that you can take any necessary action, such as, updating your message store to mark the conversation as read.

CarPlay doesn’t display this value to the user.

## See Also

### Managing the Message Context

- [phoneOrEmailAddress](phoneoremailaddress.md): The contact’s phone number or email address.

# conversationIdentifier (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The conversation’s unique identifier.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * conversationIdentifier;
```

<a id="Discussion"></a>

## Discussion

Provide the value that your app uses to identify the conversation. Siri passes this value to your app when the user selects the list item so that you can take any necessary action, such as, updating your message store to mark the conversation as read.

CarPlay doesn’t display this value to the user.

## See Also

### Managing the Message Context

- [phoneOrEmailAddress](phoneoremailaddress.md): The contact’s phone number or email address.
