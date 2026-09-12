> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidcompletionaction](https://developer.apple.com/documentation/hiddriverkit/iohidcompletionaction)

# IOHIDCompletionAction

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · macOS

A function to call when a report operation completes.

## Declaration

```objectivec
typedef void (*)(void *, void *, int, unsigned int) IOHIDCompletionAction;
```

## Parameters

- `target`: The target specified in the `IOHIDCompletion` struct.
- `parameter`: The parameter specified in the `IOHIDCompletion` struct.
- `status`: The completion status.

## See Also

### Internal Structures

- [IOHIDCompletion](iohidcompletion.md): A structure specifying the action to perform when a set/get report completes.
- [HIDReportCommandType](hidreportcommandtype.md): The type of the report command for a DriverKit driver.
- [HIDActionType](hidactiontype.md)
