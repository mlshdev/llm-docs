> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireserialbusprotocoltransport/1813810-isprotocolservicesupported](https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/1813810-isprotocolservicesupported)

# IsProtocolServiceSupported

**Interface language:** Objective-C

**Framework:** Kernel

Determine is specified feature is supported by the protocol layer.

## Declaration

```objectivec
virtual bool IsProtocolServiceSupported (
 SCSIProtocolFeature feature,
 void *serviceValue ); 
```

<a id="return_value"></a>

## Return Value

Will return true if the specified feature is supported by the protocol layer.

<a id="overview"></a>

## Overview

If the service has a value that must be returned, it will be returned in the serviceValue output parameter. See IOSCSIProtocolServices.h for more details regarding IsProtocolServiceSupported.

## See Also

### Miscellaneous

- [AbortSCSICommand](1813790-abortscsicommand.md): This method is intended to abort an in progress SCSI Task.
- [AllocateResources](1813792-allocateresources.md): Allocate Resources.
- [cleanUp](1813793-cleanup.md): cleanUp is called to tear down IOFireWireSerialBusProtocolTransport.
- [CoalesceSenseData](1813795-coalescesensedata.md): CoalesceSenseData convert a SBP-2 status block into a SPC-2 sense block.
- [CommandORBAccessor](1813797-commandorbaccessor.md): accessor function for fORB.
- [CompleteSCSITask](1813798-completescsitask.md): This qualifies and sets appropriate data then calls CommandCompleted.
- [CriticalOrbSubmission](1813800-criticalorbsubmission.md): xxx.
- [DeallocateResources](1813802-deallocateresources.md): Deallocate Resources.
- [finalize](1813804-finalize.md): See IOService for discussion.
- [free](1813806-free.md)
- [HandleProtocolServiceFeature](1813808-handleprotocolservicefeature.md): Handle specified feature supported by the protocol layer.
- [init](1813809-init.md): See IOService for discussion.
- [LoginCompletion](1813811-logincompletion.md): Completion routine for login complete.
- [LogoutCompletion](1813812-logoutcompletion.md): Completion routine for logout complete.
- [LunResetComplete](1813813-lunresetcomplete.md): Callback to submit Fetch Agent Reset.
- [SBP2LoginAccessor](1813814-sbp2loginaccessor.md): accessor function for fLogin.
- [SendSCSICommand](1813815-sendscsicommand.md): Prepare and send a SCSI command to the device.
- [SetCommandBuffers](1813816-setcommandbuffers.md): Method to set orb's buffers.
- [SetValidAutoSenseData](1813817-setvalidautosensedata.md): Set the auto sense data that was returned for a given SCSI Task.
- [start](1813818-start.md)
- [StatusNotify](1813819-statusnotify.md): This is our handler for status.
- [UnsolicitedStatusNotify](1813820-unsolicitedstatusnotify.md): This is our handler for unsolicited status.
