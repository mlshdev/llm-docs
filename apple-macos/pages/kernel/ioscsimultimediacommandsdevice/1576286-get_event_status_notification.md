> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsimultimediacommandsdevice/1576286-get_event_status_notification](https://developer.apple.com/documentation/kernel/ioscsimultimediacommandsdevice/1576286-get_event_status_notification)

# GET_EVENT_STATUS_NOTIFICATION

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual bool GET_EVENT_STATUS_NOTIFICATION(SCSITaskIdentifier request, IOMemoryDescriptor *dataBuffer, SCSICmdField1Bit IMMED, SCSICmdField1Byte NOTIFICATION_CLASS_REQUEST, SCSICmdField2Byte ALLOCATION_LENGTH, SCSICmdField1Byte CONTROL);
```
