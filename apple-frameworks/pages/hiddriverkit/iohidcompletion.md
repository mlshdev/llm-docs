> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidcompletion](https://developer.apple.com/documentation/hiddriverkit/iohidcompletion)

# IOHIDCompletion

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Structure  
**Availability:** DriverKit · macOS

A structure specifying the action to perform when a set/get report completes.

## Declaration

```objectivec
typedef struct IOHIDCompletion { ... } IOHIDCompletion;
```

## Topics

### Getting the Completion Handler Properties

- [target](iohidcompletion/target.md): The target to pass to the action function.
- [action](iohidcompletion/action.md): The function to call.
- [parameter](iohidcompletion/parameter.md): The parameter to pass to the action function.

## See Also

### Internal Structures

- [IOHIDCompletionAction](iohidcompletionaction.md): A function to call when a report operation completes.
- [HIDReportCommandType](hidreportcommandtype.md): The type of the report command for a DriverKit driver.
- [HIDActionType](hidactiontype.md)
