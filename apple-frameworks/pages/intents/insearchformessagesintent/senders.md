> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/senders](https://developer.apple.com/documentation/intents/insearchformessagesintent/senders)

# senders (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The senders to include or exclude when you search for messages.

## Declaration

```swift
var senders: [INPerson]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only messages sent by the specified users. Use the [sendersOperator](sendersoperator.md) property to determine whether to search for messages sent by any of the users, or not sent by any of the users.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

# senders (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The senders to include or exclude when you search for messages.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * senders;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * senders;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only messages sent by the specified users. Use the [sendersOperator](sendersoperator.md) property to determine whether to search for messages sent by any of the users, or not sent by any of the users.

## See Also

### Getting the Senders and Recipients

- [recipients](recipients.md): The contacts who are the recipients of the messages.
- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.
