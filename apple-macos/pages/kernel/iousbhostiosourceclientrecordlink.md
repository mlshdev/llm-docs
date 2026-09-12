> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostiosourceclientrecordlink](https://developer.apple.com/documentation/kernel/iousbhostiosourceclientrecordlink)

# IOUSBHostIOSourceClientRecordLink

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.13+

A structure that represents a USB host input/output source client record entry.

## Declaration

```objectivec
typedef struct IOUSBHostIOSourceClientRecordLink {
    ...
} IOUSBHostIOSourceClientRecordLink;
```

## Topics

### Getting the Properties

- [le_next](iousbhostiosourceclientrecordlink/2882013-le_next.md): The pointer to the next USB host input/output source client record.
- [le_prev](iousbhostiosourceclientrecordlink/2882012-le_prev.md): The pointer to the previous USB host input/output source client record.

## See Also

### Device Communication

- [Building a Simple USB Driver](hardware_families/usb/building_a_simple_usb_driver.md): Set up and load a driver that logs output to the Console app.
- [IOUSBHostIOSourceClientRecordList](iousbhostiosourceclientrecordlist.md): A structure that represents a list of USB host input/output source client records.
