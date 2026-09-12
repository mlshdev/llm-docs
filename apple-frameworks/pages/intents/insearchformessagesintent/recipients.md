> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformessagesintent/recipients](https://developer.apple.com/documentation/intents/insearchformessagesintent/recipients)

# recipients (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The contacts who are the recipients of the messages.

## Declaration

```swift
var recipients: [INPerson]? { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only messages received by the specified users. Use the operator in the [recipientsOperator](recipientsoperator.md) property to determine whether to search for messages containing all, some, or none of the specified recipients.

## See Also

### Getting the Senders and Recipients

- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.

# recipients (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The contacts who are the recipients of the messages.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * recipients;
```

<a id="Discussion"></a>

## Discussion

When this property contains one or more [INPerson](../inperson.md) objects, your search should return only messages received by the specified users. Use the operator in the [recipientsOperator](recipientsoperator.md) property to determine whether to search for messages containing all, some, or none of the specified recipients.

## See Also

### Getting the Senders and Recipients

- [recipientsOperator](recipientsoperator.md): The operator that defines how to use the recipients in the search criteria.
- [senders](senders.md): The senders to include or exclude when you search for messages.
- [sendersOperator](sendersoperator.md): The operator that defines how to use the senders in the search criteria.
- [speakableGroupNames](speakablegroupnames.md): The names of any groups associated with the message.
- [speakableGroupNamesOperator](speakablegroupnamesoperator.md): The operator that defines how to use the group names in the search criteria.
