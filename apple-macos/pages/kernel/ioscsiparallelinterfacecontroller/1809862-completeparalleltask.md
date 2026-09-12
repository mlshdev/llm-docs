> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiparallelinterfacecontroller/1809862-completeparalleltask](https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller/1809862-completeparalleltask)

# CompleteParallelTask

**Interface language:** Objective-C

**Framework:** Kernel

Parallel Task Completion

## Declaration

```objectivec
void CompleteParallelTask ( 
 SCSIParallelTaskIdentifierparallelTask, 
 SCSITaskStatuscompletionStatus, 
 SCSIServiceResponseserviceResponse ); 
```

## Parameters

- `parallelTask`: A valid SCSIParallelTaskIdentifier.
- `completionStatus`: The status of the SCSI bus.
- `serviceResponse`: (see \<IOKit/scsi/SCSITask.h\>)

<a id="overview"></a>

## Overview

The HBA specific sublcass inherits the CompleteParallelTask() method which shall be called when the HBA has completed the processing of a parallel task.

## See Also

### Miscellaneous

- [CreateDeviceInterrupt](1809876-createdeviceinterrupt.md): Called to create an IOInterruptEventSource for the device. Subclasses may wish to use a different interrupt index than 0 (e.g. for using PCI Message Signaled Interrupts) or might not need an interrupt at all (virtual HBA).
- [CreateTargetForID(SCSIDeviceIdentifier)](1809880-createtargetforid.md): Method to perform device creation.
- [CreateTargetForID(SCSIDeviceIdentifier, OSDictionary \*)](1809885-createtargetforid.md): Method to perform device creation.
- [DestroyTargetForID](1809890-destroytargetforid.md): Method to perform device destruction.
- [DisableInterrupt](1809897-disableinterrupt.md): Disable Interrupt
- [DoesHBAPerformAutoSense](1809901-doeshbaperformautosense.md): Queries the HBA child class to determine if it automatically performs AutoSense and provides AutoSense data for each I/O. If the HBA allocates space for AutoSense in its HBA specific data region on a per task basis, the HBA should respond true.
- [DoesHBAPerformDeviceManagement](1809911-doeshbaperformdevicemanagement.md): Determine if HBA will manage devices.
- [DoesHBASupportMultiPathing](1809914-doeshbasupportmultipathing.md): Queries the HBA child class to determine if it supports Multi-Pathing.
- [DoesHBASupportSCSIParallelFeature](1809922-doeshbasupportscsiparallelfeatur.md): Queries the HBA child class to determine if it supports a specific SPI feature.
- [EnableInterrupt](1809927-enableinterrupt.md): Enable Interrupt
- [ExecuteParallelTask](1809933-executeparalleltask.md): Submit a SCSIParallelTask for execution.
- [FilterInterruptRequest](1809938-filterinterruptrequest.md): Filter method called at primary interrupt time.
- [FindTaskForAddress](1809945-findtaskforaddress.md): Find a task for a given Task Address, if one exists.
- [FindTaskForControllerIdentifier](1809955-findtaskforcontrolleridentifier.md): Find a task for a given Target and Controller Task Identifier
- [FreeSCSIParallelTask](1809961-freescsiparalleltask.md): Method to allow the client to release a SCSIParallelTask
- [GetAutoSenseData](1809967-getautosensedata.md): Method to retrieve auto sense data buffer associated with a request.
- [GetAutoSenseDataSize](1809971-getautosensedatasize.md): Method to retrieve auto sense data buffer size associated with a request.
- [GetCommandDescriptorBlock](1809978-getcommanddescriptorblock.md): Method to retrieve the SCSI Command Descriptor Block (CDB).
- [GetCommandDescriptorBlockSize](1809985-getcommanddescriptorblocksize.md): Method to retrieve the size of the SCSI Command Descriptor Block (CDB).
- [GetCommandGate](1809991-getcommandgate.md): Accessor to get an IOCommandGate associated with the workloop.
- [GetDataBuffer](1809997-getdatabuffer.md): Method to retrieve client buffer from the request.
- [GetDataBufferOffset](1810001-getdatabufferoffset.md): Method to retrieve offset into client buffer at which to start processing.
- [GetDataTransferDirection](1810008-getdatatransferdirection.md): Retrieves the data transfer direction for any data associated with the request.
- [GetDMACommand](1810016-getdmacommand.md): Method to retrieve a pointer to an IODMACommand from the request.
- [GetHBADataDescriptor](1810025-gethbadatadescriptor.md): Method to retrieve the IOMemoryDescriptor associated with the HBA Data.
- [GetHBADataPointer](1810030-gethbadatapointer.md): Method to retrieve the HBA Data pointer.
- [GetHBADataSize](1810042-gethbadatasize.md): Method to retrieve the HBA Data Size in bytes.
- [GetHBATargetDataPointer](1810052-gethbatargetdatapointer.md): Method to retrieve the HBA Data pointer.
- [GetHBATargetDataSize](1810061-gethbatargetdatasize.md): Method to retrieve the HBA Data Size in bytes.
- [GetLogicalUnitBytes](1810076-getlogicalunitbytes.md): Method to get the logical unit bytes associated with a request.
- [GetLogicalUnitNumber](1810082-getlogicalunitnumber.md): Method to get the logical unit number associated with a request.
- [GetProvider](1810094-getprovider.md): Accessor method to get the IOService which is the controller's provider.
- [GetRealizedDataTransferCount](1810102-getrealizeddatatransfercount.md): Retrieves the realized data transfer count for any data associated with the request.
- [GetRequestedDataTransferCount](1810112-getrequesteddatatransfercount.md): Retrieves the requested data transfer count for any data associated with the request.
- [GetSCSIDomainIdentifier](1810120-getscsidomainidentifier.md): Accessor method to get the SCSI Domain Identifier.
- [GetSCSIParallelFeatureNegotiation](1810130-getscsiparallelfeaturenegotiatio.md): Method to retrieve the requested value for negotiation of the.
- [GetSCSIParallelFeatureNegotiationCount](1810142-getscsiparallelfeaturenegotiatio.md): Method to retrieve the number of requested negotiations.
- [GetSCSIParallelFeatureNegotiationResult](1810148-getscsiparallelfeaturenegotiatio.md): Method to retrieve the result of any wide transfer negotiations.
- [GetSCSIParallelFeatureNegotiationResultCount](1810158-getscsiparallelfeaturenegotiatio.md): Method to retrieve the number of changed negotiations.
- [GetSCSIParallelTask](1810170-getscsiparalleltask.md): Method to allow the client to get a SCSIParallelTask
- [GetSCSITaskIdentifier](1810178-getscsitaskidentifier.md): Method to retrieve a SCSITaskIdentifier from a valid SCSIParallelTaskIdentifier.
- [GetTaggedTaskIdentifier](1810189-gettaggedtaskidentifier.md): Method to retrieve the SCSI Tagged Task Identifier of the task. If the returned value is equal to kSCSIUntaggedTaskIdentifier, then this task is untagged.
- [GetTargetForID](1810207-gettargetforid.md): Accessor for getting pointer to IOSCSIParallelInterfaceDevice.
- [GetTargetIdentifier](1810218-gettargetidentifier.md): Method to get the SCSITargetIdentifier associated with a request.
- [GetTaskAttribute](1810227-gettaskattribute.md): Method to retrieve the SCSI Task Attribute of the task
- [GetTimeoutDuration](1810247-gettimeoutduration.md): Method to retrieve the timeout duration in milliseconds for a request.
- [GetWorkLoop](1810257-getworkloop.md): Accessor method to get the IOWorkLoop associated with this HBA.
- [HandleInterruptRequest](1810269-handleinterruptrequest.md): Handle Interrupt Request
- [HandleTimeout](1810280-handletimeout.md): Method to handle command timeouts.
- [IncrementRealizedDataTransferCount](1810290-incrementrealizeddatatransfercou.md): Increments the realized data transfer count. This method is helpful for when the HBA has to do multiple passes of DMA because there are more scatter-gather elements than it can process in one pass.
- [InitializeController](1810299-initializecontroller.md): Called to initialize the controller
- [InitializeDMASpecification](1810311-initializedmaspecification.md): Called to initialize an IODMACommand with a DMA specification.
- [InitializeTargetForID](1810320-initializetargetforid.md): Called to initialize a target device.
- [NotifyClientsOfBusReset](1810327-notifyclientsofbusreset.md): Method called to notify clients that a bus reset has occurred.
- [NotifyClientsOfPortStatusChange](1810339-notifyclientsofportstatuschange.md): Method called to notify clients of port status change events.
- [ProcessParallelTask](1810354-processparalleltask.md): Called by client to process a parallel task.
- [RemoveHBAProperty](1810362-removehbaproperty.md): Accessor for removing a property for this object.
- [RemoveTargetProperty](1810376-removetargetproperty.md): Accessor for removing a property from a specific target.
- [ReportHBAConstraints](1810388-reporthbaconstraints.md): Called to report the I/O constraints for this controller. A list of valid keys includes: kIOMaximumSegmentCountReadKey, (required) kIOMaximumSegmentCountWriteKey, (required) kIOMaximumSegmentByteCountReadKey, (required) kIOMaximumSegmentByteCountWriteKey, (required) kIOMinimumSegmentAlignmentByteCountKey, (required) kIOMaximumSegmentAddressableBitCountKey, (required) kIOMinimumHBADataAlignmentMaskKey (required) kIOHierarchicalLogicalUnitSupportKey (optional). NB: These keys and their values are described in this header and \<IOKit/IOKitKeys.h\>
- [ReportHBAHighestLogicalUnitNumber](1810401-reporthbahighestlogicalunitnumbe.md): Gets the Highest Logical Unit Number.
- [ReportHBASpecificDeviceDataSize](1810414-reporthbaspecificdevicedatasize.md): Determine memory needed for HBA Device specific use.
- [ReportHBASpecificTaskDataSize](1810430-reporthbaspecifictaskdatasize.md): Determine memory needed for HBA Task specific use.
- [ReportHighestSupportedDeviceID](1810438-reporthighestsupporteddeviceid.md): Get the highest supported SCSI Device Identifier.
- [ReportInitiatorIdentifier](1810459-reportinitiatoridentifier.md): Get the SCSI Device Identifier for the HBA.
- [ReportMaximumTaskCount](1810468-reportmaximumtaskcount.md): Report Maximum Task Count
- [ResumeServices](1810477-resumeservices.md): Called to resume controller services
- [SetAutoSenseData](1810492-setautosensedata.md): Method to set the auto sense data buffer associated with a request.
- [SetControllerTaskIdentifier](1810503-setcontrollertaskidentifier.md): Method to set the Controller Task Identifier.
- [SetHBAProperty](1810516-sethbaproperty.md): Accessor for setting a property for this object.
- [SetRealizedDataTransferCount](1810526-setrealizeddatatransfercount.md): Sets the realized data transfer count in bytes.
- [SetSCSIParallelFeatureNegotiationResult](1810542-setscsiparallelfeaturenegotiatio.md): Method to set the wide data transfer negotiation result.
- [SetTargetProperty](1810557-settargetproperty.md): Accessor for setting a property for a specific target.
- [SetTimeoutForTask](1810571-settimeoutfortask.md): Method to set the timeout duration in milliseconds for a request.
- [SignalInterrupt](1810589-signalinterrupt.md): Signals that an interrupt has occurred.
- [StartController](1810612-startcontroller.md): Called to start the controller
- [StopController](1810629-stopcontroller.md): Called to stop the controller
- [SuspendServices](1810641-suspendservices.md): Called to suspend controller services
- [TerminateController](1810669-terminatecontroller.md): Called to terminate the controller
