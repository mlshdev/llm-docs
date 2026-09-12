> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/sendersoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/sendersoperator)

# sendersOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the senders in the search criteria.

## Declaration

```swift
var sendersOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain (or not contain) one of the people listed in the [senders](senders.md) property.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

# sendersOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The operator that defines how to use the senders in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator sendersOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator sendersOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain (or not contain) one of the people listed in the [senders](senders.md) property.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.
