> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/speakablegroupnamesoperator](https://developer.apple.com/documentation/intents/insearchformessagesintent/speakablegroupnamesoperator)

# speakableGroupNamesOperator (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The operator that defines how to use the group names in the search criteria.

## Declaration

```swift
var speakableGroupNamesOperator: INConditionalOperator { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the groups listed in the [speakableGroupNames](speakablegroupnames.md) property.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.

# speakableGroupNamesOperator (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The operator that defines how to use the group names in the search criteria.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INConditionalOperator speakableGroupNamesOperator;
```

```objectivec
@property (atomic, assign, readonly) INConditionalOperator speakableGroupNamesOperator;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the message must contain all, some, or none of the groups listed in the [speakableGroupNames](speakablegroupnames.md) property.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
