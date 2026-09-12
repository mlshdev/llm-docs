> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmessagecomposeviewcontroller/recipients](https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/recipients)

# recipients (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of strings that contains the initial recipients of the message.

## Declaration

```swift
var recipients: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

If you want to provide an initial array of one or more recipients for a message, do so before you display it. After the message is displayed you cannot change the value of this property.

Each string in the array should contain the phone number of the intended recipient.

## See Also

### Setting the initial message information

- [subject](subject.md): The initial subject of the message.
- [body](body.md): The initial content of the message.
- [message](message.md): A message object from your iMessage app extension.

# recipients (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of strings that contains the initial recipients of the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * recipients;
```

<a id="Discussion"></a>

## Discussion

If you want to provide an initial array of one or more recipients for a message, do so before you display it. After the message is displayed you cannot change the value of this property.

Each string in the array should contain the phone number of the intended recipient.

## See Also

### Setting the initial message information

- [subject](subject.md): The initial subject of the message.
- [body](body.md): The initial content of the message.
- [message](message.md): A message object from your iMessage app extension.
