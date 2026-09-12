> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtransaction/actions](https://developer.apple.com/documentation/callkit/cxtransaction/actions)

# actions (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The actions added to a transaction.

## Declaration

```swift
var actions: [CXAction] { get }
```

## See Also

### Accessing Transaction Attributes

- [uuid](uuid.md): The unique identifier of the transaction.
- [isComplete](iscomplete.md): A Boolean value that indicates whether the transaction has been completed.

# actions (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The actions added to a transaction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof CXAction *> * actions;
```

## See Also

### Accessing Transaction Attributes

- [UUID](uuid.md): The unique identifier of the transaction.
- [complete](iscomplete.md): A Boolean value that indicates whether the transaction has been completed.
