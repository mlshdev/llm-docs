> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnfetchresult/currenthistorytoken](https://developer.apple.com/documentation/contacts/cnfetchresult/currenthistorytoken)

# currentHistoryToken (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An opaque token that indicates a point in history in the user’s Contacts database.

## Declaration

```swift
var currentHistoryToken: Data { get }
```

<a id="Discussion"></a>

## Discussion

Save this token after a successful change history fetch result in your app. Then, set the saved token in [startingToken](../cnchangehistoryfetchrequest/startingtoken.md) in a subsequent [CNChangeHistoryFetchRequest](../cnchangehistoryfetchrequest.md) to receive changes after that point in history.

## See Also

### Accessing results

- [value](value.md): The result of the fetch request, expressed as the value type you specify.

# currentHistoryToken (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An opaque token that indicates a point in history in the user’s Contacts database.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * currentHistoryToken;
```

<a id="Discussion"></a>

## Discussion

Save this token after a successful change history fetch result in your app. Then, set the saved token in [startingToken](../cnchangehistoryfetchrequest/startingtoken.md) in a subsequent [CNChangeHistoryFetchRequest](../cnchangehistoryfetchrequest.md) to receive changes after that point in history.

## See Also

### Accessing results

- [value](value.md): The result of the fetch request, expressed as the value type you specify.
