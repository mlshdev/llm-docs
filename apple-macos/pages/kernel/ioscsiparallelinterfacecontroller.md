> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiparallelinterfacecontroller](https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller)

# IOSCSIParallelInterfaceController

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.2+ (deprecated in 11.0)

Class that represents a SCSI Host Bus Adapter.

## Declaration

```objectivec
class IOSCSIParallelInterfaceController : IOService
```

<a id="overview"></a>

## Overview

Class that represents a SCSI Host Bus Adapter.

## Topics

### Miscellaneous

- [CompleteParallelTask](ioscsiparallelinterfacecontroller/1809862-completeparalleltask.md): Parallel Task Completion
- [CreateDeviceInterrupt](ioscsiparallelinterfacecontroller/1809876-createdeviceinterrupt.md): Called to create an IOInterruptEventSource for the device. Subclasses may wish to use a different interrupt index than 0 (e.g. for using PCI Message Signaled Interrupts) or might not need an interrupt at all (virtual HBA).
- [CreateTargetForID(SCSIDeviceIdentifier)](ioscsiparallelinterfacecontroller/1809880-createtargetforid.md): Method to perform device creation.
- [CreateTargetForID(SCSIDeviceIdentifier, OSDictionary \*)](ioscsiparallelinterfacecontroller/1809885-createtargetforid.md): Method to perform device creation.
- [DestroyTargetForID](ioscsiparallelinterfacecontroller/1809890-destroytargetforid.md): Method to perform device destruction.
- [DisableInterrupt](ioscsiparallelinterfacecontroller/1809897-disableinterrupt.md): Disable Interrupt
- [DoesHBAPerformAutoSense](ioscsiparallelinterfacecontroller/1809901-doeshbaperformautosense.md): Queries the HBA child class to determine if it automatically performs AutoSense and provides AutoSense data for each I/O. If the HBA allocates space for AutoSense in its HBA specific data region on a per task basis, the HBA should respond true.
- [DoesHBAPerformDeviceManagement](ioscsiparallelinterfacecontroller/1809911-doeshbaperformdevicemanagement.md): Determine if HBA will manage devices.
- [DoesHBASupportMultiPathing](ioscsiparallelinterfacecontroller/1809914-doeshbasupportmultipathing.md): Queries the HBA child class to determine if it supports Multi-Pathing.
- [DoesHBASupportSCSIParallelFeature](ioscsiparallelinterfacecontroller/1809922-doeshbasupportscsiparallelfeatur.md): Queries the HBA child class to determine if it supports a specific SPI feature.
- [EnableInterrupt](ioscsiparallelinterfacecontroller/1809927-enableinterrupt.md): Enable Interrupt
- [ExecuteParallelTask](ioscsiparallelinterfacecontroller/1809933-executeparalleltask.md): Submit a SCSIParallelTask for execution.
- [FilterInterruptRequest](ioscsiparallelinterfacecontroller/1809938-filterinterruptrequest.md): Filter method called at primary interrupt time.
- [FindTaskForAddress](ioscsiparallelinterfacecontroller/1809945-findtaskforaddress.md): Find a task for a given Task Address, if one exists.
- [FindTaskForControllerIdentifier](ioscsiparallelinterfacecontroller/1809955-findtaskforcontrolleridentifier.md): Find a task for a given Target and Controller Task Identifier
- [FreeSCSIParallelTask](ioscsiparallelinterfacecontroller/1809961-freescsiparalleltask.md): Method to allow the client to release a SCSIParallelTask
- [GetAutoSenseData](ioscsiparallelinterfacecontroller/1809967-getautosensedata.md): Method to retrieve auto sense data buffer associated with a request.
- [GetAutoSenseDataSize](ioscsiparallelinterfacecontroller/1809971-getautosensedatasize.md): Method to retrieve auto sense data buffer size associated with a request.
- [GetCommandDescriptorBlock](ioscsiparallelinterfacecontroller/1809978-getcommanddescriptorblock.md): Method to retrieve the SCSI Command Descriptor Block (CDB).
- [GetCommandDescriptorBlockSize](ioscsiparallelinterfacecontroller/1809985-getcommanddescriptorblocksize.md): Method to retrieve the size of the SCSI Command Descriptor Block (CDB).
- [GetCommandGate](ioscsiparallelinterfacecontroller/1809991-getcommandgate.md): Accessor to get an IOCommandGate associated with the workloop.
- [GetDataBuffer](ioscsiparallelinterfacecontroller/1809997-getdatabuffer.md): Method to retrieve client buffer from the request.
- [GetDataBufferOffset](ioscsiparallelinterfacecontroller/1810001-getdatabufferoffset.md): Method to retrieve offset into client buffer at which to start processing.
- [GetDataTransferDirection](ioscsiparallelinterfacecontroller/1810008-getdatatransferdirection.md): Retrieves the data transfer direction for any data associated with the request.
- [GetDMACommand](ioscsiparallelinterfacecontroller/1810016-getdmacommand.md): Method to retrieve a pointer to an IODMACommand from the request.
- [GetHBADataDescriptor](ioscsiparallelinterfacecontroller/1810025-gethbadatadescriptor.md): Method to retrieve the IOMemoryDescriptor associated with the HBA Data.
- [GetHBADataPointer](ioscsiparallelinterfacecontroller/1810030-gethbadatapointer.md): Method to retrieve the HBA Data pointer.
- [GetHBADataSize](ioscsiparallelinterfacecontroller/1810042-gethbadatasize.md): Method to retrieve the HBA Data Size in bytes.
- [GetHBATargetDataPointer](ioscsiparallelinterfacecontroller/1810052-gethbatargetdatapointer.md): Method to retrieve the HBA Data pointer.
- [GetHBATargetDataSize](ioscsiparallelinterfacecontroller/1810061-gethbatargetdatasize.md): Method to retrieve the HBA Data Size in bytes.
- [GetLogicalUnitBytes](ioscsiparallelinterfacecontroller/1810076-getlogicalunitbytes.md): Method to get the logical unit bytes associated with a request.
- [GetLogicalUnitNumber](ioscsiparallelinterfacecontroller/1810082-getlogicalunitnumber.md): Method to get the logical unit number associated with a request.
- [GetProvider](ioscsiparallelinterfacecontroller/1810094-getprovider.md): Accessor method to get the IOService which is the controller's provider.
- [GetRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1810102-getrealizeddatatransfercount.md): Retrieves the realized data transfer count for any data associated with the request.
- [GetRequestedDataTransferCount](ioscsiparallelinterfacecontroller/1810112-getrequesteddatatransfercount.md): Retrieves the requested data transfer count for any data associated with the request.
- [GetSCSIDomainIdentifier](ioscsiparallelinterfacecontroller/1810120-getscsidomainidentifier.md): Accessor method to get the SCSI Domain Identifier.
- [GetSCSIParallelFeatureNegotiation](ioscsiparallelinterfacecontroller/1810130-getscsiparallelfeaturenegotiatio.md): Method to retrieve the requested value for negotiation of the.
- [GetSCSIParallelFeatureNegotiationCount](ioscsiparallelinterfacecontroller/1810142-getscsiparallelfeaturenegotiatio.md): Method to retrieve the number of requested negotiations.
- [GetSCSIParallelFeatureNegotiationResult](ioscsiparallelinterfacecontroller/1810148-getscsiparallelfeaturenegotiatio.md): Method to retrieve the result of any wide transfer negotiations.
- [GetSCSIParallelFeatureNegotiationResultCount](ioscsiparallelinterfacecontroller/1810158-getscsiparallelfeaturenegotiatio.md): Method to retrieve the number of changed negotiations.
- [GetSCSIParallelTask](ioscsiparallelinterfacecontroller/1810170-getscsiparalleltask.md): Method to allow the client to get a SCSIParallelTask
- [GetSCSITaskIdentifier](ioscsiparallelinterfacecontroller/1810178-getscsitaskidentifier.md): Method to retrieve a SCSITaskIdentifier from a valid SCSIParallelTaskIdentifier.
- [GetTaggedTaskIdentifier](ioscsiparallelinterfacecontroller/1810189-gettaggedtaskidentifier.md): Method to retrieve the SCSI Tagged Task Identifier of the task. If the returned value is equal to kSCSIUntaggedTaskIdentifier, then this task is untagged.
- [GetTargetForID](ioscsiparallelinterfacecontroller/1810207-gettargetforid.md): Accessor for getting pointer to IOSCSIParallelInterfaceDevice.
- [GetTargetIdentifier](ioscsiparallelinterfacecontroller/1810218-gettargetidentifier.md): Method to get the SCSITargetIdentifier associated with a request.
- [GetTaskAttribute](ioscsiparallelinterfacecontroller/1810227-gettaskattribute.md): Method to retrieve the SCSI Task Attribute of the task
- [GetTimeoutDuration](ioscsiparallelinterfacecontroller/1810247-gettimeoutduration.md): Method to retrieve the timeout duration in milliseconds for a request.
- [GetWorkLoop](ioscsiparallelinterfacecontroller/1810257-getworkloop.md): Accessor method to get the IOWorkLoop associated with this HBA.
- [HandleInterruptRequest](ioscsiparallelinterfacecontroller/1810269-handleinterruptrequest.md): Handle Interrupt Request
- [HandleTimeout](ioscsiparallelinterfacecontroller/1810280-handletimeout.md): Method to handle command timeouts.
- [IncrementRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1810290-incrementrealizeddatatransfercou.md): Increments the realized data transfer count. This method is helpful for when the HBA has to do multiple passes of DMA because there are more scatter-gather elements than it can process in one pass.
- [InitializeController](ioscsiparallelinterfacecontroller/1810299-initializecontroller.md): Called to initialize the controller
- [InitializeDMASpecification](ioscsiparallelinterfacecontroller/1810311-initializedmaspecification.md): Called to initialize an IODMACommand with a DMA specification.
- [InitializeTargetForID](ioscsiparallelinterfacecontroller/1810320-initializetargetforid.md): Called to initialize a target device.
- [NotifyClientsOfBusReset](ioscsiparallelinterfacecontroller/1810327-notifyclientsofbusreset.md): Method called to notify clients that a bus reset has occurred.
- [NotifyClientsOfPortStatusChange](ioscsiparallelinterfacecontroller/1810339-notifyclientsofportstatuschange.md): Method called to notify clients of port status change events.
- [ProcessParallelTask](ioscsiparallelinterfacecontroller/1810354-processparalleltask.md): Called by client to process a parallel task.
- [RemoveHBAProperty](ioscsiparallelinterfacecontroller/1810362-removehbaproperty.md): Accessor for removing a property for this object.
- [RemoveTargetProperty](ioscsiparallelinterfacecontroller/1810376-removetargetproperty.md): Accessor for removing a property from a specific target.
- [ReportHBAConstraints](ioscsiparallelinterfacecontroller/1810388-reporthbaconstraints.md): Called to report the I/O constraints for this controller. A list of valid keys includes: kIOMaximumSegmentCountReadKey, (required) kIOMaximumSegmentCountWriteKey, (required) kIOMaximumSegmentByteCountReadKey, (required) kIOMaximumSegmentByteCountWriteKey, (required) kIOMinimumSegmentAlignmentByteCountKey, (required) kIOMaximumSegmentAddressableBitCountKey, (required) kIOMinimumHBADataAlignmentMaskKey (required) kIOHierarchicalLogicalUnitSupportKey (optional). NB: These keys and their values are described in this header and \<IOKit/IOKitKeys.h\>
- [ReportHBAHighestLogicalUnitNumber](ioscsiparallelinterfacecontroller/1810401-reporthbahighestlogicalunitnumbe.md): Gets the Highest Logical Unit Number.
- [ReportHBASpecificDeviceDataSize](ioscsiparallelinterfacecontroller/1810414-reporthbaspecificdevicedatasize.md): Determine memory needed for HBA Device specific use.
- [ReportHBASpecificTaskDataSize](ioscsiparallelinterfacecontroller/1810430-reporthbaspecifictaskdatasize.md): Determine memory needed for HBA Task specific use.
- [ReportHighestSupportedDeviceID](ioscsiparallelinterfacecontroller/1810438-reporthighestsupporteddeviceid.md): Get the highest supported SCSI Device Identifier.
- [ReportInitiatorIdentifier](ioscsiparallelinterfacecontroller/1810459-reportinitiatoridentifier.md): Get the SCSI Device Identifier for the HBA.
- [ReportMaximumTaskCount](ioscsiparallelinterfacecontroller/1810468-reportmaximumtaskcount.md): Report Maximum Task Count
- [ResumeServices](ioscsiparallelinterfacecontroller/1810477-resumeservices.md): Called to resume controller services
- [SetAutoSenseData](ioscsiparallelinterfacecontroller/1810492-setautosensedata.md): Method to set the auto sense data buffer associated with a request.
- [SetControllerTaskIdentifier](ioscsiparallelinterfacecontroller/1810503-setcontrollertaskidentifier.md): Method to set the Controller Task Identifier.
- [SetHBAProperty](ioscsiparallelinterfacecontroller/1810516-sethbaproperty.md): Accessor for setting a property for this object.
- [SetRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1810526-setrealizeddatatransfercount.md): Sets the realized data transfer count in bytes.
- [SetSCSIParallelFeatureNegotiationResult](ioscsiparallelinterfacecontroller/1810542-setscsiparallelfeaturenegotiatio.md): Method to set the wide data transfer negotiation result.
- [SetTargetProperty](ioscsiparallelinterfacecontroller/1810557-settargetproperty.md): Accessor for setting a property for a specific target.
- [SetTimeoutForTask](ioscsiparallelinterfacecontroller/1810571-settimeoutfortask.md): Method to set the timeout duration in milliseconds for a request.
- [SignalInterrupt](ioscsiparallelinterfacecontroller/1810589-signalinterrupt.md): Signals that an interrupt has occurred.
- [StartController](ioscsiparallelinterfacecontroller/1810612-startcontroller.md): Called to start the controller
- [StopController](ioscsiparallelinterfacecontroller/1810629-stopcontroller.md): Called to stop the controller
- [SuspendServices](ioscsiparallelinterfacecontroller/1810641-suspendservices.md): Called to suspend controller services
- [TerminateController](ioscsiparallelinterfacecontroller/1810669-terminatecontroller.md): Called to terminate the controller

