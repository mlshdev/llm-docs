> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/speakablegroupnames](https://developer.apple.com/documentation/intents/insearchformessagesintent/speakablegroupnames)

# speakableGroupNames (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The names of any groups associated with the message.

## Declaration

```swift
var speakableGroupNames: [INSpeakableString]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more strings, your search should return only messages that sent to the specified groups. Use the operator in the [speakableGroupNamesOperator](speakablegroupnamesoperator.md) property to determine whether to search for messages containing all, some, or none of the specified groups.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

# speakableGroupNames (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The names of any groups associated with the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INSpeakableString *> * speakableGroupNames;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INSpeakableString *> * speakableGroupNames;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more strings, your search should return only messages that sent to the specified groups. Use the operator in the [speakableGroupNamesOperator](speakablegroupnamesoperator.md) property to determine whether to search for messages containing all, some, or none of the specified groups.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.
