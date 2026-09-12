> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction/iscomplete](https://developer.apple.com/documentation/callkit/cxtransaction/iscomplete)

# isComplete (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the transaction has been completed.

## Declaration

```swift
var isComplete: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A transaction is complete only when all of its actions are complete.

## See Also

### Accessing Transaction Attributes

- [uuid](uuid.md): The unique identifier of the transaction.
- [actions](actions.md): The actions added to a transaction.

# complete (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the transaction has been completed.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isComplete) BOOL complete;
```

<a id="Discussion"></a>

## Discussion

A transaction is complete only when all of its actions are complete.

## See Also

### Accessing Transaction Attributes

- [UUID](uuid.md): The unique identifier of the transaction.
- [actions](actions.md): The actions added to a transaction.
