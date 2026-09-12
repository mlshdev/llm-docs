> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/message](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/message)

# message (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A message object from your iMessage app extension.

## Declaration

```swift
@NSCopying var message: MSMessage? { get set }
```

<a id="Discussion"></a>

## Discussion

If your app has an iMessage app extension, you can display your iMessage app within the message compose view, just as you would in the Messages app. To display your iMessage app, create and assign an [MSMessage](https://developer.apple.com/documentation/messages/msmessage) object to this property.

By default, this property is set to `nil`.

For more information on creating iMessage apps, see [Messages](https://developer.apple.com/documentation/messages).

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](subject.md): The initial subject of the message.
- [body](body.md): The initial content of the message.

# message (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A message object from your iMessage app extension.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MSMessage * message;
```

<a id="Discussion"></a>

## Discussion

If your app has an iMessage app extension, you can display your iMessage app within the message compose view, just as you would in the Messages app. To display your iMessage app, create and assign an [MSMessage](https://developer.apple.com/documentation/messages/msmessage) object to this property.

By default, this property is set to `nil`.

For more information on creating iMessage apps, see [Messages](https://developer.apple.com/documentation/messages).

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](subject.md): The initial subject of the message.
- [body](body.md): The initial content of the message.
