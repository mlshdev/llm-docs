> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/low-level-information](https://developer.apple.com/documentation/hiddriverkit/low-level-information)

# Low-Level Information

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** API Collection

Understand the underlying structures that support HID drivers.

## Topics

### Internal Structures

- [IOHIDCompletionAction](iohidcompletionaction.md): A function to call when a report operation completes.
- [IOHIDCompletion](iohidcompletion.md): A structure specifying the action to perform when a set/get report completes.
- [HIDReportCommandType](hidreportcommandtype.md): The type of the report command for a DriverKit driver.
- [HIDActionType](hidactiontype.md)

### Version Information

- [HIDDriverKitVersionNumber](hiddriverkitversionnumber.md): The project version number for HIDDriverKit.
- [HIDDriverKitVersionString](hiddriverkitversionstring.md): The project version string for HIDDriverKit.

## See Also

### HID Device Data

- [IOHIDElement](iohidelement.md): An object that contains parsed information from a HID input report.
- [IOHIDDigitizerCollection](iohiddigitizercollection.md): A collection of elements that contain digitizer-related data.
- [com.apple.developer.hid.virtual.device](../bundleresources/entitlements/com.apple.developer.hid.virtual.device.md): A Boolean value that indicates whether the driver creates a virtual HID device.
