> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messageui/mfmessagecomposeviewcontroller/subject

# subject (Swift)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial subject of the message.

## Declaration

```swift
var subject: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If you want to provide an initial subject for a message, do so before you display it. After the message is displayed you cannot change the value of this property.

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [body](body.md): The initial content of the message.
- [message](message.md): A message object from your iMessage app extension.

# subject (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The initial subject of the message.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subject;
```

<a id="Discussion"></a>

## Discussion

If you want to provide an initial subject for a message, do so before you display it. After the message is displayed you cannot change the value of this property.

## See Also

### Setting the initial message information

- [recipients](recipients.md): An array of strings that contains the initial recipients of the message.
- [body](body.md): The initial content of the message.
- [message](message.md): A message object from your iMessage app extension.
