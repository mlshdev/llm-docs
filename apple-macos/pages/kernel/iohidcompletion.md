> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohidcompletion

# IOHIDCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.15+

Struct specifying action to perform when set/get report completes.

## Declaration

```objectivec
typedef struct IOHIDCompletion IOHIDCompletion;
```

## Topics

### Instance Properties

- [action](https://developer.apple.com/documentation/iokit/iohidcompletion/1556167-action)
- [parameter](https://developer.apple.com/documentation/iokit/iohidcompletion/1556182-parameter)
- [target](https://developer.apple.com/documentation/iokit/iohidcompletion/1556177-target)

## See Also

### Reports

- [IOHIDReportType](iohidreporttype.md): Describes different type of HID reports.
- [HIDReportCommandType](hidreportcommandtype.md)
- [IOHIDCompletionAction](iohidcompletionaction.md): Function called when set/get report completes
