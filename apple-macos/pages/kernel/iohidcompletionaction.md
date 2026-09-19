> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidcompletionaction

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
