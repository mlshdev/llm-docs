> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidcompletionaction](https://developer.apple.com/documentation/kernel/iohidcompletionaction)

# IOHIDCompletionAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

Function called when set/get report completes

## Declaration

```objectivec
typedef void (*IOHIDCompletionAction)(void *target, void *parameter, IOReturn status, uint32_t bufferSizeRemaining);
```

## Parameters

- `target`: The target specified in the IOHIDCompletion struct.
- `parameter`: The parameter specified in the IOHIDCompletion struct.
- `status`: Completion status

## See Also

### Reports

- [IOHIDReportType](iohidreporttype.md): Describes different type of HID reports.
- [HIDReportCommandType](hidreportcommandtype.md)
- [IOHIDCompletion](iohidcompletion.md): Struct specifying action to perform when set/get report completes.
