> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidreporttype](https://developer.apple.com/documentation/kernel/iohidreporttype)

# IOHIDReportType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Describes different type of HID reports.

## Declaration

```objectivec
typedef enum IOHIDReportType IOHIDReportType;
```

<a id="discussion"></a>

## Discussion

Used by the IOHIDFamily to identify the type of report being processed.

## Topics

### Constants

- [kIOHIDReportTypeInput](iohidreporttype/kiohidreporttypeinput.md)
- [kIOHIDReportTypeOutput](iohidreporttype/kiohidreporttypeoutput.md)
- [kIOHIDReportTypeFeature](iohidreporttype/kiohidreporttypefeature.md)
- [kIOHIDReportTypeCount](iohidreporttype/kiohidreporttypecount.md)

## See Also

### Reports

- [HIDReportCommandType](hidreportcommandtype.md)
- [IOHIDCompletion](iohidcompletion.md): Struct specifying action to perform when set/get report completes.
- [IOHIDCompletionAction](iohidcompletionaction.md): Function called when set/get report completes

### Related Documentation

- [IOHIDReportType](https://developer.apple.com/documentation/iokit/iohidreporttype): Describes different type of HID reports.
