> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/hidreportcommandtype](https://developer.apple.com/documentation/hiddriverkit/hidreportcommandtype)

# HIDReportCommandType

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

The type of the report command for a DriverKit driver.

## Declaration

```objectivec
typedef enum { ... } HIDReportCommandType;
```

## Topics

### Getting the Report Command Types

- [kIOHIDReportCommandGetReport](hidreportcommandtype/kiohidreportcommandgetreport.md)
- [kIOHIDReportCommandSetReport](hidreportcommandtype/kiohidreportcommandsetreport.md)

## See Also

### Internal Structures

- [IOHIDCompletionAction](iohidcompletionaction.md): A function to call when a report operation completes.
- [IOHIDCompletion](iohidcompletion.md): A structure specifying the action to perform when a set/get report completes.
- [HIDActionType](hidactiontype.md)
