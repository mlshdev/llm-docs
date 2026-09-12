> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxprovider/pendingcallactions(of:withcall:)](https://developer.apple.com/documentation/callkit/cxprovider/pendingcallactions(of:withcall:))

# pendingCallActions(of:withCall:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.

## Declaration

```swift
func pendingCallActions(of callActionClass: AnyClass, withCall callUUID: UUID) -> [CXCallAction]
```

## Parameters

- `callActionClass`: The desired [CXCallAction](../cxcallaction.md) subclass of returned actions.
- `callUUID`: The desired call identifier for returned actions.

<a id="return-value"></a>

## Return Value

An array of call actions of the specified class for the specified call identifier.

## See Also

### Accessing Pending Transaction and Call Actions

- [pendingTransactions](pendingtransactions.md): Incomplete transactions.

# pendingCallActionsOfClass:withCallUUID: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns all call actions in any pending transactions of the specified class for the specified call identifier that are incomplete.

## Declaration

```objectivec
- (NSArray<__kindof CXCallAction *> *) pendingCallActionsOfClass:(Class) callActionClass withCallUUID:(NSUUID *) callUUID;
```

## Parameters

- `callActionClass`: The desired [CXCallAction](../cxcallaction.md) subclass of returned actions.
- `callUUID`: The desired call identifier for returned actions.

<a id="return-value"></a>

## Return Value

An array of call actions of the specified class for the specified call identifier.

## See Also

### Accessing Pending Transaction and Call Actions

- [pendingTransactions](pendingtransactions.md): Incomplete transactions.
