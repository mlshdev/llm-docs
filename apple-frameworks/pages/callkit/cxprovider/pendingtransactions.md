> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/pendingtransactions](https://developer.apple.com/documentation/callkit/cxprovider/pendingtransactions)

# pendingTransactions (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Incomplete transactions.

## Declaration

```swift
var pendingTransactions: [CXTransaction] { get }
```

## See Also

### Accessing Pending Transaction and Call Actions

- [pendingCallActions(of:withCall:)](pendingcallactions%28of_withcall_%29.md): Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.

# pendingTransactions (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Incomplete transactions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CXTransaction *> * pendingTransactions;
```

## See Also

### Accessing Pending Transaction and Call Actions

- [pendingCallActionsOfClass:withCallUUID:](pendingcallactions%28of_withcall_%29.md): Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.
