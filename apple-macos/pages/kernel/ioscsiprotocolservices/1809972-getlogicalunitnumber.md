> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprotocolservices/1809972-getlogicalunitnumber](https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/1809972-getlogicalunitnumber)

# GetLogicalUnitNumber

**Interface language:** Objective-C

**Framework:** Kernel

Accessor method to retrieve the logical unit number associated with the specified request.

## Declaration

```objectivec
UInt8 GetLogicalUnitNumber (
 SCSITaskIdentifierrequest ); 
```

## Parameters

- `request`: A valid SCSITaskIdentifier.

<a id="return_value"></a>

## Return Value

A valid single-byte LUN value.

<a id="overview"></a>

## Overview

Accessor method to retrieve the logical unit number associated with the specified request. NOTE: This method is deprecated in favor of GetLogicalUnitBytes().

## See Also

### Miscellaneous

- [AbortCommand](1809724-abortcommand.md): Deprecated. Do not use.
- [AbortSCSICommand](1809736-abortscsicommand.md): Pure virtual method subclasses must implement so that SCSITasks may be aborted.
- [AbortSCSITaskFromQueue](1809747-abortscsitaskfromqueue.md): Deprecated internal method.
- [AbortTask](1809759-aborttask.md): The Task Management function to allow the SCSI Application Layer client to request that a specific task be aborted.
- [AbortTaskSet](1809765-aborttaskset.md): The Task Management function to allow the SCSI Application Layer client to request that a complete task set be aborted.
- [AddSCSITaskToHeadOfQueue](1809777-addscsitasktoheadofqueue.md): Internal method called to add a SCSITask to the head of the processing queue.
- [AddSCSITaskToQueue](1809791-addscsitasktoqueue.md): Internal method called to add a SCSITask to the processing queue.
- [ClearACA](1809805-clearaca.md): The Task Management function to clear an Auto-Contingent Allegiance condition.
- [ClearTaskSet](1809813-cleartaskset.md): The Task Management function to clear a task set.
- [CommandCompleted](1809823-commandcompleted.md): Method subclass calls to complete a SCSITask.
- [CreateSCSITargetDevice](1809830-createscsitargetdevice.md): Used to create a SCSITargetDevice which will manage logical units.
- [EnsureAutosenseDescriptorExists](1809843-ensureautosensedescriptorexists.md): Internal method, not to be called by subclasses.
- [ExecuteCommand](1809854-executecommand.md): ExecuteCommand method will take a SCSI Task and transport it across the physical wire(s) to the device.
- [free](1809869-free.md): Frees data structures that were allocated during start().
- [GetAutosenseRequestedDataTransferCount](1809881-getautosenserequesteddatatransfe.md): Accessor method to retrieve the requested data transfer count for autosense data associated with the specified request.
- [GetCommandDescriptorBlock](1809892-getcommanddescriptorblock.md): Accessor method to retrieve the Command Descriptor Block associated with the specified request.
- [GetCommandDescriptorBlockSize](1809902-getcommanddescriptorblocksize.md): Accessor method to retrieve the Command Descriptor Block size associated with the specified request.
- [GetDataBuffer](1809915-getdatabuffer.md): Accessor method to retrieve the data buffer associated with the specified request.
- [GetDataBufferOffset](1809935-getdatabufferoffset.md): Accessor method to retrieve the data buffer offset associated with the specified request.
- [GetDataTransferDirection](1809946-getdatatransferdirection.md): Accessor method to retrieve the data transfer direction associated with the specified request.
- [GetInitialPowerState](1809959-getinitialpowerstate.md): This method is called once, right after InitializePowerManagement() in order to determine what state the device is initially in at startup time (usually the highest power mode).
- [GetLogicalUnitBytes](1809964-getlogicalunitbytes.md): Accessor method to retrieve the logical unit bytes associated with the specified request.
- [GetProtocolLayerReference](1809980-getprotocollayerreference.md): Accessor method to retrieve the protocol layer reference.
- [GetRealizedDataTransferCount](1809989-getrealizeddatatransfercount.md): Accessor method to retrieve the realized data transfer count associated with the specified request.
- [GetRequestedDataTransferCount](1809996-getrequesteddatatransfercount.md): Accessor method to retrieve the requested data transfer count associated with the specified request.
- [GetTaskAttribute](1810005-gettaskattribute.md): Accessor method to retrieve the SCSITaskAttribute associated with the specified request.
- [GetTaskExecutionMode](1810017-gettaskexecutionmode.md): Internal method used to retrieve the task execution mode.
- [GetTaskState](1810028-gettaskstate.md): Accessor method to retrieve the SCSITaskState associated with the specified request.
- [GetTimeoutDuration](1810038-gettimeoutduration.md): Accessor method to retrieve the timeout duration in milliseconds associated with the specified request.
- [HandleAbortTask](1810051-handleaborttask.md): HandleAbortTask instructs the Protocol Services driver to abort the task.
- [HandleAbortTaskSet](1810062-handleaborttaskset.md): HandleAbortTaskSet instructs the Protocol Services driver to abort the task set.
- [HandleCheckPowerState](1810080-handlecheckpowerstate.md): Method called to check if the device is in the correct power state for an I/O.
- [HandleClearACA](1810093-handleclearaca.md): HandleClearACA instructs the Protocol Services driver to clear an auto-contingent allegiance.
- [HandleClearTaskSet](1810105-handlecleartaskset.md): HandleClearTaskSet instructs the Protocol Services driver to clear the task set.
- [HandleLogicalUnitReset](1810119-handlelogicalunitreset.md): HandleLogicalUnitReset instructs the Protocol Services driver to reset the logical unit.
- [HandlePowerChange](1810127-handlepowerchange.md): This method is called to handle a power change.
- [HandlePowerOff](1810144-handlepoweroff.md): Convenience method for a protocol service driver to handle a power off call (called on the way to sleep).
- [HandlePowerOn](1810154-handlepoweron.md): Convenience method for a protocol service driver to handle a power on call (called on the way back up from sleep).
- [HandleProtocolServiceFeature](1810168-handleprotocolservicefeature.md): HandleProtocolServiceFeature instructs the Protocol Services driver to perform the necessary tasks for the indicated feature.
- [HandleTargetReset](1810176-handletargetreset.md): HandleTargetReset instructs the Protocol Services driver to reset the target.
- [init](1810187-init.md): Standard init method for all IORegistryEntry subclasses.
- [InitializePowerManagement](1810204-initializepowermanagement.md): Subclasses call this method to initialize power management.
- [IsProtocolServiceSupported](1810217-isprotocolservicesupported.md): IsProtocolServiceSupported will return true if the specified feature is supported by the protocol layer.
- [LogicalUnitReset](1810234-logicalunitreset.md): The Task Management function to reset a logical unit.
- [ProcessCompletedTask](1810248-processcompletedtask.md): Internal method called to process completed SCSITasks.
- [RegisterSCSITaskCompletionRoutine](1810264-registerscsitaskcompletionroutin.md): Used by IOSCSITargetDevice to register a completion routine.
- [RejectSCSITasksCurrentlyQueued](1810276-rejectscsitaskscurrentlyqueued.md): Internal method called to reject currently enqueued SCSITasks.
- [RejectTask](1810289-rejecttask.md): Internal method called to reject a particular SCSITask.
- [RetrieveNextSCSITaskFromQueue](1810300-retrievenextscsitaskfromqueue.md): Internal method called to retrieve the next SCSITask to process.
- [SendNotification_DeviceRemoved](1810317-sendnotification_deviceremoved.md): Method called by subclasses when a device is physically removed from the bus.
- [SendNotification_VerifyDeviceState](1810332-sendnotification_verifydevicesta.md): Method called by subclasses when a device state needs to be re-verified due to some bus condition which may have changed the device state.
- [SendSCSICommand](1810345-sendscsicommand.md): Pure virtual method subclasses must implement in order to send SCSITasks on the wire.
- [SendSCSITasksFromQueue](1810363-sendscsitasksfromqueue.md): Internal method called to start processing SCSITasks.
- [SetAutoSenseData(SCSITaskIdentifier, SCSI_Sense_Data \*)](1810382-setautosensedata.md): Accessor method to set the autosense data. NOTE: This method is deprecated.
- [SetAutoSenseData(SCSITaskIdentifier, SCSI_Sense_Data \*, UInt8)](1810397-setautosensedata.md): Accessor method to set the autosense data.
- [SetProtocolLayerReference](1810411-setprotocollayerreference.md): Accessor method to set the protocol layer reference.
- [SetRealizedDataTransferCount](1810431-setrealizeddatatransfercount.md): Accessor method to set the realized (actual) data transfer count associated with the specified request.
- [SetTaskExecutionMode](1810455-settaskexecutionmode.md): Internal method used to set the task execution mode.
- [SetTaskState](1810476-settaskstate.md): Accessor method to set the SCSITaskState associated with the specified request.
- [start](1810514-start.md): During an IOService object's instantiation, starts the IOService object that has been selected to run on the provider.
- [TargetReset](1810537-targetreset.md): The Task Management function to reset a target device.
- [TicklePowerManager](1810572-ticklepowermanager.md): Internal method. Do not use.
