> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/body](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/body)

# body (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial content of the message.

## Declaration

```swift
var body: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If you want to provide initial content in the body of a message, do so before you display it. After the message is displayed you cannot change the value of this property.

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](subject.md): The initial subject of the message.
- [message](message.md): A message object from your iMessage app extension.

# body (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial content of the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * body;
```

<a id="Discussion"></a>

## Discussion

If you want to provide initial content in the body of a message, do so before you display it. After the message is displayed you cannot change the value of this property.

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [subject](subject.md): The initial subject of the message.
- [message](message.md): A message object from your iMessage app extension.