### Instance Methods

- [AbortTaskRequest](ioscsiparallelinterfacecontroller/1577150-aborttaskrequest.md): Deprecated.
- [AbortTaskSetRequest](ioscsiparallelinterfacecontroller/1577179-aborttasksetrequest.md): Deprecated.
- [AddDeviceToTargetList](ioscsiparallelinterfacecontroller/1577174-adddevicetotargetlist.md): Deprecated.
- [AllocateSCSIParallelTasks](ioscsiparallelinterfacecontroller/1577235-allocatescsiparalleltasks.md): Deprecated.
- [ClearACARequest](ioscsiparallelinterfacecontroller/1577255-clearacarequest.md): Deprecated.
- [ClearTaskSetRequest](ioscsiparallelinterfacecontroller/1577281-cleartasksetrequest.md): Deprecated.
- [CompleteAbortTask](ioscsiparallelinterfacecontroller/1577234-completeaborttask.md): Deprecated.
- [CompleteAbortTaskSet](ioscsiparallelinterfacecontroller/1577147-completeaborttaskset.md): Deprecated.
- [CompleteClearACA](ioscsiparallelinterfacecontroller/1577167-completeclearaca.md): Deprecated.
- [CompleteClearTaskSet](ioscsiparallelinterfacecontroller/1577203-completecleartaskset.md): Deprecated.
- [CompleteLogicalUnitReset](ioscsiparallelinterfacecontroller/1577160-completelogicalunitreset.md): Deprecated.
- [CompleteOutstandingTasksForTarget](ioscsiparallelinterfacecontroller/3553418-completeoutstandingtasksfortarge.md): Deprecated.
- [CompleteOutstandingTasksForTargetID](ioscsiparallelinterfacecontroller/3553419-completeoutstandingtasksfortarge.md): Deprecated.
- [CompleteParallelTask](ioscsiparallelinterfacecontroller/1577148-completeparalleltask.md): Deprecated.
- [CompleteTargetReset](ioscsiparallelinterfacecontroller/1577252-completetargetreset.md): Deprecated.
- [CreateDeviceInterrupt](ioscsiparallelinterfacecontroller/1577143-createdeviceinterrupt.md): Deprecated.
- [CreateTargetForID](ioscsiparallelinterfacecontroller/1577157-createtargetforid.md): Deprecated.
- [CreateTargetForID](ioscsiparallelinterfacecontroller/3516772-createtargetforid.md): Deprecated.
- [CreateWorkLoop](ioscsiparallelinterfacecontroller/1577210-createworkloop.md): Deprecated.
- [DeallocateSCSIParallelTasks](ioscsiparallelinterfacecontroller/1577282-deallocatescsiparalleltasks.md): Deprecated.
- [DestroyTargetForID](ioscsiparallelinterfacecontroller/1577285-destroytargetforid.md): Deprecated.
- [DisableInterrupt](ioscsiparallelinterfacecontroller/1577191-disableinterrupt.md): Deprecated.
- [DoesHBAPerformAutoSense](ioscsiparallelinterfacecontroller/1577158-doeshbaperformautosense.md): Deprecated.
- [DoesHBAPerformDeviceManagement](ioscsiparallelinterfacecontroller/1577171-doeshbaperformdevicemanagement.md): Deprecated.
- [DoesHBASupportMultiPathing](ioscsiparallelinterfacecontroller/1577159-doeshbasupportmultipathing.md): Deprecated.
- [DoesHBASupportSCSIParallelFeature](ioscsiparallelinterfacecontroller/1577300-doeshbasupportscsiparallelfeatur.md): Deprecated.
- [EnableInterrupt](ioscsiparallelinterfacecontroller/1577214-enableinterrupt.md): Deprecated.
- [ExecuteParallelTask](ioscsiparallelinterfacecontroller/1577206-executeparalleltask.md): Deprecated.
- [FilterInterruptRequest](ioscsiparallelinterfacecontroller/1577268-filterinterruptrequest.md): Deprecated.
- [FindTaskForAddress](ioscsiparallelinterfacecontroller/1577181-findtaskforaddress.md): Deprecated.
- [FindTaskForControllerIdentifier](ioscsiparallelinterfacecontroller/1577301-findtaskforcontrolleridentifier.md): Deprecated.
- [FreeSCSIParallelTask](ioscsiparallelinterfacecontroller/1577216-freescsiparalleltask.md): Deprecated.
- [GetAutoSenseData](ioscsiparallelinterfacecontroller/1577227-getautosensedata.md): Deprecated.
- [GetAutoSenseDataSize](ioscsiparallelinterfacecontroller/1577273-getautosensedatasize.md): Deprecated.
- [GetCommandDescriptorBlock](ioscsiparallelinterfacecontroller/1577177-getcommanddescriptorblock.md): Deprecated.
- [GetCommandDescriptorBlockSize](ioscsiparallelinterfacecontroller/1577280-getcommanddescriptorblocksize.md): Deprecated.
- [GetCommandGate](ioscsiparallelinterfacecontroller/1577218-getcommandgate.md): Deprecated.
- [GetControllerTaskIdentifier](ioscsiparallelinterfacecontroller/1577298-getcontrollertaskidentifier.md): Deprecated.
- [GetDMACommand](ioscsiparallelinterfacecontroller/1577172-getdmacommand.md): Deprecated.
- [GetDataBuffer](ioscsiparallelinterfacecontroller/1577162-getdatabuffer.md): Deprecated.
- [GetDataBufferOffset](ioscsiparallelinterfacecontroller/1577223-getdatabufferoffset.md): Deprecated.
- [GetDataTransferDirection](ioscsiparallelinterfacecontroller/1577305-getdatatransferdirection.md): Deprecated.
- [GetHBADataDescriptor](ioscsiparallelinterfacecontroller/1577292-gethbadatadescriptor.md): Deprecated.
- [GetHBADataPointer](ioscsiparallelinterfacecontroller/1577229-gethbadatapointer.md): Deprecated.
- [GetHBADataSize](ioscsiparallelinterfacecontroller/1577213-gethbadatasize.md): Deprecated.
- [GetHBATargetDataPointer](ioscsiparallelinterfacecontroller/1577271-gethbatargetdatapointer.md): Deprecated.
- [GetHBATargetDataSize](ioscsiparallelinterfacecontroller/1577180-gethbatargetdatasize.md): Deprecated.
- [GetLogicalUnitBytes](ioscsiparallelinterfacecontroller/1577205-getlogicalunitbytes.md): Deprecated.
- [GetLogicalUnitNumber](ioscsiparallelinterfacecontroller/1577242-getlogicalunitnumber.md): Deprecated.
- [GetProvider](ioscsiparallelinterfacecontroller/1577284-getprovider.md): Deprecated.
- [GetRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1577188-getrealizeddatatransfercount.md): Deprecated.
- [GetRequestedDataTransferCount](ioscsiparallelinterfacecontroller/1577168-getrequesteddatatransfercount.md): Deprecated.
- [GetSCSIDomainIdentifier](ioscsiparallelinterfacecontroller/1577156-getscsidomainidentifier.md): Deprecated.
- [GetSCSIParallelFeatureNegotiation](ioscsiparallelinterfacecontroller/1577260-getscsiparallelfeaturenegotiatio.md): Deprecated.
- [GetSCSIParallelFeatureNegotiationCount](ioscsiparallelinterfacecontroller/1577164-getscsiparallelfeaturenegotiatio.md): Deprecated.
- [GetSCSIParallelFeatureNegotiationResult](ioscsiparallelinterfacecontroller/1577297-getscsiparallelfeaturenegotiatio.md): Deprecated.
- [GetSCSIParallelFeatureNegotiationResultCount](ioscsiparallelinterfacecontroller/1577266-getscsiparallelfeaturenegotiatio.md): Deprecated.
- [GetSCSIParallelTask](ioscsiparallelinterfacecontroller/1577257-getscsiparalleltask.md): Deprecated.
- [GetSCSITaskIdentifier](ioscsiparallelinterfacecontroller/1577228-getscsitaskidentifier.md): Deprecated.
- [GetTaggedTaskIdentifier](ioscsiparallelinterfacecontroller/1577163-gettaggedtaskidentifier.md): Deprecated.
- [GetTargetForID](ioscsiparallelinterfacecontroller/1577144-gettargetforid.md): Deprecated.
- [GetTargetIdentifier](ioscsiparallelinterfacecontroller/1577302-gettargetidentifier.md): Deprecated.
- [GetTaskAttribute](ioscsiparallelinterfacecontroller/1577175-gettaskattribute.md): Deprecated.
- [GetTimeoutDuration](ioscsiparallelinterfacecontroller/1577250-gettimeoutduration.md): Deprecated.
- [GetWorkLoop](ioscsiparallelinterfacecontroller/1577217-getworkloop.md): Deprecated.
- [HandleInterruptRequest](ioscsiparallelinterfacecontroller/1577221-handleinterruptrequest.md): Deprecated.
- [HandleTimeout](ioscsiparallelinterfacecontroller/1577232-handletimeout.md): Deprecated.
- [IncrementRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1577246-incrementrealizeddatatransfercou.md): Deprecated.
- [InitializeController](ioscsiparallelinterfacecontroller/1577152-initializecontroller.md): Deprecated.
- [InitializeDMASpecification](ioscsiparallelinterfacecontroller/1577193-initializedmaspecification.md): Deprecated.
- [InitializeDeviceList](ioscsiparallelinterfacecontroller/1577289-initializedevicelist.md): Deprecated.
- [InitializeTargetForID](ioscsiparallelinterfacecontroller/1577224-initializetargetforid.md): Deprecated.
- [LogicalUnitResetRequest](ioscsiparallelinterfacecontroller/1577189-logicalunitresetrequest.md): Deprecated.
- [NotifyClientsOfBusReset](ioscsiparallelinterfacecontroller/1577253-notifyclientsofbusreset.md): Deprecated.
- [NotifyClientsOfPortStatusChange](ioscsiparallelinterfacecontroller/1577258-notifyclientsofportstatuschange.md): Deprecated.
- [ProcessParallelTask](ioscsiparallelinterfacecontroller/1577165-processparalleltask.md): Deprecated.
- [ReleaseWorkLoop](ioscsiparallelinterfacecontroller/1577275-releaseworkloop.md): Deprecated.
- [RemoveDeviceFromTargetList](ioscsiparallelinterfacecontroller/1577296-removedevicefromtargetlist.md): Deprecated.
- [RemoveHBAProperty](ioscsiparallelinterfacecontroller/1577295-removehbaproperty.md): Deprecated.
- [RemoveTargetProperty](ioscsiparallelinterfacecontroller/1577247-removetargetproperty.md): Deprecated.
- [ReportHBAConstraints](ioscsiparallelinterfacecontroller/1577267-reporthbaconstraints.md): Deprecated.
- [ReportHBAHighestLogicalUnitNumber](ioscsiparallelinterfacecontroller/1577192-reporthbahighestlogicalunitnumbe.md): Deprecated.
- [ReportHBASpecificDeviceDataSize](ioscsiparallelinterfacecontroller/1577212-reporthbaspecificdevicedatasize.md): Deprecated.
- [ReportHBASpecificTaskDataSize](ioscsiparallelinterfacecontroller/1577256-reporthbaspecifictaskdatasize.md): Deprecated.
- [ReportHighestSupportedDeviceID](ioscsiparallelinterfacecontroller/1577145-reporthighestsupporteddeviceid.md): Deprecated.
- [ReportInitiatorIdentifier](ioscsiparallelinterfacecontroller/1577230-reportinitiatoridentifier.md): Deprecated.
- [ReportMaximumTaskCount](ioscsiparallelinterfacecontroller/1577169-reportmaximumtaskcount.md): Deprecated.
- [ResumeServices](ioscsiparallelinterfacecontroller/1577183-resumeservices.md): Deprecated.
- [SetAutoSenseData](ioscsiparallelinterfacecontroller/1577161-setautosensedata.md): Deprecated.
- [SetControllerTaskIdentifier](ioscsiparallelinterfacecontroller/1577186-setcontrollertaskidentifier.md): Deprecated.
- [SetHBAProperty](ioscsiparallelinterfacecontroller/1577208-sethbaproperty.md): Deprecated.
- [SetRealizedDataTransferCount](ioscsiparallelinterfacecontroller/1577142-setrealizeddatatransfercount.md): Deprecated.
- [SetSCSIParallelFeatureNegotiationResult](ioscsiparallelinterfacecontroller/1577231-setscsiparallelfeaturenegotiatio.md): Deprecated.
- [SetTargetProperty](ioscsiparallelinterfacecontroller/1577276-settargetproperty.md): Deprecated.
- [SetTimeoutForTask](ioscsiparallelinterfacecontroller/1577248-settimeoutfortask.md): Deprecated.
- [SignalInterrupt](ioscsiparallelinterfacecontroller/1577239-signalinterrupt.md): Deprecated.
- [StartController](ioscsiparallelinterfacecontroller/1577166-startcontroller.md): Deprecated.
- [StopController](ioscsiparallelinterfacecontroller/1577243-stopcontroller.md): Deprecated.
- [SuspendServices](ioscsiparallelinterfacecontroller/1577304-suspendservices.md): Deprecated.
- [TargetResetRequest](ioscsiparallelinterfacecontroller/1577270-targetresetrequest.md): Deprecated.
- [TerminateController](ioscsiparallelinterfacecontroller/1577155-terminatecontroller.md): Deprecated.
- [didTerminate](ioscsiparallelinterfacecontroller/1577263-didterminate.md): Deprecated.
- [free](ioscsiparallelinterfacecontroller/1577225-free.md): Deprecated.
- [getMetaClass](ioscsiparallelinterfacecontroller/1577254-getmetaclass.md): Deprecated.
- [getWorkLoop](ioscsiparallelinterfacecontroller/1577197-getworkloop.md): Deprecated.
- [handleClose](ioscsiparallelinterfacecontroller/1577154-handleclose.md): Deprecated.
- [handleIsOpen](ioscsiparallelinterfacecontroller/1577303-handleisopen.md): Deprecated.
- [handleOpen](ioscsiparallelinterfacecontroller/1577182-handleopen.md): Deprecated.
- [start](ioscsiparallelinterfacecontroller/1577220-start.md): Deprecated.
- [stop](ioscsiparallelinterfacecontroller/1577287-stop.md): Deprecated.
- [willTerminate](ioscsiparallelinterfacecontroller/1577238-willterminate.md): Deprecated.

### Type Methods

- [FilterInterrupt](ioscsiparallelinterfacecontroller/1577283-filterinterrupt.md): Deprecated.
- [ServiceInterrupt](ioscsiparallelinterfacecontroller/1577240-serviceinterrupt.md): Deprecated.
- [TimeoutOccurred](ioscsiparallelinterfacecontroller/1577190-timeoutoccurred.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Multimedia Devices

- [IOSCSILogicalUnitNub](ioscsilogicalunitnub.md)
- [IOSCSIPeripheralDeviceType05](ioscsiperipheraldevicetype05.md)
- [IOSCSIMultimediaCommandsDevice](ioscsimultimediacommandsdevice.md)
