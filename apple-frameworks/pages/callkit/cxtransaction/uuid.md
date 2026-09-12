> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction/uuid](https://developer.apple.com/documentation/callkit/cxtransaction/uuid)

# uuid (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier of the transaction.

## Declaration

```swift
var uuid: UUID { get }
```

## See Also

### Accessing Transaction Attributes

- [isComplete](iscomplete.md): A Boolean value that indicates whether the transaction has been completed.
- [actions](actions.md): The actions added to a transaction.

# UUID (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier of the transaction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

## See Also

### Accessing Transaction Attributes

- [complete](iscomplete.md): A Boolean value that indicates whether the transaction has been completed.
- [actions](actions.md): The actions added to a transaction.
