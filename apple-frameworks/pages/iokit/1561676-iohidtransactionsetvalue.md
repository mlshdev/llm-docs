> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1561676-iohidtransactionsetvalue](https://developer.apple.com/documentation/iokit/1561676-iohidtransactionsetvalue)

# IOHIDTransactionSetValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Sets the value for a transaction element.

## Declaration

```objectivec
void IOHIDTransactionSetValue(IOHIDTransactionRef transaction, IOHIDElementRef element, IOHIDValueRef value, IOOptionBits options);
```

## Parameters

- `transaction`: IOHIDTransaction object to be modified.
- `element`: Element to be modified after a commit.
- `value`: Value to be set for the given element.
- `options`: See IOHIDTransactionOption.

<a id="discussion"></a>

## Discussion

The value set is pended until the transaction is committed and is only used if the transaction direction is kIOHIDTransactionDirectionTypeOutput. Use the kIOHIDTransactionOptionDefaultOutputValue option to set the default element value.

## See Also

### Miscellaneous

- [IOHIDTransactionAddElement](1561679-iohidtransactionaddelement.md): Adds an element to the transaction @disussion To minimize device traffic it is important to add elements that share a common report type and report id.
- [IOHIDTransactionClear](1561687-iohidtransactionclear.md): Clears element transaction values.
- [IOHIDTransactionCommit](1561681-iohidtransactioncommit.md): Synchronously commits element transaction to the device.
- [IOHIDTransactionCommitWithCallback](1561677-iohidtransactioncommitwithcallba.md): Commits element transaction to the device.
- [IOHIDTransactionContainsElement](1561680-iohidtransactioncontainselement.md): Queries the transaction to determine if elemement has been added.
- [IOHIDTransactionCreate](1561689-iohidtransactioncreate.md): Creates an IOHIDTransaction object for the specified device.
- [IOHIDTransactionGetDevice](1561685-iohidtransactiongetdevice.md): Obtain the device associated with the transaction.
- [IOHIDTransactionGetDirection](1561674-iohidtransactiongetdirection.md): Obtain the direction of the transaction.
- [IOHIDTransactionGetTypeID](1561678-iohidtransactiongettypeid.md): Returns the type identifier of all IOHIDTransaction instances.
- [IOHIDTransactionGetValue](1561683-iohidtransactiongetvalue.md): Obtains the value for a transaction element.
- [IOHIDTransactionRemoveElement](1561686-iohidtransactionremoveelement.md): Removes an element to the transaction
- [IOHIDTransactionScheduleWithRunLoop](1561675-iohidtransactionschedulewithrunl.md): Schedules transaction with run loop.
- [IOHIDTransactionSetDirection](1561688-iohidtransactionsetdirection.md): Sets the direction of the transaction @disussion This method is useful for manipulating bi-direction (feature) elements such that you can set or get element values without creating an additional transaction object.
- [IOHIDTransactionUnscheduleFromRunLoop](1561682-iohidtransactionunschedulefromru.md): Unschedules transaction with run loop.
